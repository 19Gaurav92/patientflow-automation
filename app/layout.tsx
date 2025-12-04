import './globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'

export const metadata: Metadata = {
  title: 'PatientFlow Automation',
  description: 'Multi-tenant SaaS for clinic appointment automation and WhatsApp reminders',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
