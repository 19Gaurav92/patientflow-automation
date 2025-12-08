'use client';

import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-cyan-600 rounded-full p-3">
            <LogIn className="text-white" size={32} />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-2">PatientFlow</h1>
        <p className="text-gray-600 text-center mb-8">Sign in to your account</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="doctor@patientflow.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700">
              Forgot password?
            </a>
          </div>
          
          <button type="submit" className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition">
            Sign In
          </button>
        </form>
        
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-cyan-600 hover:text-cyan-700 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
