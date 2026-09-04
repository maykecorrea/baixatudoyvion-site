import React from 'react';
import { X, Download, Monitor, Smartphone, Apple } from 'lucide-react';

export function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#050B14] border border-neon/50 w-full max-w-lg rounded-xl shadow-[0_0_50px_rgba(0,229,255,0.2)] relative p-8 font-mono text-textLight">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neon hover:text-white transition-colors p-2"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest text-center text-glow">Selecione sua Plataforma</h2>
        <p className="text-center text-sm text-textLight/50 mb-8">Escolha a versão correta para o seu dispositivo.</p>

        <div className="flex flex-col gap-4">
          {/* Windows - Versão Funcional */}
          <a 
            href="https://github.com/maykecorrea/baixatudoyvion/releases/download/Downloads/Baixa.Tudo.Yvion.Setup.1.2.2.exe" 
            className="flex items-center gap-4 p-4 border border-neon bg-neon/10 rounded-lg hover:bg-neon hover:text-background transition-all group"
          >
            <img src="/imagem/winddws.png" alt="Windows" className="h-8 object-contain brightness-0 invert group-hover:invert-0 transition-all" />
            <div className="flex-1 text-left">
              <h3 className="font-bold text-lg uppercase tracking-widest">Windows (PC)</h3>
              <p className="text-xs opacity-70">Versão 1.2.2 • 64-bit</p>
            </div>
            <Download size={20} />
          </a>

          {/* macOS - Em Breve */}
          <div className="flex items-center gap-4 p-4 border border-border bg-panel/50 rounded-lg opacity-50 cursor-not-allowed">
            <img src="/imagem/aple.png" alt="Apple" className="h-8 object-contain" />
            <div className="flex-1 text-left">
              <h3 className="font-bold text-lg uppercase tracking-widest text-white">macOS</h3>
              <p className="text-xs text-textLight/70">Em desenvolvimento...</p>
            </div>
          </div>

          {/* Android - Em Breve */}
          <div className="flex items-center gap-4 p-4 border border-border bg-panel/50 rounded-lg opacity-50 cursor-not-allowed">
            <img src="/imagem/android.png" alt="Android" className="h-8 object-contain" />
            <div className="flex-1 text-left">
              <h3 className="font-bold text-lg uppercase tracking-widest text-white">Android</h3>
              <p className="text-xs text-textLight/70">Em desenvolvimento...</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
