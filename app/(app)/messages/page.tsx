'use client';

import { Sidebar } from '@/app/components/sidebar';

const messages = [
  {
    id: 1,
    sender: 'Dr. Sarah Johnson',
    preview: 'Your lab results are ready for review',
    time: '10:30 AM',
    unread: true,
  },
  {
    id: 2,
    sender: 'Nurse Manager',
    preview: 'Appointment confirmation for tomorrow',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 3,
    sender: 'Patient Portal',
    preview: 'Your prescription has been refilled',
    time: '2 days ago',
    unread: false,
  },
];

export default function MessagesPage() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        
        <div className="bg-slate-50 rounded-lg border border-slate-200">
          {messages.map((message) => (
            <div
              key={message.id}
              className="p-4 border-b border-slate-200 hover:bg-slate-100 cursor-pointer transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-semibold ${
                      message.unread ? 'text-black' : 'text-gray-600'
                    }`}>
                      {message.sender}
                    </h3>
                    {message.unread && (
                      <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    {message.preview}
                  </p>
                </div>
                <span className="text-gray-500 text-sm">{message.time}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
