import React from 'react';
import { X } from 'lucide-react';

export function LegalModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#050B14] border border-[#00E5FF]/30 w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-lg shadow-[0_0_30px_rgba(0,229,255,0.15)] relative p-6 md:p-10 font-mono text-sm text-[#C4D2E7]/80">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#00E5FF] hover:text-white transition-colors p-2"
        >
          <X size={24} />
        </button>

        {type === 'termos' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-glow">Termos de Uso & Isenção de Responsabilidade</h2>
            
            <p>Última atualização: Setembro de 2026</p>
            
            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">1. Natureza do Software</h3>
            <p>O "Baixa Tudo Yvion" é um software cliente que opera localmente no dispositivo do usuário. Ele atua exclusivamente como uma interface gráfica para motores de processamento de código aberto (como FFmpeg e yt-dlp) para conversão e download de mídia pública.</p>

            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">2. Isenção de Responsabilidade de Direitos Autorais</h3>
            <p><strong>ATENÇÃO:</strong> Os criadores, desenvolvedores e distribuidores do "Baixa Tudo Yvion" NÃO incentivam, endossam ou facilitam a pirataria ou a violação de direitos autorais (DMCA). O software é fornecido "no estado em que se encontra", estritamente como uma ferramenta neutra de processamento de dados.</p>
            <p>É de total e exclusiva responsabilidade do usuário final garantir que possui os direitos legais, permissões explícitas ou amparo no "Fair Use" (Uso Justo) para baixar, modificar ou armazenar qualquer conteúdo da internet.</p>
            
            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">3. Ausência de Garantias</h3>
            <p>O software não possui garantias de funcionamento ininterrupto. O ecossistema web muda frequentemente, e ferramentas de extração podem perder compatibilidade sem aviso prévio.</p>
            
            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">4. Responsabilidade Legal</h3>
            <p>Ao baixar e utilizar este software, você isenta juridicamente a equipe "Yvion" de qualquer responsabilidade por uso indevido, penalidades corporativas, bloqueio de contas ou infrações legais cometidas através do uso desta ferramenta.</p>
          </div>
        )}

        {type === 'privacidade' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-glow">Política de Privacidade (GDPR & LGPD)</h2>
            
            <p>Última atualização: Setembro de 2026</p>
            
            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">1. Coleta de Dados Zero</h3>
            <p>Levamos a sua privacidade a sério com uma política absoluta de "Zero Telemetria". O "Baixa Tudo Yvion" é um software 100% offline e independente. Nós não coletamos seu endereço IP, seu histórico de downloads, suas preferências ou qualquer outra informação de uso.</p>

            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">2. Processamento Local</h3>
            <p>Todos os dados, incluindo cookies de sessão para autenticação e arquivos baixados, são processados e armazenados exclusivamente no disco rígido do seu próprio dispositivo. Nada trafega para servidores externos de propriedade da Yvion.</p>

            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">3. Uso de Cookies Externos</h3>
            <p>Para extrair mídias privadas ou com restrição de idade, o aplicativo pode utilizar os cookies do seu próprio navegador (como o Chrome). Esta ponte ocorre apenas entre o seu computador e o provedor da mídia (ex: Google). Nenhuma credencial é interceptada por nós.</p>
            
            <h3 className="text-lg text-[#00E5FF] font-bold mt-6">4. Conformidade</h3>
            <p>Pela natureza arquitetônica do software (ausência de banco de dados remoto), o aplicativo encontra-se inerentemente em total conformidade com as diretrizes de privacidade globais, incluindo a LGPD (Lei Geral de Proteção de Dados - Brasil) e GDPR (Europa).</p>
          </div>
        )}

      </div>
    </div>
  );
}
