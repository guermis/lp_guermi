import { ArrowDown } from 'lucide-react';

const VIDEO_URL = 'https://qmvqiiiwfhzezxsschkr.supabase.co/storage/v1/object/public/media/hero/video-1791337690748.webm';

export default function Hero() {
  const scrollToManifesto = () => {
    document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-black">
      {/* Video is the main content — first thing the visitor sees */}
      <video
        className="block w-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_URL} type="video/webm" />
      </video>

      {/* Subtle gradient at bottom for the scroll cue */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToManifesto}
          className="flex flex-col items-center gap-2 text-ink-dim hover:text-ink transition-colors duration-300 group"
          aria-label="Ver mais"
        >
          <span className="text-xs tracking-widest uppercase">Continuar</span>
          <ArrowDown
            size={18}
            className="animate-bounce group-hover:text-accent transition-colors"
          />
        </button>
      </div>
    </section>
  );
}
