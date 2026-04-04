import { useState, type ReactNode } from "react";

import NavBar from "./navbar";

type Props = {
  title: string;
  bannerImgSrc: string;
  gallery: any;
  children?: ReactNode;
};

export default function CommitteePage(props: Props) {
  const { title, bannerImgSrc, gallery, children } = props;
  const marginX = "px-4 md:px-8 lg:px-12";

  return (
    <>
      <NavBar />
      <div className="py-12 flex flex-col gap-8 bg-white text-black">
        {/* Banner */}
        <div className={`${marginX} font-black hero-title-text`}>
          {/* Title and logo */}
          <p className="text-[#D42021]">{title}</p>

          <div className="flex items-center space-x-8">
            <h1>SSLC</h1>

            {/* Vertical bar */}
            <div className="w-2 h-14 bg-black rounded-sm" />
            <div className="title-text text-balance">
              <p>
                Empowering students through <br />
                Scholarships and Awards
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className={`${marginX} grid lg:grid-cols-2 lg:grid-flow-col gap-12`}
        >
          <img
            className="w-full object-cover 
              border-4 border-[#D42021] rounded-lg"
            src={bannerImgSrc}
          />

          <div>
            <h2 className="hero-title-text">Our Mission</h2>
            <p className="">
              Raising funds for SSLC initiatives and close the opportunity gap
              for Black students at UMD.
            </p>

            <h2 className="">Impact</h2>
            <p>
              Creating leadership and scholarship opportunities. Strengthening
              our Black student community.
            </p>

            <p>Get Involved</p>
            <p>
              Join us and make a difference. Purchase tickets or make a
              donation.
            </p>
          </div>
        </div>

        {/* Support */}
        <div
          className="py-8 flex flex-col gap-8 items-center
            bg-[#F3F3F3] border-y-8 border-black
            text-center font-bold"
        >
          <div className="uppercase">
            <h2 className="title-text">Support the {title}</h2>
            <span>Join us in making a difference</span>
          </div>

          {/* Buttons */}
          <div
            className="flex gap-8 
              *:px-6 *:py-4 *:rounded-lg *:border *:border-black 
              *:subtitle-text *:uppercase
              *:hover:opacity-80
              *:transition-color *:duration-100"
          >
            <button className="bg-[#D42021] text-white">
              Purchase Tickets
            </button>

            <button className="bg-[#F3BF2D]">Make a Donation</button>
          </div>

          <p className="">All proceeds support SSLC and UMD student success</p>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-5xl font-bold uppercase text-center">
            Gallery & Highlights
          </h2>

          <div className="grid grid-cols-3">
            {gallery.map(
              (
                { caption, imgSrc }: { caption: string; imgSrc: string },
                index: Number,
              ) => (
                <div key={`gallery-image-${index}`}>
                  <img className="object-cover" src={imgSrc} />
                  <figcaption>{caption}</figcaption>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Additional content */}
        {children}
      </div>
    </>
  );
}
