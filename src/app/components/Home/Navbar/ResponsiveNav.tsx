"use client"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useState} from "react"

export default function ResponsiveNav(){
    const [showNav, setShowNav] =  useState(false);


    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
    return(
        <div className="">
            <Nav openNav={showNavHandler}/>
            <MobileNav showNav = {showNav} closeNav = {closeNavHandler}/>
        </div>
    )
}