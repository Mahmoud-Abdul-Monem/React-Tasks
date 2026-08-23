import face from "../assets/faceIcon.svg";
import notebook from "../assets/Notebook.svg";
import techStack from "../assets/Tech Stack.svg";
import bookshelf from "../assets/Bookshelf.svg";

export default function KnowMe() {
    return (
        <section className="w-full max-w-full overflow-hidden flex flex-col gap-6 sm:gap-8 mt-16 sm:mt-28">
            <h5 className="font-bold text-3xl sm:text-[48px] text-zinc-900 dark:text-white">
                Get to know me
            </h5>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
                <div className="pt-10 sm:pt-15 pb-8 sm:pb-10 flex flex-col bg-[#F5F5F5] dark:bg-[#151515] border border-zinc-200/80 dark:border-transparent rounded-4xl col-span-1 gap-8 sm:gap-10 items-center overflow-hidden w-full transition-colors duration-300">
                    <div className="px-6 flex flex-col gap-2 justify-center items-center text-center">
                        <h5 className="font-extrabold text-2xl sm:text-[32px] text-zinc-900 dark:text-white">About me</h5>
                        <p className="font-normal text-sm sm:text-[16px] text-zinc-500 dark:text-[#808080]">Who I am and what I do</p>
                    </div>
                    <img className="max-w-48 sm:max-w-58.5 object-contain" src={face} alt="About me" />
                </div>

                <div className="pt-10 sm:pt-15 flex flex-col justify-between bg-[#F5F5F5] dark:bg-[#151515] border border-zinc-200/80 dark:border-transparent rounded-4xl col-span-1 gap-8 sm:gap-10 items-center overflow-hidden w-full transition-colors duration-300">
                    <div className="px-6 flex flex-col gap-2 justify-center items-center text-center">
                        <h5 className="font-extrabold text-2xl sm:text-[32px] text-zinc-900 dark:text-white">Notebook</h5>
                        <p className="font-normal text-sm sm:text-[16px] text-zinc-500 dark:text-[#808080]">My thoughts, insights, and reflections</p>
                    </div>
                    <img className="w-full object-cover" src={notebook} alt="Notebook" />
                </div>

                <div className="pt-10 sm:pt-15 flex flex-col justify-between bg-[#F5F5F5] dark:bg-[#151515] border border-zinc-200/80 dark:border-transparent rounded-4xl col-span-1 gap-8 sm:gap-10 items-center overflow-hidden w-full transition-colors duration-300">
                    <div className="px-6 flex flex-col gap-2 justify-center items-center text-center">
                        <h5 className="font-extrabold text-2xl sm:text-[32px] text-zinc-900 dark:text-white">Bookshelf</h5>
                        <p className="font-normal text-sm sm:text-[16px] text-zinc-500 dark:text-[#808080]">Books and pieces of wisdom I’ve enjoyed reading</p>
                    </div>
                    <img className="w-full object-cover" src={bookshelf} alt="Bookshelf" />
                </div>

                <div className="pt-10 sm:pt-15 flex flex-col justify-between bg-[#F5F5F5] dark:bg-[#151515] border border-zinc-200/80 dark:border-transparent rounded-4xl col-span-1 gap-8 sm:gap-10 items-center overflow-hidden w-full transition-colors duration-300">
                    <div className="px-6 flex flex-col gap-2 justify-center items-center text-center">
                        <h5 className="font-extrabold text-2xl sm:text-[32px] text-zinc-900 dark:text-white">Tech Stack</h5>
                        <p className="font-normal text-sm sm:text-[16px] text-zinc-500 dark:text-[#808080]">The dev tools, apps, devices, and games I use and play.</p>
                    </div>
                    <img className="w-full object-cover" src={techStack} alt="Tech Stack" />
                </div>
            </div>
        </section>
    );
}