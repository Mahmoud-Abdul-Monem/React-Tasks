import frameImg from "../assets/geist.svg";
import send from "../assets/Send.svg";

export default function About() {
    return (
        <div className="w-full">
            <section className="pt-12 md:pt-20 pb-8 flex flex-col gap-3">
                <h1 className="text-4xl md:text-6xl lg:text-[76px] font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                    A little bit about me
                </h1>
                <p className="text-zinc-500 dark:text-[#808080] text-lg md:text-2xl font-medium">
                    Who I am and what I do.
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-6 items-start">
                <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col gap-6">
                    <div className="w-full px-[48px] py-[60px]  bg-[#0D0D0D] dark:bg-[#0D0D0D] border border-[#323232] rounded-3xl flex items-center justify-center">
                        <img
                            src={frameImg}
                            alt="Eihab Avatar"
                            className="min-w-[256px] min-h-[256px] w-full h-auto object-contain"
                        />
                    </div>

                    <button className="hidden lg:flex items-center justify-center gap-2 w-full py-[14px] px-4 rounded-[9px] bg-zinc-900 dark:bg-[#18181D] text-white font-medium text-sm border border-transparent dark:border-white/10">
                        <img src={send} alt="Send Icon" className="w-5 h-5" />
                        <span>Get in touch</span>
                    </button>
                </div>

                <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-[#808080] uppercase">
                            WHO I AM
                        </h2>
                        <p className="text-zinc-700 dark:text-[#C5C5C5] text-base md:text-lg leading-relaxed">
                            I'm <strong className="text-zinc-900 dark:text-white font-semibold">Eihab</strong> (pronounced 'Ee-hab') a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-[#808080] uppercase">
                            WHAT I DO
                        </h2>
                        <p className="text-zinc-700 dark:text-[#C5C5C5] text-base md:text-lg leading-relaxed">
                            With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in Figma, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and intuitive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of Moroccan citizens.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-[#808080] uppercase">
                            WHAT I DID
                        </h2>
                        <p className="text-zinc-700 dark:text-[#C5C5C5] text-base md:text-lg leading-relaxed">
                            Before delving into the realm of front-end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.
                        </p>
                    </div>

                    <div>
                        <p className="text-zinc-700 dark:text-[#C5C5C5] text-base md:text-lg leading-relaxed">
                            Feel free to reach out via <a href="#" className="text-zinc-900 dark:text-white font-medium underline underline-offset-4">e-mail</a>, or follow me on <a href="#" className="text-zinc-900 dark:text-white font-medium underline underline-offset-4">Twitter</a>. Want to see where I've worked? Check out my <a href="#" className="text-zinc-900 dark:text-white font-medium underline underline-offset-4">Resume</a>, or connect with me on <a href="#" className="text-zinc-900 dark:text-white font-medium underline underline-offset-4">LinkedIn</a>.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-zinc-500 dark:text-[#808080] italic">
                            Let's build something great,
                        </p>
                        <div className="text-3xl font-serif italic text-zinc-900 dark:text-white">
                            Mahmoud Abdulmonem
                        </div>
                    </div>

                    <button className="lg:hidden flex items-center justify-center gap-2 w-full py-[14px] px-4 mt-4 rounded-[9px] bg-zinc-900 dark:bg-[#18181D] text-white font-medium text-sm border border-transparent dark:border-white/10">
                        <img src={send} alt="Send Icon" className="w-5 h-5" />
                        <span>Get in touch</span>
                    </button>
                </div>
            </section>
        </div>
    );
}