import { Scissors, Palette, Volume2, Film } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Scissors,
    title: 'Montagem',
    description:
      'Corte no lugar certo. O ritmo que segura a atenção e faz cada segundo valer.',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description:
      'Consistência estética e impacto sensorial. A paleta que define a identidade do seu projeto.',
  },
  {
    icon: Volume2,
    title: 'Sound Design',
    description:
      'Som no peso certo. Mix engineering para garantir que cada detalhe seja sentido.',
  },
  {
    icon: Film,
    title: 'Direção',
    description:
      'Direção clara e narrativa estratégica, do conceito ao acabamento final.',
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicos" className="relative py-24 md:py-32 px-6 bg-base-light">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            O que faço
          </p>
          <h2 className="font-display text-ink text-4xl md:text-5xl tracking-tight">
            Cada elemento no seu lugar.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-base-light p-8 md:p-10 group hover:bg-base-lighter transition-colors duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <Icon
                  size={32}
                  className="text-ink-darker group-hover:text-accent transition-colors duration-400 mb-6"
                />
                <h3 className="text-ink text-lg font-medium mb-3">{service.title}</h3>
                <p className="text-ink-dim text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
