'use client';

import { Sidebar } from '@/app/components/sidebar';
import { Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="max-w-2xl space-y-8">
          {/* Account Settings */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="doctor@patientflow.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Dr. Sarah Johnson"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-700">Email notifications for new messages</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-700">Appointment reminders</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700">Marketing emails</span>
              </label>
            </div>
          </div>

          {/* Integration Settings */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Connected Services</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <span>EHR System Integration</span>
                <button className="text-cyan-600 hover:text-cyan-700 font-medium">Configure</button>
              </div>
              <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <span>Email Provider</span>
                <button className="text-cyan-600 hover:text-cyan-700 font-medium">Configure</button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
