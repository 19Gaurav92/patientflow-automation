# PatientFlow Automation

**Production-ready multi-tenant SaaS for clinic appointment automation, WhatsApp reminders, and message management**

[![GitHub repo](https://img.shields.io/badge/GitHub-patientflow--automation-blue?style=flat&logo=github)](https://github.com/19Gaurav92/patientflow-automation)
[![TypeScript](https://img.shields.io/badge/TypeScript-63.7%25-blue)]()
[![HTML/CSS](https://img.shields.io/badge/HTML%2FCSS-36.3%25-red)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)]()

## Overview

PatientFlow Automation is a comprehensive SaaS platform designed to streamline clinic operations by automating appointment scheduling, patient messaging, and follow-up management. The application provides healthcare providers with an intuitive dashboard to manage patient communications, track appointments, and send automated reminders via WhatsApp.

## Key Features

### 📊 Dashboard
- **Real-time Analytics**: View key metrics including upcoming appointments, sent messages, pending reviews, and no-show follow-ups
- **Appointment Overview**: See the next 5 scheduled appointments with patient details
- **Clinic Information**: Display clinic details and user profile management

### 📅 Appointment Management
- Schedule and track patient appointments
- View appointment status (Booked, Completed, No-Show)
- Patient contact information and doctor assignment
- Date and time scheduling

### 💬 Patient Messaging
- Send secure messages to patients
- View message history and conversations
- Track message delivery status
- Support for WhatsApp integration

### 📝 Message Templates
- Pre-built message templates for common scenarios
- Edit and duplicate templates
- Organize templates by category
- Quick send functionality

### ⚙️ Settings & Configuration
- Account management and profile settings
- Notification preferences
- Connected services and integrations
- EHR system integration configuration
- Email provider settings

### 🔐 Authentication
- Secure login system
- User registration with validation
- Session management
- Password recovery options

### 🏠 Landing Page
- Professional landing page with hero section
- Feature showcase with icons and descriptions
- Call-to-action buttons for sign-up and demo
- Responsive design for all devices

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom React components
- **Authentication**: next-auth (configured)

### Backend
- **API**: Next.js API routes
- **Database**: Prisma ORM (configured)
- **Real-time**: WebSocket ready

### Deployment
- **Hosting**: GitHub Pages (Static Export)
- **CI/CD**: GitHub Actions
- **Version Control**: Git/GitHub

## Project Structure

```
app/
├── (app)/                          # Protected routes with sidebar
│   ├── dashboard/
│   │   └── page.tsx               # Dashboard with analytics
│   ├── appointments/
│   │   └── page.tsx               # Appointment management
│   ├── messages/
│   │   └── page.tsx               # Patient messaging interface
│   ├── templates/
│   │   └── page.tsx               # Message template management
│   ├── settings/
│   │   └── page.tsx               # Account & notification settings
│   └── layout.tsx                 # App layout with sidebar
├── auth/
│   ├── login/
│   │   └── page.tsx               # Login page
│   └── signup/
│       └── page.tsx               # User registration
├── components/
│   └── sidebar.tsx                # Navigation sidebar
├── page.tsx                       # Landing page
├── layout.tsx                     # Root layout
├── globals.css                    # Global styles
prisma/
├── schema.prisma                  # Database schema
package.json                       # Dependencies
next.config.js                    # Next.js config
tailwind.config.ts                # Tailwind config
```

## Pages Implemented

### Public Pages
- **Landing Page** (`/`) - Hero section with features and CTA
- **Login** (`/auth/login`) - User authentication
- **Signup** (`/auth/signup`) - New user registration

### Protected Pages
- **Dashboard** (`/dashboard`) - Main analytics and overview
- **Appointments** (`/appointments`) - Appointment scheduling and management
- **Messages** (`/messages`) - Patient communication interface
- **Templates** (`/templates`) - Message template management
- **Settings** (`/settings`) - Account and app configuration

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/19Gaurav92/patientflow-automation.git
cd patientflow-automation
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Live Demo

View the live deployment: [PatientFlow Dashboard](https://19gaurav92.github.io/patientflow-automation/)

## API Endpoints (Ready for Implementation)

- `GET /api/appointments` - List all appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/messages` - List messages
- `POST /api/messages/send` - Send message
- `GET /api/templates` - List message templates
- `GET /api/analytics` - Dashboard analytics

## Database Schema (Prisma)

Ready for configuration with your database:
```prisma
model Clinic { ... }
model Doctor { ... }
model Patient { ... }
model Appointment { ... }
model Message { ... }
model MessageTemplate { ... }
```

## Features Coming Soon

- [ ] WhatsApp Integration API
- [ ] SMS notifications
- [ ] Advanced analytics and reporting
- [ ] Patient portal (patient-side access)
- [ ] Video consultation integration
- [ ] Payment processing
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Mobile app (React Native)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this in your own projects

## Support

For issues and questions, please open a GitHub issue or contact the maintainer.

---

**Built with ❤️ by [Gaurav Soni](https://github.com/19Gaurav92)**
