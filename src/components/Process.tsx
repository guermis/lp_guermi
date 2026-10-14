import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'Conceito', description: 'Entender o que você tem pra dizer e o melhor modo de dizer.' },
  { num: '02', title: 'Captura', description: 'Direção clara, fotografia e identidade visual alinhadas ao objetivo.' },
  { num: '03', title: 'Montagem', description: 'Ritmo, corte e texto no tempo certo. Retenção em cada quadro.' },
  { num: '04', title: 'Acabamento', description: 'Color grading e sound design para o impacto sensorial final.' },
];

export default function Process() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="processo" className="relative py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Como funciona
          </p>
          <h2 className="font-display text-ink text-4xl md:text-5xl tracking-tight">
            Do conceito ao corte final.
          </h2>
        </div>

        <div className="space-y-px">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-6 md:gap-10 py-8 border-t border-white/10 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.6s ease-out',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <span className="font-display text-accent-dim text-3xl md:text-5xl tracking-tight group-hover:text-accent transition-colors duration-400 w-16 md:w-24 shrink-0">
                {step.num}
              </span>
              <div className="pt-1 md:pt-2">
                <h3 className="text-ink text-xl md:text-2xl font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-dim text-sm md:text-base leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
