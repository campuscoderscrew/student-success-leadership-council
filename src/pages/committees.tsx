import React from "react"
import { Link } from "react-router-dom"
import NavBar from "~/components/navbar"

// TODO: Take in a param to distinguish between different committees
// Routing handled w/ dynamic route /committeepage/:id
// ids - gala, political, financial, leadership, mentor
// Todo: implement responsiveness
export default function Committees() {
    return (
        <div className="min-h-screen relative overflow-hidden">

            <div className="relative z-50">
                <NavBar/>
            </div>

            {/* header */}
            <div className="bg-[#F3F3F3] relative px-16 py-12">

                {/* red circle */}
                <div style={{ width: '200px', height: '200px', background: '#D42021', borderRadius: '50%', position: 'absolute', top: '-80px', right: '-50px', zIndex: 10 }} />

                {/* black circle */}
                <div style={{ width: '200px', height: '200px', background: '#000000ff', borderRadius: '50%', position: 'absolute', top: '80px', left: '-60px', zIndex: -1 }} />
                <div className="relative z-10">
                    <h1 className="text-6xl font-black text-black mt-4">Committees</h1>
                    <p className="text-sm text-black -mt-1 -mb-3">Student Success Leadership Council | SSLC</p>
                </div>

            </div>

            {/* decorative circles, all 200x200, */}
            <div style={{ width: '200px', height: '200px', background: '#000000ff', borderRadius: '50%', position: 'absolute', top: '400px', right: '-120px', zIndex: 0 }} />
            <div style={{ width: '200px', height: '200px', background: '#F3BF2D', borderRadius: '50%', position: 'absolute', top: '700px', left: '-130px', zIndex: 0 }} />
            <div style={{ width: '200px', height: '200px', background: '#D42021', borderRadius: '50%', position: 'absolute', top: '1000px', right: '-80px', zIndex: 0 }} />
            <div style={{ width: '200px', height: '200px', background: '#000000ff', borderRadius: '50%', position: 'absolute', top: '1250px', left: '-90px', zIndex: 0 }} />
            <div style={{ width: '200px', height: '200px', background: '#F3BF2D', borderRadius: '50%', position: 'absolute', bottom: '-70px', right: '-10px', zIndex: 0 }} />

            {/* gift of giving gala */}
            <div className="flex items-center gap-8 px-16 py-8 relative z-10">
                <div style={{ width: '300px', height: '200px', border: '3px solid #F3BF2D', flexShrink: 0, borderRadius: '12px', background: 'white' }} />
                <div>
                    <h2 className="text-2xl font-black text-black mb-2">Gift of Giving Gala</h2>
                    <p className="text-black text-sm mb-4">SSLC's annual fundraiser. Celebrating Black student success at UMD.</p>
                    <Link to="/committeepage/gala" style={{ border: '1px solid black' }} className="bg-[#F3BF2D] text-white font-bold px-4 py-2 rounded">Learn More</Link>
                </div>
            </div>

            {/* political power project */}
            <div className="flex items-center gap-8 px-16 py-8 relative z-10">
                <div>
                    <h2 className="text-2xl font-black text-black mb-2">Political Power Project</h2>
                    <p className="text-black text-sm mb-4">Keeping students informed on political issues.</p>
                    <Link to="/committeepage/political" style={{ border: '1px solid black' }} className="bg-[#D42021] text-white font-bold px-4 py-2 rounded">Learn More</Link>
                </div>
                <div style={{ width: '300px', height: '200px', border: '3px solid #D42021', flexShrink: 0, borderRadius: '12px', background: 'white' }} />
            </div>

            {/* financial power project */}
            <div className="flex items-center gap-8 px-16 py-8 relative z-10">
                <div style={{ width: '300px', height: '200px', border: '3px solid #1C1008', flexShrink: 0, borderRadius: '12px', background: 'white' }} />
                <div>
                    <h2 className="text-2xl font-black text-black mb-2">Financial Power Project</h2>
                    <p className="text-black text-sm mb-4">Improving financial literacy at UMD.</p>
                    <Link to="/committeepage/financial" style={{ border: '1px solid black' }} className="bg-[#1C1008] text-white font-bold px-4 py-2 rounded">Learn More</Link>
                </div>
            </div>

            {/* leadership summit */}
            <div className="flex items-center gap-8 px-16 py-8 relative z-10">
                <div>
                    <h2 className="text-2xl font-black text-black mb-2">Leadership Summit</h2>
                    <p className="text-black text-sm mb-4">Empowering students to lead. Building skills and connections on campus.</p>
                    <Link to="/committeepage/leadership" style={{ border: '1px solid black' }} className="bg-[#F3BF2D] text-white font-bold px-4 py-2 rounded">Learn More</Link>
                </div>
                <div style={{ width: '300px', height: '200px', border: '3px solid #F3BF2D', flexShrink: 0, borderRadius: '12px', background: 'white' }} />
            </div>

            {/* mentor program */}
            <div className="flex items-center gap-8 px-16 py-8 relative z-10 mb-20">
                <div style={{ width: '300px', height: '200px', border: '3px solid #D42021', flexShrink: 0, borderRadius: '12px', background: 'white' }} />
                <div>
                    <h2 className="text-2xl font-black text-black mb-2">Mentor Program</h2>
                    <p className="text-black text-sm mb-4">Connecting UMD with local youth. Inspiring the next generation.</p>
                    <Link to="/committeepage/mentor" style={{ border: '1px solid black' }} className="bg-[#D42021] text-white font-bold px-4 py-2 rounded">Learn More</Link>
                </div>
            </div>

        </div>
    )
}