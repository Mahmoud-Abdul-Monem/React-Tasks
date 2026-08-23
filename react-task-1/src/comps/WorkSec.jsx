import subbi from "../assets/Subbi.svg"
import subbiImg from "../assets/Subbi-2.png"
import arrow from "../assets/arrow.png"
import storyBook from "../assets/Storybook Docs.svg"
import storyWeb from "../assets/Storybook Docs-2.svg"
import reactIcon from "../assets/React Docs.svg"
import tablet from "../assets/React Docs-2.svg"
export default function WorkSec() {
  return (
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


    </section>
  )
}