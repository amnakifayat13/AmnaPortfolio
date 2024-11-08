import SectionHeading from "../sectionHeading"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
export default function Contact(){
    return(
        <div className="pt-16 pb-16 bg-black">
            <SectionHeading>Contact</SectionHeading>
            <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
                {/* Contact form */}
                <div data-aos ="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="150" >
                    <ContactForm/>
                    </div>
                    {/* conttact info */}
                    <div data-aos ="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="150" >
                        <ContactInfo/>
                    </div>
                </div>
            </div>
        
    )
}