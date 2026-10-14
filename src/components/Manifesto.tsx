import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Manifesto() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const lines = [
    { text: 'Se a pessoa precisa entender logo,', accent: false },
    { text: 'antes de passar pro próximo.', accent: false },
    { text: 'Se você tem algo pra dizer', accent: false },
    { text: 'e pouco tempo pra dizer,', accent: false },
    { text: 'eu organizo isso em vídeo.', accent: true },
  ];

  return (
    <section id="manifesto" className="relative py-32 md:py-48 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="space-y-2">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`text-2xl sm:text-3xl md:text-4xl font-light leading-snug transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <span className={line.accent ? 'text-accent font-medium' : 'text-ink'}>
                {line.text}
              </span>
            </p>
          ))}
        </div>

        <div
          className={`mt-16 pt-8 border-t border-white/10 transition-all duration-700 delay-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-ink-dim text-base md:text-lg leading-relaxed max-w-2xl">
            Diretor audiovisual especializado. Minha abordagem é estratégica,
            focada em retenção, ritmo e narrativa — principalmente para conteúdos
            digitais, redes sociais e campanhas. Trabalho com alto nível em color
            grading e sound design, garantindo consistência estética e impacto
            sensorial em cada projeto.
          </p>
          <p className="text-ink-darker text-sm md:text-base leading-relaxed max-w-2xl mt-5">
            Minha base em design gráfico, fotografia e mix engineering fortalece
            minha visão estética e técnica, permitindo entregar conteúdos com
            direção clara, identidade visual consistente e acabamento profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
