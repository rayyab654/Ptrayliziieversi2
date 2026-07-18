import React from 'react';
import { Monitor, Smartphone, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-between p-6">
      {/* Header */}
      <header className="max-w-7xl mx-auto w-full py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-wider text-emerald-400">
          RAYLIZIIE MEDIA DIGITAL
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto text-center my-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Solusi Digital Kreatif <br/>
          <span className="text-emerald-400">Masa Depan Bisnis Anda</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Kami membantu transformasi bisnis konvensional Anda menjadi platform digital yang modern, cepat, dan responsif.
        </p>

        {/* Fitur/Layanan singkat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <Monitor className="text-emerald-400 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-slate-400 text-sm">Pembuatan website performa tinggi dengan teknologi modern.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <Smartphone className="text-emerald-400 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Mobile Apps</h3>
            <p className="text-slate-400 text-sm">Aplikasi mobile responsif yang ramah untuk pengguna.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <Code className="text-emerald-400 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Digital Integration</h3>
            <p className="text-slate-400 text-sm">Integrasi sistem cerdas untuk efisiensi bisnis Anda.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-500 text-sm border-t border-slate-800">
        &copy; {new Date().getFullYear()} Rayliziie Media Digital. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
