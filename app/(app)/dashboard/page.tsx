'use client';

export default function Dashboard() {
  const stats = [
    { label: 'Upcoming Appointments', value: '12', detail: '3 scheduled today' },
    { label: 'Messages Sent (7D)', value: '284', detail: '52 WhatsApp messages' },
    { label: 'Review Requests Pending', value: '18', detail: '8 completed' },
    { label: 'No-Show Follow-ups', value: '5', detail: '2 rescheduled' },
  ];

  const appointments = [
    { id: 1, patient: 'Amit Kumar', phone: '+91 98765 43210', dateTime: 'Today, 2:30 PM', doctor: 'Dr. Sharma', status: 'Booked' },
    { id: 2, patient: 'Priya Singh', phone: '+91 87654 32109', dateTime: 'Today, 3:45 PM', doctor: 'Dr. Patel', status: 'Booked' },
    { id: 3, patient: 'Rajesh Verma', phone: '+91 76543 21098', dateTime: 'Tomorrow, 10:00 AM', doctor: 'Dr. Sharma', status: 'Booked' },
    { id: 4, patient: 'Neha Gupta', phone: '+91 65432 10987', dateTime: 'Dec 6, 11:30 AM', doctor: 'Dr. Patel', status: 'Completed' },
    { id: 5, patient: 'Vikram Mehta', phone: '+91 54321 09876', dateTime: 'Dec 5, 4:00 PM', doctor: 'Dr. Sharma', status: 'No Show' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-slate-800 p-6 rounded-lg">
            <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</p>
            <p className="text-xs text-gray-500">✓ {stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Next 5 Appointments</h2>
        </div>
        <table className="w-full">
          <thead className="bg-slate-700">
            <tr>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Patient Name</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Phone</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Date & Time</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Doctor</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody divide-y divide-slate-700">
            {appointments.map((apt) => (
              <tr key={apt.id} className="border-t border-slate-700 hover:bg-slate-750 transition">
                <td className="px-6 py-4 text-white">{apt.patient}</td>
                <td className="px-6 py-4 text-gray-300">{apt.phone}</td>
                <td className="px-6 py-4 text-gray-300">{apt.dateTime}</td>
                <td className="px-6 py-4 text-gray-300">{apt.doctor}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    apt.status === 'Booked' ? 'bg-blue-600 text-white' :
                    apt.status === 'Completed' ? 'bg-green-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
