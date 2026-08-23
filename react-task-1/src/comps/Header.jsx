import logo from "../assets/Logo.svg";

export default function Header() {
    return (
        <header className=" relative w-full flex items-center justify-between px-4 py-3 md:px-6 bg-[#FFFFFF40]  dark:bg-[#18181D4D] backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl transition-all  shadow-sm">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 pointer-events-none -z-10 blur-[100px] opacity-70 bg-[linear-gradient(90deg,rgba(88,28,135,0.4)_0%,rgba(194,65,12,0.45)_100%)]" />

            <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                <img src={logo} alt="Logo" className="h-7 md:h-6 w-auto dark:invert-0 invert" />
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-[#C5C5C5] md:ml-8 md:mr-auto">
                <a href="#" className="hover:text-black dark:hover:text-white transition font-medium">About</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition font-medium">Work</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition font-medium">Notebook</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition font-medium">Contact</a>

                <div className="relative group cursor-pointer flex items-center gap-1 hover:text-black dark:hover:text-white transition font-medium py-1">
                    <span>More</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>

                    <div className="hidden group-hover:flex absolute top-full left-0 mt-2 w-40 py-2 bg-white/90 dark:bg-[#18181D] backdrop-blur-lg border border-black/5 dark:border-white/10 rounded-xl shadow-lg z-50 flex-col">
                        <a href="#" className="px-4 py-2 text-sm text-zinc-700 dark:text-[#C5C5C5] hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">Bookshelf</a>
                        <a href="#" className="px-4 py-2 text-sm text-zinc-700 dark:text-[#C5C5C5] hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">Tech Stack</a>
                        <a href="#" className="px-4 py-2 text-sm text-zinc-700 dark:text-[#C5C5C5] hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">This UI Kit</a>
                    </div>
                </div>
            </nav>

            <div className="hidden md:flex items-center gap-4 text-zinc-600 dark:text-[#A1A1A1]">
                <a href="#" className="hover:text-black dark:hover:text-white transition">
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="hover:text-black dark:hover:text-white transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="hover:text-black dark:hover:text-white transition">
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>

                <div className="w-[1px] h-4 bg-black/10 dark:bg-white/20 mx-1" />

                <button className="hover:text-black dark:hover:text-white transition cursor-pointer">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </button>
            </div>
        </header>
    );
}












// import logo from "../assets/Logo.svg";

// export default function Header() {
//     return (
//         <header className="relative flex w-full items-center justify-between px-4 py-3 md:px-6 md:bg-white/10 md:dark:bg-zinc-900/50 md:backdrop-blur-md md:border md:border-black/5 md:dark:border-white/10 md:rounded-2xl md:shadow-sm">
//             <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-screen max-w-6xl h-80 pointer-events-none -z-10 blur-3xl opacity-70 bg-[linear-gradient(90deg,rgba(88,28,135,0.5)_0%,rgba(194,65,12,0.5)_100%)]" />

//             <div className="flex w-full items-center justify-center md:w-auto md:justify-start">
//                 <img src={logo} alt="Logo" className="h-7 md:h-6 w-auto invert dark:invert-0" />
//             </div>

//             <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 md:ml-8 md:mr-auto">
//                 <a href="#" className="font-medium hover:text-black dark:hover:text-white transition-colors">About</a>
//                 <a href="#" className="font-medium hover:text-black dark:hover:text-white transition-colors">Work</a>
//                 <a href="#" className="font-medium hover:text-black dark:hover:text-white transition-colors">Notebook</a>
//                 <a href="#" className="font-medium hover:text-black dark:hover:text-white transition-colors">Contact</a>
//             </nav>

//             <div className="hidden md:flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
//                 <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
//                 </a>
//                 <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
//                 </a>
//                 <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
//                 </a>

//                 <div className="w-px h-4 bg-black/10 dark:bg-white/20 mx-1" />

//                 <button className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
//                 </button>
//             </div>
//         </header>
//     );
// }