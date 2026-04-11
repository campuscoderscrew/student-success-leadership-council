import React from "react"
import "src/app.css"

import NavBar from "~/components/navbar"
import logo from "public/images/logo.png"
import dots_line_left from "public/images/dots_line_left.png"
import dots_line_right from "public/images/dots_line_right.png"
import tony_img from "public/images/Tony.png"
import tyrese_img from "public/images/Tyrese.png"
import wade_img from "public/images/Wade.png"
import sierra_img from "public/images/Sierra.png"
import erin_img from "public/images/Erin.png"
import lindsey_img from "public/images/Lindsey.png"
import gabrielle_img from "public/images/Gabrielle.png"
import bria_img from "public/images/Bria.png"
import adryanna_img from "public/images/Adryanna.png"

export default function About() {
    return (
        <div className="">
            <NavBar/>

            <div className="flex flex-col items-center">
                {/* heading image */}
                <div className="flex flex-col items-center">
                    <img src={logo} alt="logo" className="w-[40vw] mt-10"/>
                    <hr className="border-t-4 border-black w-[60vw]"/>
                </div>

                {/* mission statement */}
                <div className="flex flex-row items-center justify-center w-[80vw] mt-10">
                    <img src={dots_line_left} alt="dots line left" className="w-[20vw] mr-4"/>
                    <div className="flex flex-col items-center border-4 border-[#F3BF2D] rounded-lg w-[30vw]">
                        <p className="jaldi-regular text-[3vw] text-center p-4">MISSION STATEMENT</p>
                    </div>
                    <img src={dots_line_right} alt="dots line right" className="w-[20vw] ml-4"/>
                </div>
                
                <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[80vw] mt-5">
                    <p className="jaldi-regular text-[2vw] text-justify p-4">We are a student-led organization of Black leaders committed to developing leadership skills and cultivating prepared, effective, empowered change-makers. Through intentional learning, collaboration, and mentorship, we strive to grow as a unified body that supports and uplifts the Black Community at the University of Maryland, College Park. We create impactful events and initiatives designed to celebrate, connect, and advocate for Black students across campus.</p>
                </div>

                <div className="m-30">
                    <p> </p>
                </div>
            </div>
        </div>
    )
}