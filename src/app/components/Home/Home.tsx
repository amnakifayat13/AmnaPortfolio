"use client"
import {useEffect} from "react"
import Hero from "./Hero/Hero"
import About from "./About/About"
import Services from "./Services/Services"
import Project from "./Project/Project"
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import ScrollToTop from "../Helper/ScrollToTop"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Home(){
    useEffect(()=>{
        const initAOS = async() =>{
            await import ("aos");
            AOS.init({
                duration: 1000,
                easing:"ease",
                once:true,
                anchorPlacement:"bottom-bottom",
            })
        }
        initAOS()
    },[])
    return(
        <div className="overflow-hidden">
            <Hero/>
            <About/>
            <Services/>
            <Project/>
            <Skills/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        

        

        </div>
    )
}