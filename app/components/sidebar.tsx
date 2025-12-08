'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Appointments', href: '/appointments', icon: '📅' },
    { name: 'Messages', href: '/messages', icon: '💬' },
    { name: 'Templates', href: '/templates', icon: '📝' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-700 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
          🏥 PatientFlow
        </h1>
        <p className="text-xs text-gray-500 mt-1">Clinic Automation</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menu.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-cyan-600 text-white font-semibold'
                  : 'text-gray-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold transition">Sign Out</button>
      </div>
    </aside>
  );
}
