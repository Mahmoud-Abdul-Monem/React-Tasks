import logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="relative mt-20 pt-12 pb-28 md:pb-16 w-full overflow-hidden border-t border-zinc-200/80 dark:border-transparent bg-white dark:bg-[#0D0D0D] text-zinc-900 dark:text-[#808080] transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-72 pointer-events-none -z-10 blur-[110px] opacity-80 dark:opacity-70 bg-[linear-gradient(90deg,rgba(251,146,60,0.3)_0%,rgba(244,63,94,0.25)_45%,rgba(129,140,248,0.3)_100%)] dark:bg-[linear-gradient(90deg,rgba(217,119,6,0.35)_0%,rgba(190,18,60,0.25)_45%,rgba(67,56,202,0.35)_100%)]" />

      <div className="pt-12 flex flex-col md:flex-row justify-between gap-10 relative z-10">
        <div className="flex flex-col justify-between gap-8 order-3 md:order-1 mt-4 md:mt-0">
          <div className="flex flex-col gap-3 items-start">
            <img
              src={logo}
              alt="Logo"
              className="h-15 w-23 object-contain block select-none dark:invert-0 invert"
            />
            <p className="text-[14px] font-medium text-zinc-600 dark:text-[#808080]">
              Thanks for stopping by ツ
            </p>
          </div>
          <p className="text-[14px] text-zinc-500 dark:text-[#80808080]">
            © 2026 Mahmoud. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col gap-3 order-2 text-[16px] md:order-2">
          <h4 className="text-zinc-900 dark:text-white font-bold">Links</h4>
          <div className="flex flex-col gap-2.5 text-sm text-zinc-600 dark:text-[#808080]">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">About</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Work</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Tech Stack</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 order-1 text-[16px] md:order-3">
          <h4 className="text-zinc-900 dark:text-white font-bold text-sm">Elsewhere</h4>
          <div className="flex flex-col gap-2.5 text-sm text-zinc-600 dark:text-[#808080]">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Email</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Discord</a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50 bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-5 shadow-2xl text-zinc-600 dark:text-[#A1A1A1]">
        <a href="#" className="p-1.5 hover:text-zinc-900 dark:hover:text-white bg-zinc-200/60 dark:bg-white/10 text-zinc-900 dark:text-white rounded-xl transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
        <a href="#" className="p-1.5 hover:text-zinc-900 dark:hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </a>
        <a href="#" className="p-1.5 hover:text-zinc-900 dark:hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </a>
        <a href="#" className="p-1.5 hover:text-zinc-900 dark:hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
        </a>
        <a href="#" className="p-1.5 hover:text-zinc-900 dark:hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </a>
        <a href="#" className="p-1.5 hover:text-zinc-900 dark:hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </a>
      </div>
    </footer>
  );
}