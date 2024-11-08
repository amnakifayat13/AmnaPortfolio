export default function Footer(){
    return(
        <div className="pt-16 pb-16 bg-blue-800">
            <div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl  flex justify-center font-bold">Portfolio</h2>
            </div>
            <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
                <div>Home.</div>
                <div>Services.</div>
                <div>Projects.</div>
                <div>Contact.</div>
                

            </div>
            <div className="text-white text-opacity-60 mt-6 text-center"> &reg; all rights are reserved by Amna Aftab Kifyat</div>

        </div>
    )
}