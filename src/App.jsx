import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Zap, ListMusic, Terminal, Shield, Cpu, ChevronDown, CheckCircle2 } from 'lucide-react';
import { LegalModal } from './LegalModals';
import { DownloadModal } from './DownloadModal';

function App() {
  const [legalModal, setLegalModal] = useState(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay bloqueado pelo navegador:", err));
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const handleUserInteraction = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().catch(e => console.log(e));
    }
  };

  return (
    <div onClick={handleUserInteraction} className="relative min-h-screen bg-transparent overflow-hidden selection:bg-neon selection:text-background text-textLight font-mono">
      {/* Background Video (z-[-1] guarantees it is the absolute bottom layer) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/fundo.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay extremamente leve só pra garantir que o texto branco leia em cima de partes claras do vídeo */}
        <div className="absolute inset-0 bg-[#050B14]/40"></div>
        
        {/* Grade cibernética por cima do vídeo */}
        <motion.div 
          className="absolute inset-0 cyber-grid opacity-10"
          style={{ y: yBg }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-neon/20 backdrop-blur-md bg-background/50 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded border border-neon/50 box-glow overflow-hidden bg-background">
            <img src="/imagem/LOGO.png" alt="Logo" className="w-full h-full object-contain p-1" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-widest uppercase text-glow">
              Baixa Tudo <span className="text-neon">Yvion</span>
            </h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest">
          <button onClick={() => setLegalModal('termos')} className="hover:text-neon transition-colors">Termos de Uso</button>
          <button onClick={() => setLegalModal('privacidade')} className="hover:text-neon transition-colors">Privacidade</button>
          <a href="mailto:suportebaixatudoyvion@gmail.com" className="hover:text-neon transition-colors">
            Suporte
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-block border border-neon/30 bg-neon/5 px-4 py-1.5 rounded-full text-xs text-neon uppercase tracking-widest mb-8">
              Lançamento Oficial v1.2.2
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-tight text-glow">
              Baixe todas suas <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-500">
                Playlists e músicas
              </span><br/>
              favoritas de graça!
            </h2>
            
            <p className="text-lg md:text-xl text-textLight/70 max-w-2xl mb-12 leading-relaxed">
              Sem mensalidades e sem limites de download.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => setIsDownloadModalOpen(true)}
                className="group relative inline-flex items-center gap-4 bg-neon/10 border-2 border-neon px-8 py-5 rounded hover:bg-neon hover:text-background transition-all duration-300 overflow-hidden box-glow"
              >
                <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <Download size={24} className="relative z-10" />
                <span className="relative z-10 font-bold text-lg uppercase tracking-widest glitch-hover">
                  Baixar
                </span>
              </button>
            </motion.div>
            
            <div className="mt-8 flex items-center justify-center gap-8">
              <button onClick={() => setIsDownloadModalOpen(true)} className="flex flex-col items-center gap-2">
                <img src="/imagem/winddws.png" alt="Windows" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              </button>
              <button onClick={() => setIsDownloadModalOpen(true)} className="flex flex-col items-center gap-2">
                <img src="/imagem/aple.png" alt="Apple" className="h-12 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              </button>
              <button onClick={() => setIsDownloadModalOpen(true)} className="flex flex-col items-center gap-2">
                <img src="/imagem/android.png" alt="Android" className="h-12 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 animate-bounce text-neon/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* MOCKUP UI SECTION */}
        <section className="py-20 px-4 max-w-6xl mx-auto" id="features">
          <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="border border-border bg-panel/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Fake App Window Header */}
            <div className="bg-background border-b border-border px-4 py-3 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            {/* BENTO GRID */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 bg-background border border-border p-6 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 rounded-full blur-3xl group-hover:bg-neon/10 transition-colors"></div>
                <ListMusic className="text-neon mb-4" size={32} />
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-2">Fila Assíncrona</h3>
                <p className="text-sm text-textLight/70">
                  Não espere um download terminar. Jogue dezenas de playlists na Fila de Extração e deixe o Worker em segundo plano baixar tudo em lote.
                </p>
              </div>
              
              <div className="col-span-1 bg-background border border-border p-6 rounded-lg">
                <Shield className="text-neon mb-4" size={32} />
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-2">Bypass VIP</h3>
                <p className="text-sm text-textLight/70">
                  Motor `yt-dlp` ultra atualizado. Drible bloqueios de IP, restrição de idade e assinaturas corrompidas nativamente.
                </p>
              </div>

              <div className="col-span-1 bg-background border border-border p-6 rounded-lg">
                <Cpu className="text-neon mb-4" size={32} />
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-2">GPU Aceleração</h3>
                <p className="text-sm text-textLight/70">
                  Conversões brutas em MP3/MP4 roteadas através do FFmpeg utilizando o máximo do seu processador.
                </p>
              </div>

              <div className="col-span-1 md:col-span-2 bg-background border border-border p-6 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-2">Autenticação Direta</h3>
                  <p className="text-sm text-textLight/70">Faça login com cookies do Chrome para extrair vídeos privados e listas 'Assistir Mais Tarde'.</p>
                </div>
                <div className="w-16 h-16 rounded-full border border-green-500/30 flex items-center justify-center bg-green-500/10 text-green-400">
                  <CheckCircle2 size={32} />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TERMINAL SECTION */}
        <section className="py-20 px-4 max-w-4xl mx-auto" id="demo">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Sem Segredos. Só Logs.</h2>
            <p className="text-textLight/60 mt-2">Veja exatamente o que o motor está fazendo.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#03060A] border border-border rounded-lg overflow-hidden font-mono text-xs md:text-sm p-6 shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon/0 via-neon/50 to-neon/0 opacity-50"></div>
            <div className="flex items-center gap-2 mb-4 text-textLight/50 border-b border-border pb-2">
              <Terminal size={14} /> <span>Terminal Override</span>
            </div>
            <div className="space-y-2 text-neon/80">
              <p><span className="text-textLight/40">[10:45:01]</span> <span className="text-blue-400">[SYS]</span> Solicitando parse para URL...</p>
              <p><span className="text-textLight/40">[10:45:02]</span> <span className="text-blue-400">[SYS]</span> Playlist detectada: Cyberpunk Synthwave (168 itens)</p>
              <p><span className="text-textLight/40">[10:45:02]</span> <span className="text-blue-400">[SYS]</span> Adicionado à fila: Cyberpunk Synthwave</p>
              <p><span className="text-textLight/40">[10:45:03]</span> <span className="text-pink-400">[YT-DLP]</span> Extracting URL: https://youtube.com/watch?v=...</p>
              <p><span className="text-textLight/40">[10:45:04]</span> <span className="text-pink-400">[YT-DLP]</span> Downloading webpage</p>
              <p><span className="text-textLight/40">[10:45:05]</span> <span className="text-pink-400">[YT-DLP]</span> [download] 100% of 15.42MiB in 00:01</p>
              <p><span className="text-textLight/40">[10:45:06]</span> <span className="text-green-400">[FFMPEG]</span> Destination: C:\Downloads\audio.mp3</p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-white"
              >
                _
              </motion.p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-20 py-10 relative z-10 bg-panel/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-textLight/40 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <img src="/imagem/LOGO.png" alt="Logo" className="w-4 h-4 object-contain" /> Baixa Tudo Yvion © 2026
          </div>
          <div className="flex gap-6 items-center">
            <button onClick={() => setLegalModal('termos')} className="hover:text-neon transition-colors">Termos de Uso</button>
            <button onClick={() => setLegalModal('privacidade')} className="hover:text-neon transition-colors">Privacidade (LGPD)</button>
            <a href="mailto:suportebaixatudoyvion@gmail.com" className="hover:text-neon transition-colors">Suporte</a>
          </div>
          <div>
            Built with React, Vite & Framer Motion.
          </div>
        </div>
      </footer>
      
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </div>
  );
}

export default App;
