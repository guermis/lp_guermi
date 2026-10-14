import { ArrowUpRight } from 'lucide-react';
import { trackMetaEvent } from '@/lib/metaPixel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WHATSAPP_URL = 'https://wa.me/5512991751413';

type InlineCTAProps = {
  source: string;
  text: string;
  buttonLabel?: string;
};

export default function InlineCTA({
  source,
  text,
  buttonLabel = 'Falar no WhatsApp',
}: InlineCTAProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const handleClick = () => {
    trackMetaEvent('Lead', { source });
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <section className="py-16 md:py-20 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 md:py-10 px-8 md:px-12 border border-white/10 rounded-sm bg-base-light/50">
          <p className="text-ink text-lg md:text-xl font-light text-center sm:text-left">
            {text}
          </p>
          <button
            onClick={handleClick}
            className="group inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 text-sm font-medium rounded-sm hover:bg-accent hover:text-base transition-all duration-300 whitespace-nowrap shrink-0"
          >
            {buttonLabel}
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
