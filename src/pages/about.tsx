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
                <div className="flex flex-row items-center justify-center w-[80vw] mt-20">
                    <img src={dots_line_left} alt="dots line left" className="w-[20vw] mr-4"/>
                    <div className="flex flex-col items-center border-4 border-[#F3BF2D] rounded-lg w-[30vw]">
                        <p className="jaldi-regular text-[3vw] text-center p-4">MISSION STATEMENT</p>
                    </div>
                    <img src={dots_line_right} alt="dots line right" className="w-[20vw] ml-4"/>
                </div>
                
                <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[80vw] mt-5">
                    <p className="jaldi-regular text-[2vw] text-justify p-4">We are a student-led organization of Black leaders committed to developing leadership skills and cultivating prepared, effective, empowered change-makers. Through intentional learning, collaboration, and mentorship, we strive to grow as a unified body that supports and uplifts the Black Community at the University of Maryland, College Park. We create impactful events and initiatives designed to celebrate, connect, and advocate for Black students across campus.</p>
                </div>

                {/* space in the middle */}
                <div className="m-15">
                    <p> </p>
                </div>

                {/* team members */}
                <div className="flex flex-row items-center justify-center w-[80vw] mt-10">
                    <img src={dots_line_left} alt="dots line left" className="w-[20vw] mr-4"/>
                    <div className="flex flex-col items-center border-4 border-[#F3BF2D] rounded-lg w-[20vw]">
                        <p className="jaldi-regular text-[3vw] text-center p-4">ABOUT US</p>
                    </div>
                    <img src={dots_line_right} alt="dots line right" className="w-[20vw] ml-4"/>
                </div>

                {/* row 1 */}
                <div className="flex flex-row items-center justify-center w-[80vw] mt-5">
                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={tony_img} alt="Tony" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Tony Randall</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">Advisor</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={tyrese_img} alt="Tyrese" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Tyrese Fenty</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">Advisor</p>
                    </div>
                </div>

                {/* row 2 */}
                <div className="flex flex-row items-center justify-center w-[80vw] mt-5">
                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={lindsey_img} alt="Lindsey" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Lindsey Layton</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">President</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={erin_img} alt="Erin" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Erin Smith</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">VP of Internal</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={wade_img} alt="Wade" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Wade Dennis</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">VP of External</p>
                    </div>
                </div>

                {/* row 3 */}
                <div className="flex flex-row items-center justify-center w-[80vw] mt-5">
                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={sierra_img} alt="Sierra" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Sierra Chapman</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">Secretary</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={adryanna_img} alt="Adryanna" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Adryanna Blocker</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">Treasurer</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={bria_img} alt="Bria" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Bria Young</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">Marketing Chair</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <div className="flex flex-col items-center border-4 border-[#E50007] rounded-lg w-[12vw] m-2">
                            <img src={gabrielle_img} alt="Gabrielle" className="w-[10vw] mx-4"/>
                        </div>
                        <p className="jaldi-bold text-[1.5vw] text-center">Gabrielle Concepcion</p>
                        <p className="jaldi-regular text-[1.5vw] text-center">Social Chair</p>
                    </div>
                </div>

                {/* space at the bottom */}
                <div className="m-30">
                    <p> </p>
                </div>
            </div>
        </div>
    )
}