import {useState} from "react"
export default function ContactForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, service, message } = formData;
        const whatsappMessage = `
            *Contact Form Submission*
            
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Service: ${service}
            Message: ${message}
        `;

        const encodedMessage = encodeURIComponent(whatsappMessage.trim());
        const whatsappLink = `https://wa.me/03162391694?text=${encodedMessage}`;  // Replace with your WhatsApp number
        
        // Open WhatsApp with pre-filled message
        window.open(whatsappLink, '_blank');
    };
    return(
        <div className="bg-blue-950 rounded-lg p-4 sm:p-10">
            <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.1rem] font-bold">
                 Let's work together!</h1>
                 <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm ">
                    Get in touch and let's create something amazing together!</p>
                    {/* input field */}
                    <form className="mt-8 block w-full overflow-hidden ">
                        <div className="flex flex-col md:flex-row  items-center justify-between gap-4">
                            <input
                            type="text"
                            placeholder="First Name"
                            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                            rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>

                            <input
                            type="text"
                            placeholder="Last Name"
                            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                            rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>
                        </div>
                        <div className="flex-1 mt-5 flex-col md:flex-row items-center  justify-between gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                            rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>

                            <input
                            type="text"
                            placeholder="Phone Number"
                            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                            rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>
                        </div>
                        <div>
                            <select className="w-full mt-5 bg-black text-white  placeholder:text-gray-600 px-4
                            py-3.5 rounded-md border-[1.5px] border-gray-200  border-opacity-15 outline-none ">
                                <option value="" disabled selected>
                                    Select an option
                                </option>
                                <option value="frontend">Frontend Development</option>
                                <option value="backend">Backend Development</option>
                                <option value="fullstack">Fullstack Development</option>
                            </select>
                        </div>
                        <textarea className=" text-white w-full mt-5 bg-black text-whiteplaceholder:text-gray-600 px-6 py-3.5 
                            rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none  "
                            rows={7}
                            placeholder="Message">
                            </textarea>
                            <div className="mt-4">
                                <button className=" px-8 py-3.5 bg-blue-600 hover:bg-blue-950 transition-all
                                duration-150 rounded-full text-white">
                                    Send Message
                                </button>

                            </div>
                    </form>
        </div>
    )
}