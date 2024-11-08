import { FaDownload } from "react-icons/fa"
import {BaseInfo} from "../../../Data/data"
import Image from "next/image"
export default function Hero (){
    return(
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0f0f] overflow-hidden relative">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
            <div className="grid grid-cols-1  lg:grid-cols-2 items-center gap-12">
                {/* Text content */}
                <div>
                    <h1 data-aos = "fade-left"
                    className="text-2xl md:text-3xl lag:text-4xl mb-5 text-gray-300 font-semibold">I am {BaseInfo.name}</h1>
                    <h1 data-aos = "fade-right " data-aos-delay="100" 
                    className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] *:xl:leading-[4rem] text-white">
                        {BaseInfo.position}</h1>
                        <p data-aos = "fade-left " data-aos-delay="200" 
                        className="mt-6 text-sm md:text-base text-white text-opaccity-60">
                            {BaseInfo.description}</p>
                            <button data-aos = "zoom-in " data-aos-delay="300" 
                            className="md:px-8 md:py-2.5 px-6 py-1.5 text-white text-sm font-semibold md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700
                             hover:bg-blue-950 flex items-center space-x-2">
                                <span><a href={"https://my-resume-83xg.vercel.app/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Download CV</a></span>
                                <FaDownload/>
                            </button>
                </div>
                {/* Image content */}
                <div 
                 className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
                    <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={300} height={350}/>
                </div>


            </div>
            </div>
        </div>
    )
}