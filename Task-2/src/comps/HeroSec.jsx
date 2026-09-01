import React from 'react'

export default function HeroSec() {
    return (

        <section className="flex flex-col items-start justify-center gap-10 mt-28 hero-sec">
            <h1 className="text-[80px] md:text-7xl font-extrabold  text-[#8c8c8c] max-w-2xl">
                I’m <span className="text-white font-medium">Mahmoud Abdulmonem</span>
            </h1>

            <p className="text-[#808080] font-medium leading-9 text-[24px]  max-w-180 ">
                A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.
            </p>

            <div className="flex items-center gap-4 mt-2">
                <button className="rounded-[9px] font-medium text-[18px] bg-[#FFFFFF14] px-8 py-4 shadow-lg cursor-pointer">
                    See my resume
                </button>
                <button className="rounded-[9px] px-8  font-medium text-[18px] py-4 bg-[#181818]  text-[#808080] shadow-lg cursor-pointer">
                    Get in touch
                </button>
            </div>
        </section>
    )
}
