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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
