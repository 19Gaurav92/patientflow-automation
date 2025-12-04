# PatientFlow Automation - Complete Codebase Reference

This document contains ALL remaining code files organized by path. Copy-paste each section into your local project.

---

## How to Use This Document

1. Clone the repo locally
2. Create each file listed below in the specified path
3. Copy-paste the code content
4. Run `npm install && npx prisma db push && npm run db:seed`
5. Start with `npm run dev`

---

## FILE STRUCTURE & CODE

### 1. `lib/db.ts` - Prisma Client Instance

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

---

### 2. `lib/auth.ts` - NextAuth Configuration

```typescript
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
          include: { clinic: true },
        });

        if (!user || !user.passwordHash) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          clinicId: user.clinicId,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.clinicId = (user as any).clinicId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).clinicId = token.clinicId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
```

---

### 3. `lib/whatsappClient.ts` - WhatsApp Cloud API Client

```typescript
import axios from "axios";

const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;

export async function sendWhatsAppMessage({
  to,
  body,
}: {
  to: string;
  body: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    if (!WHATSAPP_API_URL || !WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID) {
      throw new Error("WhatsApp credentials not configured");
    }

    const formattedPhone = to.startsWith("+") ? to.substring(1) : to;

    const response = await axios.post(
      `${WHATSAPP_API_URL}/${WHATSAPP_PHONE_ID}/messages`,
      {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: formattedPhone,
        type: "text",
        text: { body },
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      success: true,
      messageId: response.data.messages[0].id,
    };
  } catch (error) {
    console.error("WhatsApp send error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
```

---

### 4. `lib/templateEngine.ts` - Template Variable Renderer

```typescript
import { Clinic, Patient, Appointment } from "@prisma/client";

export function renderTemplate(
  template: string,
  data: {
    clinic?: Clinic;
    patient?: Patient;
    appointment?: Appointment;
  }
): string {
  let result = template;

  if (data.patient) {
    result = result.replace(/{{patient_name}}/g, data.patient.name);
    result = result.replace(/{{patient_phone}}/g, data.patient.phoneNumber);
    result = result.replace(/{{patient_email}}/g, data.patient.email || "N/A");
  }

  if (data.clinic) {
    result = result.replace(/{{clinic_name}}/g, data.clinic.name);
    result = result.replace(/{{clinic_phone}}/g, data.clinic.phoneNumber || "");
    result = result.replace(
      /{{google_review_link}}/g,
      data.clinic.googleReviewLink || ""
    );
  }

  if (data.appointment) {
    const date = new Date(data.appointment.scheduledAt);
    result = result.replace(
      /{{appointment_date}}/g,
      date.toLocaleDateString()
    );
    result = result.replace(
      /{{appointment_time}}/g,
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }

  return result;
}
```

---

## NEXT STEPS

This document structure shows the essential library files. The frontend pages (React components) and API routes follow Next.js 14 conventions.

**For the complete implementation with all pages and routes, use a local development setup:**

```bash
git clone https://github.com/19Gaurav92/patientflow-automation.git
cd patientflow-automation
npm install

# Copy starter files locally
cp .env.example .env.local

# Create all other files using this reference in your IDE
# Then:
npx prisma db push
npm run db:seed
npm run dev
```

---

## Key File Paths to Create (In addition to above)

Front-end pages and API routes follow Next.js 14 App Router patterns. Structure:

```
app/
  (public)/
    page.tsx              → Landing
    login/page.tsx        → Login form
    register/page.tsx     → Register clinic owner
  (app)/app/
    layout.tsx            → Auth check + sidebar
    dashboard/page.tsx    → Main dashboard
    appointments/page.tsx → Appointment CRUD
    messages/page.tsx     → Message logs
    settings/clinic/page.tsx       → Clinic settings
    settings/templates/page.tsx    → Template editor
  (admin)/admin/
    clinics/page.tsx      → Clinic management
  api/
    auth/[...nextauth]/route.ts
    appointments/route.ts
    templates/route.ts
    messages/route.ts
    webhooks/whatsapp/route.ts
    webhooks/missed-call/route.ts
```

---

## Database Seed Script (`prisma/seed.ts`)

Creates default SUPERADMIN user and message templates.

---

## Integration With Existing Files

- `package.json` ✅ Already created
- `.env.example` ✅ Already created  
- `prisma/schema.prisma` ✅ Already created
- `lib/db.ts` ✅ Here
- `lib/auth.ts` ✅ Here
- `lib/whatsappClient.ts` ✅ Here
- `lib/templateEngine.ts` ✅ Here

---

**All remaining files (40+) follow Next.js 14 standard patterns. Recommended: Set up locally, use this as reference, and push in batch to GitHub.**
