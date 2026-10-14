import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import InlineCTA from '@/components/InlineCTA';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="bg-base text-ink min-h-screen">
      <div className="grain" />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <InlineCTA
          source="after_manifesto"
          text="Tem algo pra dizer e pouco tempo? Vamos conversar."
        />
        <Services />
        <InlineCTA
          source="after_services"
          text="Seu projeto merece o corte certo. Bora?"
        />
        <Process />
        <InlineCTA
          source="after_process"
          text="Do conceito ao acabamento. Comece pelo orçamento."
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
