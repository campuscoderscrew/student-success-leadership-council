import { useState, type ReactNode } from "react";

import NavBar from "./navbar";
import GalleryCard from "./gallery_card";

type Props = {
  title: string;
  bannerImgSrc: string;
  gallery: any;
  children?: ReactNode;
};

export default function CommitteePage(props: Props) {
  const { title, bannerImgSrc, gallery, children } = props;
  const screenMarginX = "px-4 md:px-8 lg:px-12";

  return (
    <>
      <NavBar />
      <div
        className="py-12 flex flex-col gap-4 md:gap-8 
          bg-white text-black"
      >
        {/* Banner */}
        <div className={`${screenMarginX} font-black hero-title-text`}>
          {/* Title and logo */}
          <p className="text-[#D42021]">{title}</p>

          <div className="flex items-center gap-4 md:gap-8">
            <h1>SSLC</h1>

            {/* Vertical bar */}
            <div className="w-[0.1em] h-[1em] bg-black rounded-sm" />
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
          className={`${screenMarginX} 
            grid sm:grid-cols-2 lg:grid-flow-col gap-12`}
        >
          <img
            className="w-full object-cover 
              border-4 border-[#D42021] rounded-lg"
            src={bannerImgSrc}
          />

          <div className="body-text [&_h2]:mt-4 *:first:mt-0">
            <h2 className="title-text font-bold">Our Mission</h2>
            <p>
              Raising funds for SSLC initiatives and close the opportunity gap
              for Black students at UMD.
            </p>

            <h2 className="title-text font-bold text-[#D42021]">Impact</h2>
            <p>
              Creating leadership and scholarship opportunities. Strengthening
              our Black student community.
            </p>

            <h2 className="title-text font-bold">Get Involved</h2>
            <p>
              Join us and make a difference. Purchase tickets or make a
              donation.
            </p>
          </div>
        </div>

        {/* Support */}
        <div
          className={`${screenMarginX} py-8 flex flex-col gap-8 items-center
            bg-[#F3F3F3] border-y-8 border-black
            text-center font-bold`}
        >
          <div className="uppercase">
            <h2 className="hero-title-text">Support the {title}</h2>
            <span className="title-text">Join us in making a difference</span>
          </div>

          {/* Buttons */}
          <div
            className="flex gap-8 title-text
              *:px-12 *:py-8 *:rounded-lg *:border *:border-black 
              *:uppercase *:cursor-pointer
              *:hover:bg-transparent *:hover:border-inherit
              *:transition-color *:duration-300"
          >
            <button className="bg-[#D42021] text-white hover:text-[#D42021]">
              Purchase Tickets
            </button>

            <button className="bg-[#F3BF2D]">Make a Donation</button>
          </div>

          <p className="subtitle-text">
            All proceeds support SSLC and UMD student success
          </p>
        </div>

        {/* Gallery */}
        <div className={`${screenMarginX}`}>
          <h2 className="hero-title-text font-bold uppercase text-center">
            Gallery & Highlights
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {gallery.map(
              (
                { caption, imgSrc }: { caption: string; imgSrc: string },
                index: Number,
              ) => (
                <GalleryCard
                  key={`gallery-image-${index}`}
                  caption={caption}
                  imgSrc={imgSrc}
                />
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
