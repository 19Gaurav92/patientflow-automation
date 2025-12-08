'use client';
import { useState } from 'react';

export default function Appointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Amit Kumar', phone: '+91 98765 43210', dateTime: 'Today, 2:30 PM', doctor: 'Dr. Sharma', status: 'Booked', notes: 'Regular checkup' },
    { id: 2, patient: 'Priya Singh', phone: '+91 87654 32109', dateTime: 'Today, 3:45 PM', doctor: 'Dr. Patel', status: 'Booked', notes: 'Consultation' },
    { id: 3, patient: 'Rajesh Verma', phone: '+91 76543 21098', dateTime: 'Tomorrow, 10:00 AM', doctor: 'Dr. Sharma', status: 'Booked', notes: 'Follow-up' },
    { id: 4, patient: 'Neha Gupta', phone: '+91 65432 10987', dateTime: 'Dec 6, 11:30 AM', doctor: 'Dr. Patel', status: 'Completed', notes: 'Checkup done' },
    { id: 5, patient: 'Vikram Mehta', phone: '+91 54321 09876', dateTime: 'Dec 5, 4:00 PM', doctor: 'Dr. Sharma', status: 'No Show', notes: 'Patient missed' },
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Appointments</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">+ New Appointment</button>
      </div>

      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700">
          <p className="text-gray-400 text-sm">Total: {appointments.length} appointments</p>
        </div>
        <table className="w-full">
          <thead className="bg-slate-700">
            <tr>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Patient</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Phone</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Date & Time</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Doctor</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-gray-300 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => (
              <tr key={apt.id} className="border-t border-slate-700 hover:bg-slate-750 transition">
                <td className="px-6 py-4 text-white">{apt.patient}</td>
                <td className="px-6 py-4 text-gray-300">{apt.phone}</td>
                <td className="px-6 py-4 text-gray-300">{apt.dateTime}</td>
                <td className="px-6 py-4 text-gray-300">{apt.doctor}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    apt.status === 'Booked' ? 'bg-blue-600 text-white' :
                    apt.status === 'Completed' ? 'bg-green-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>{apt.status}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm mr-3">Edit</button>
                  <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
