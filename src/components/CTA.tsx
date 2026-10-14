import { ArrowUpRight } from 'lucide-react';
import { trackMetaEvent } from '@/lib/metaPixel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WHATSAPP_URL = 'https://wa.me/5512991751413';

export default function CTA() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const handleCTA = () => {
    trackMetaEvent('Lead', { source: 'cta_footer' });
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div ref={ref} className={`relative max-w-3xl mx-auto text-center reveal ${visible ? 'is-visible' : ''}`}>
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
          Vamos trabalhar
        </p>
        <h2 className="font-display text-ink text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-8">
          Tem algo pra dizer?
          <br />
          <span className="text-accent">Eu organizo isso em vídeo.</span>
        </h2>
        <p className="text-ink-dim text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Conte sobre o seu projeto e receba um orçamento. Resposta direta, sem
          intermediários.
        </p>

        <button
          onClick={handleCTA}
          className="group inline-flex items-center gap-3 bg-accent text-base px-8 py-4 text-base font-medium rounded-sm hover:bg-accent-dim transition-all duration-300 hover:gap-4"
        >
          Falar no WhatsApp
          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </section>
  );
}
