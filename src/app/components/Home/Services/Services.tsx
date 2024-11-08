import SectionHeading from "../sectionHeading"
import {servicesData} from "../../../Data/data"
import ServiceCard from "./ServiceCard"
export default function Services(){
    return (
        <div className="pt-16 pb-16 bg-black">
            <SectionHeading>Services</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%]
            mx-auto items-center mt-20">
                {servicesData.map((service)=>{
                    return(
                        <div key={service.id}
                        >
                            
                            <ServiceCard service ={service}/>
                        </div>
                    )


                })}
            </div>

        </div>
    )
}