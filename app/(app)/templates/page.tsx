'use client';

import { Sidebar } from '@/app/components/sidebar';
import { Plus } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Follow-up Consultation',
    description: 'Template for follow-up appointment reminders',
    category: 'Appointments',
  },
  {
    id: 2,
    name: 'Lab Results Notification',
    description: 'Template for notifying patients about lab results',
    category: 'Results',
  },
  {
    id: 3,
    name: 'Medication Reminder',
    description: 'Template for medication adherence reminders',
    category: 'Medications',
  },
  {
    id: 4,
    name: 'Appointment Confirmation',
    description: 'Template for confirming scheduled appointments',
    category: 'Appointments',
  },
];

export default function TemplatesPage() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Message Templates</h1>
          <button className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
            <Plus size={20} />
            New Template
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{template.name}</h3>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                  {template.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>
              <div className="flex gap-2">
                <button className="flex-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 px-3 py-2 rounded transition">
                  Edit
                </button>
                <button className="flex-1 text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 px-3 py-2 rounded transition">
                  Duplicate
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
