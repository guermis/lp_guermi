import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { trackMetaEvent } from '@/lib/metaPixel';

const WHATSAPP_URL = 'https://wa.me/5512991751413';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTA = () => {
    trackMetaEvent('Lead', { source: 'header' });
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group"
          aria-label="Início"
        >
          <img
            src="/images/gg.png"
            alt="Logo"
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('manifesto')}
            className="text-ink-dim hover:text-ink transition-colors duration-300 text-sm"
          >
            Manifesto
          </button>
          <button
            onClick={() => scrollTo('servicos')}
            className="text-ink-dim hover:text-ink transition-colors duration-300 text-sm"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollTo('processo')}
            className="text-ink-dim hover:text-ink transition-colors duration-300 text-sm"
          >
            Processo
          </button>
          <button
            onClick={handleCTA}
            className="border border-accent text-accent px-5 py-2 text-sm font-medium rounded-sm hover:bg-accent hover:text-base transition-all duration-300"
          >
            Pedir Orçamento
          </button>
        </nav>

        <button
          className="md:hidden text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-base-light px-6 py-6 flex flex-col gap-5 border-t border-white/5">
          <button
            onClick={() => scrollTo('manifesto')}
            className="text-ink-dim hover:text-ink transition-colors text-sm text-left"
          >
            Manifesto
          </button>
          <button
            onClick={() => scrollTo('servicos')}
            className="text-ink-dim hover:text-ink transition-colors text-sm text-left"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollTo('processo')}
            className="text-ink-dim hover:text-ink transition-colors text-sm text-left"
          >
            Processo
          </button>
          <button
            onClick={handleCTA}
            className="border border-accent text-accent px-5 py-2.5 text-sm font-medium rounded-sm text-center"
          >
            Pedir Orçamento
          </button>
        </div>
      </div>
    </header>
  );
}
