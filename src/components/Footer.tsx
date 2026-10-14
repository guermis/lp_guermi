export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img src="/images/gg.png" alt="Logo" className="h-7 w-7 object-contain" />
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://wa.me/5512991751413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-dim hover:text-accent transition-colors duration-300"
          >
            WhatsApp
          </a>
          <span className="text-ink-darker">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
