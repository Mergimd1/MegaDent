import React from 'react';
import { Calendar, Users, Activity, Syringe, ShieldPlus, Clock, Search } from 'lucide-react';

export default function Dashboard() {
  const sherbimet = [
    { emri: 'Nxjerrje Dhëmbi', pershkrimi: 'Ekstraksion i thjeshtë ose kirurgjikal.', ikona: <Syringe className="w-6 h-6 text-blue-500" /> },
    { emri: 'Pastrim Gurëzash', pershkrimi: 'Pastrim profesional dhe polirim.', ikona: <Activity className="w-6 h-6 text-green-500" /> },
    { emri: 'Zbardhim Estetik', pershkrimi: 'Trajtim për zbardhjen e buzëqeshjes.', ikona: <ShieldPlus className="w-6 h-6 text-purple-500" /> },
    { emri: 'Implante Dentare', pershkrimi: 'Zëvendësim i përhershëm i dhëmbëve.', ikona: <ShieldPlus className="w-6 h-6 text-teal-500" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden lg:block">
        <h1 className="text-2xl font-bold mb-10 text-blue-400">MegaDent<span className="text-white">+</span></h1>
        <nav className="space-y-4">
          <div className="flex items-center space-x-3 bg-blue-600 p-3 rounded-lg cursor-pointer">
            <Activity className="w-5 h-5" /> <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 hover:text-white p-3 cursor-pointer transition">
            <Users className="w-5 h-5" /> <span>Pacientët</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 hover:text-white p-3 cursor-pointer transition">
            <Calendar className="w-5 h-5" /> <span>Terminet</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-800">Paneli i Kontrollit</h2>
            <p className="text-slate-500">Mirësevini përsëri, Dr. Agimi.</p>
          </div>
          <div className="flex items-center bg-white border rounded-xl px-4 py-2 shadow-sm w-full md:w-auto">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <input type="text" placeholder="Kërko pacientin..." className="outline-none text-sm w-full" />
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium">Pacientë Sot</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">14</h3>
              </div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users /></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium">Termine të Reja</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">6</h3>
              </div>
              <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Clock /></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <h3 className="text-xl font-bold text-slate-800 mb-6">Shërbimet Kryesore</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {sherbimet.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all cursor-pointer group">
              <div className="mb-4 group-hover:scale-110 transition-transform">{s.ikona}</div>
              <h4 className="font-bold text-slate-800 mb-1">{s.emri}</h4>
              <p className="text-sm text-slate-500">{s.pershkrimi}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
