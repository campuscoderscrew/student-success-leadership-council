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
  const screenMarginX = "mx-4 md:mx-8 lg:mx-12";

  const CircleSVG = (props: { className: string }) => (
    <svg className={props.className} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );

  return (
    <>
      <NavBar />
      <div
        className="relative z-0 py-12 
        flex flex-col gap-4 md:gap-8 
          bg-white text-black overflow-hidden"
      >
        {/* Banner */}
        <div className="font-black hero-title-text">
          <div className={screenMarginX}>
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

          {/* Background */}
          <div className="relative inset-0 -z-1">
            <CircleSVG className="absolute size-12 right-0 top-0 fill-[#D42021]" />
            <CircleSVG className="absolute size-20 right-32 -top-40 fill-[#D42021]" />

            <CircleSVG className="absolute size-7 right-22 top-0 fill-[#D42021]" />
            <CircleSVG className="absolute size-15 right-24 -top-12 fill-[#F3BF2D]" />
          </div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className={screenMarginX}>
            <div
              className="h-40 md:h-80 lg:h-100 flex flex-col items-center
              border-2 md:border-4 border-[#D42021] rounded-lg"
            >
              <img className="h-full object-contain" src={bannerImgSrc} />
            </div>
          </div>

          <div className="max-h-fit body-text [&_h2]:mt-4 *:first:mt-0">
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
          className="py-8 flex flex-col gap-8 items-center
            bg-[#F3F3F3] border-y-8 border-black
            text-center font-bold"
        >
          <div className={screenMarginX}>
            <div className="uppercase">
              <h2 className="hero-title-text">Support the {title}</h2>
              <span className="title-text">Join us in making a difference</span>
            </div>

            {/* Buttons */}
            <div
              className="flex gap-8 title-text
              *:px-4 *:md:px-8 *:lg:px-12 
              *:py-2 *:md:py-4 *:lg:py-8 

              *:rounded-lg
              *:uppercase *:cursor-pointer

              *:hover:bg-transparent *:hover:outline-2 *:hover:outline-inherit
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
        </div>

        {/* Gallery */}
        <div className={`${screenMarginX} space-y-8`}>
          <h2 className="hero-title-text font-bold uppercase text-center">
            Gallery & Highlights
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
