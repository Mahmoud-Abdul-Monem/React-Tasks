import HeroSec from "../comps/HeroSec";
import KnowMe from "../comps/KnowMe";
import WorkSec from "../comps/WorkSec";

export default function Home() {
    return (
        <>
            <HeroSec />
            <WorkSec />
            <KnowMe />

            <div className="flex flex-col md:flex-row md:items-center justify-between mt-16 sm:mt-24 gap-6 pb-12 relative z-10">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                        Let’s work together
                    </h2>
                    <p className="text-zinc-500 dark:text-[#808080] text-base sm:text-[18px] font-normal mt-2 max-w-md leading-relaxed">
                        Want to discuss an opportunity to create something great? I’m ready when you are.
                    </p>
                </div>

                <button className="flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white/10 dark:hover:bg-white/15 dark:text-white px-6 py-3.5 rounded-xl font-medium transition cursor-pointer w-full md:w-auto shadow-sm border border-transparent dark:border-white/5 backdrop-blur-sm">
                    <svg className="w-4 h-4 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span className="font-medium text-[16px]">Get in touch</span>
                </button>
            </div>
        </>
    );
}