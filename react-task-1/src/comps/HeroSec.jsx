export default function HeroSec() {
    return (
        <section className="flex flex-col items-start justify-center gap-6 sm:gap-10 pt-16 md:pt-28 hero-sec">
            <h1 className="text-5xl md:text-[80px] font-extrabold text-zinc-400 dark:text-[#8c8c8c] max-w-2xl tracking-tight">
                I’m <span className="text-zinc-900 dark:text-white">Mahmoud Abdulmonem</span>
            </h1>

            <p className="text-zinc-600 dark:text-[#808080] font-medium leading-relaxed md:leading-9 text-lg md:text-[24px] max-w-180">
                A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
                <button className="rounded-2xl md:rounded-[12px] font-medium text-[16px] sm:text-[18px] bg-zinc-900 text-white dark:bg-white/10 dark:text-white px-7 py-3.5 sm:px-8 sm:py-4 shadow-sm hover:opacity-90 transition cursor-pointer text-center">
                    See my resume
                </button>
                <button className="rounded-2xl md:rounded-[12px] font-medium text-[16px] sm:text-[18px] bg-zinc-100 text-zinc-900 dark:bg-[#181818] dark:text-[#808080] px-7 py-3.5 sm:px-8 sm:py-4 transition cursor-pointer text-center hover:opacity-90">
                    Get in touch
                </button>
            </div>
        </section>
    );
}