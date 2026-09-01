
import subbi from "../assets/Subbi.svg"
import subbiImg from "../assets/Subbi-2.png"
import arrow from "../assets/arrow.png"
import storyBook from "../assets/Storybook Docs.svg"
import storyWeb from "../assets/Storybook Docs-2.svg"
import reactIcon from "../assets/React Docs.svg"
import tablet from "../assets/React Docs-2.svg"
import parrot from "../assets/Parrotxt.svg"
import parrotIcon from "../assets/Parrotxt.png"

export default function Projects() {
    return (
        <div className="w-full min-h-dvh bg-white dark:bg-[#0d0d0d] text-zinc-900 dark:text-white transition-colors duration-300">

            <section className="flex flex-col items-start justify-center gap-6 sm:gap-10 pt-20 sm:pt-28 hero-sec">
                <h1 className="text-5xl md:text-[80px] font-extrabold text-zinc-900 dark:text-white max-w-2xl">
                    Projects
                </h1>

                <p className="text-zinc-500 dark:text-[#808080] font-medium leading-relaxed md:leading-9 text-lg md:text-[24px] max-w-180">
                    Projects and ideas I’ve worked on
                </p>
            </section>





            <section className="mt-16 sm:mt-28 flex flex-col gap-6 work-sec w-full pb-20">
                <h5 className="font-bold text-3xl sm:text-[48px] text-zinc-900 dark:text-white">
                    Selected Work
                </h5>

                <div className="bg-[#F5F5F5] dark:bg-[#181818] border border-zinc-200/80 dark:border-transparent grid grid-cols-1 lg:grid-cols-2 rounded-4xl gap-6 overflow-hidden transition-colors duration-300">
                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 lg:p-15 lg:pe-0">
                        <div className="flex flex-col gap-4">
                            <img src={subbi} alt="Subbi Logo" className="w-14 h-14 sm:w-17.5 sm:h-17.5" />
                            <p className="font-extrabold max-w-[503px] text-2xl sm:text-[32px] text-zinc-900 dark:text-white">
                                Subbi –– The free subscriptions manager
                            </p>
                            <p className="text-zinc-600 dark:text-[#808080] max-w-[490px] font-normal text-sm sm:text-[16px]">
                                Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.
                            </p>
                        </div>
                        <button className="flex gap-2 text-zinc-900 dark:text-white items-center hover:opacity-75 transition cursor-pointer w-fit">
                            <span className="font-medium text-[18px]">Download App</span>
                            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain dark:invert-0 invert" />
                        </button>
                    </div>
                    <img src={subbiImg} alt="Subbi App Preview" className="w-full h-full object-cover lg:object-contain justify-self-end" />
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#181818] border border-zinc-200/80 dark:border-transparent grid grid-cols-1 lg:grid-cols-2 rounded-4xl gap-6 overflow-hidden transition-colors duration-300">
                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 lg:p-15 lg:pe-0">
                        <div className="flex flex-col gap-4">
                            <img src={reactIcon} alt="React Logo" className="w-14 h-14 sm:w-17.5 sm:h-17.5" />
                            <p className="font-extrabold max-w-[503px] text-2xl sm:text-[32px] text-zinc-900 dark:text-white">
                                React Documentation
                            </p>
                            <p className="text-zinc-600 dark:text-[#808080] max-w-[490px] font-normal text-sm sm:text-[16px]">
                                With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.
                            </p>
                        </div>
                        <button className="flex gap-2 text-zinc-900 dark:text-white items-center hover:opacity-75 transition cursor-pointer w-fit">
                            <span className="font-medium text-[18px]">Visit Site</span>
                            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain dark:invert-0 invert" />
                        </button>
                    </div>
                    <img src={tablet} alt="React Docs Preview" className="w-full h-full object-cover lg:object-contain justify-self-end" />
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#181818] border border-zinc-200/80 dark:border-transparent grid grid-cols-1 lg:grid-cols-2 rounded-4xl gap-6 overflow-hidden transition-colors duration-300">
                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 lg:p-15 lg:pe-0">
                        <div className="flex flex-col gap-4">
                            <img src={storyBook} alt="Storybook Logo" className="w-14 h-14 sm:w-17.5 sm:h-17.5" />
                            <p className="font-extrabold max-w-[503px] text-2xl sm:text-[32px] text-zinc-900 dark:text-white">
                                Storybook Documentation
                            </p>
                            <p className="text-zinc-600 dark:text-[#808080] max-w-[490px] font-normal text-sm sm:text-[16px]">
                                This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.
                            </p>
                        </div>
                        <button className="flex gap-2 text-zinc-900 dark:text-white items-center hover:opacity-75 transition cursor-pointer w-fit">
                            <span className="font-medium text-[18px]">Visit Site</span>
                            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain dark:invert-0 invert" />
                        </button>
                    </div>
                    <img src={storyWeb} alt="Storybook Preview" className="w-full h-full object-cover lg:object-contain justify-self-end" />
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#181818] border border-zinc-200/80 dark:border-transparent grid grid-cols-1 lg:grid-cols-2 rounded-4xl gap-6 overflow-hidden transition-colors duration-300">
                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 lg:p-15 lg:pe-0">
                        <div className="flex flex-col gap-4">
                            <img src={parrot} alt="Parrotxt Logo" className="w-14 h-14 sm:w-17.5 sm:h-17.5" />
                            <p className="font-extrabold max-w-[503px] text-2xl sm:text-[32px] text-zinc-900 dark:text-white">
                                Parrotxt
                            </p>
                            <p className="text-zinc-600 dark:text-[#808080] max-w-[490px] font-normal text-sm sm:text-[16px]">
                                Lorem Ipsum Is Not Professional, use Parrotxt to generate real text for your design. This was my first product I launched on Product Hunt.
                            </p>
                        </div>
                        <button className="flex gap-2 text-zinc-900 dark:text-white items-center hover:opacity-75 transition cursor-pointer w-fit">
                            <span className="font-medium text-[18px]">Visit Site</span>
                            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain dark:invert-0 invert" />
                        </button>
                    </div>
                    <img src={parrotIcon} alt="Parrotxt Preview" className="w-full h-full object-cover lg:object-contain justify-self-end" />
                </div>

                <div className="bg-[#F5F5F5] dark:bg-[#181818] border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-4xl p-10 sm:p-20 flex flex-col items-center justify-center text-center gap-5 transition-colors duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
                        <path d="M5 3v4" />
                        <path d="M19 17v4" />
                        <path d="M3 5h4" />
                        <path d="M17 19h4" />
                    </svg>

                    <h3 className="font-extrabold text-2xl sm:text-[32px] tracking-wide text-zinc-900 dark:text-white uppercase">
                        Your Project Goes Here
                    </h3>

                    <p className="text-zinc-500 dark:text-[#808080] font-normal text-sm sm:text-[16px]">
                        Let’s turn your idea into a visual reality
                    </p>

                    <button className="mt-2 flex items-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-[#222222] dark:text-white dark:border dark:border-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition cursor-pointer font-medium text-base shadow-sm">
                        <svg className="w-4 h-4 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        <span>Get in touch</span>
                    </button>
                </div>

            </section>
        </div>
    )
}