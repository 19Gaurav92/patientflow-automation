'use client';

import Link from 'next/link';
import { Activity, Users, MessageSquare, Settings, Shield, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-600 rounded-full p-2">
            <Activity className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold">PatientFlow</span>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login" className="text-gray-700 hover:text-cyan-600 font-medium">
            Sign In
          </Link>
          <Link href="/auth/signup" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-gradient-to-br from-cyan-50 to-blue-50">
        <h1 className="text-5xl font-bold mb-4">Streamline Your Patient Communication</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          PatientFlow automates appointment scheduling, messaging, and follow-ups so you can focus on patient care.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/signup" className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 font-semibold">
            Start Free Trial
          </Link>
          <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 font-semibold">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: MessageSquare, title: 'Smart Messaging', desc: 'Communicate with patients securely' },
            { icon: Users, title: 'Appointment Management', desc: 'Schedule and track appointments effortlessly' },
            { icon: TrendingUp, title: 'Analytics & Insights', desc: 'Track key metrics and patient outcomes' },
            { icon: Shield, title: 'HIPAA Compliant', desc: 'Enterprise-grade security for patient data' },
            { icon: Activity, title: 'Real-time Notifications', desc: 'Never miss important patient updates' },
            { icon: Settings, title: 'Customizable Workflows', desc: 'Adapt the system to your practice' },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="p-6 rounded-lg border border-slate-200 hover:shadow-lg transition">
                <Icon className="text-cyan-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 bg-cyan-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
        <p className="text-xl mb-8 opacity-90">Join healthcare providers using PatientFlow to deliver better care.</p>
        <Link href="/auth/signup" className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold inline-block">
          Start Your Free Trial Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-slate-200 text-center text-gray-600">
        <p>&copy; 2024 PatientFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
