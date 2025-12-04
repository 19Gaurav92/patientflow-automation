# PatientFlow Automation - Installation & Deployment Guide

## Quick Start (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/19Gaurav92/patientflow-automation.git
cd patientflow-automation

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration:
# - DATABASE_URL: PostgreSQL connection string
# - NEXTAUTH_SECRET: Generate with: openssl rand -base64 32
# - WHATSAPP_TOKEN, WHATSAPP_PHONE_ID, etc.

# 4. Set up database
npx prisma db push
npm run db:seed

# 5. Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Prerequisites

- **Node.js**: 18.17+ (recommended 20+)
- **PostgreSQL**: 14+ (local or cloud: Supabase, Railway, Neon, etc.)
- **WhatsApp Business Account**: For WhatsApp Cloud API integration
- **Git**: For version control

---

## Database Setup

### Option 1: Local PostgreSQL

```bash
# macOS (Homebrew)
brew install postgresql
brew services start postgresql

# Create database
creatdb patientflow

# Add to .env.local
DATABASE_URL="postgresql://localhost/patientflow"
```

### Option 2: Supabase (Recommended for SaaS)

1. Go to https://supabase.com
2. Create a new project
3. Copy the connection string from Project Settings > Database > Connection String
4. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]?schema=public"
   ```

### Option 3: Railway, Neon, or other providers

Follow their PostgreSQL setup and add the connection string to `.env.local`.

---

## Environment Variables Setup

### Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
# Copy output to NEXTAUTH_SECRET in .env.local
```

### WhatsApp Integration

1. Go to https://developers.facebook.com
2. Create an app (type: Business)
3. Add WhatsApp product
4. Create a Test Phone Number or verify your actual Business Phone Number
5. Generate a Temporary Access Token
6. Add to `.env.local`:
   ```
   WHATSAPP_API_URL="https://graph.instagram.com/v18.0"
   WHATSAPP_TOKEN="your-access-token"
   WHATSAPP_PHONE_ID="your-phone-number-id"
   ```

### Optional: Twilio for Missed Calls

1. Go to https://www.twilio.com
2. Sign up and create an account
3. Get your Account SID and Auth Token from Console
4. Add to `.env.local`:
   ```
   TWILIO_ACCOUNT_SID="your-account-sid"
   TWILIO_AUTH_TOKEN="your-auth-token"
   ```

---

## Project Structure

```
patientflow-automation/
├── app/
│   ├── (public)/                 # Landing, login, register pages
│   ├── (app)/app/               # Authenticated clinic area
│   │   ├── dashboard/           # Main dashboard
│   │   ├── appointments/        # Appointments CRUD
│   │   ├── messages/            # Message logs
│   │   └── settings/            # Clinic & template settings
│   ├── (admin)/admin/           # SuperAdmin area
│   └── api/                     # REST API routes
├── lib/
│   ├── auth.ts                  # NextAuth config
│   ├── db.ts                    # Prisma client
│   ├── whatsappClient.ts        # WhatsApp API client
│   ├── cron.ts                  # Scheduled jobs
│   └── templateEngine.ts        # Template variable rendering
├── prisma/
│   ├── schema.prisma            # Database models
│   └── seed.ts                  # Database seeding
├── components/                  # Reusable React components
├── public/                      # Static assets
├── .env.example                 # Environment template
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Database Initialization

### Create tables from schema

```bash
npx prisma db push
```

### Seed default data

```bash
npm run db:seed
```

This creates:
- 1 SUPERADMIN user (email: admin@patientflow.com, password: admin123)
- Default message templates for each clinic

---

## Running the Application

### Development

```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Database Migrations

```bash
# Create migration after schema changes
npx prisma migrate dev --name description_of_change

# View Prisma Studio (GUI)
npx prisma studio
```

---

## Default Login Credentials (After Seed)

- **Email**: admin@patientflow.com
- **Password**: admin123
- **Role**: SUPERADMIN

⚠️ **CHANGE THESE IMMEDIATELY IN PRODUCTION**

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

**Railway**:
```bash
vercel --platform railway
```

**Heroku**:
- Connect GitHub repo to Heroku
- Set environment variables in Heroku dashboard
- Deploy

**Docker (self-hosted)**:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Troubleshooting

### Database connection error

```
Error: connect ECONNREFUSED
```

**Solution**: Check DATABASE_URL in .env.local is correct and PostgreSQL is running.

### Port 3000 already in use

```bash
# macOS/Linux: Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Or run on different port
PORT=3001 npm run dev
```

### Prisma schema out of sync

```bash
# Reset and resync
npx prisma db push --force-reset
npm run db:seed
```

---

## Testing

### API Endpoints (Postman)

1. Import API collection (coming soon)
2. Set environment variables
3. Test endpoints

### Manual Testing Checklist

- [ ] Register clinic owner account
- [ ] Create test appointment
- [ ] Create message template
- [ ] Send test WhatsApp message
- [ ] View message logs
- [ ] Login as SuperAdmin
- [ ] View all clinics

---

## Support & Documentation

- **NextAuth Docs**: https://next-auth.js.org
- **Prisma Docs**: https://www.prisma.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **WhatsApp Cloud API**: https://developers.facebook.com/docs/whatsapp/cloud-api

---

## License

MIT License - See LICENSE file for details
