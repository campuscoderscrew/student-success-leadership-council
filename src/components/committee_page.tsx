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
        className="py-4 md:py-8 lg:pt-16 flex flex-col gap-4 md:gap-8
          bg-white text-black overflow-hidden 
          *:z-0"
      >
        {/* Banner */}
        <div className="relative font-black hero-title-text [&_svg]:-z-1">
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
          <CircleSVG
            className="absolute -top-2 lg:-top-10 -right-5 md:-right-6
              size-10 lg:size-12 fill-[#D42021]"
          />
          <CircleSVG
            className="absolute -top-2 right-24
              size-16 md:size-20 fill-[#F3BF2D]"
          />

          <CircleSVG
            className="absolute top-29 md:top-32 right-12
              size-5 md:size-7 fill-[#F3BF2D]"
          />
          <CircleSVG
            className="hidden xs:block absolute top-22 right-14
              size-12 md:size-15 fill-black"
          />
        </div>

        {/* Description */}
        <div className="relative [&_svg]:-z-1">
          <div className={`${screenMarginX} grid grid-cols-2 gap-4 md:gap-8`}>
            <div
              className="h-40 md:h-80 lg:h-100 flex flex-col items-center
              border-2 md:border-4 border-[#D42021] rounded-lg"
            >
              <img className="h-full object-contain" src={bannerImgSrc} />
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

          {/* Background */}
          <CircleSVG
            className="absolute -bottom-8 md:-bottom-12 right-14
              size-8 md:size-14 fill-black"
          />
          <CircleSVG
            className="absolute bottom-0 md:bottom-6 right-40
              size-4 md:size-6 fill-[#D42021]"
          />
          <CircleSVG
            className="absolute bottom-2 md:bottom-16 right-24
              size-8 md:size-12 fill-[#F3BF2D]"
          />

          <CircleSVG
            className="absolute bottom-20 -right-4 md:-right-6
              size-12 md:size-18 fill-[#D42021]"
          />
          <CircleSVG
            className="absolute bottom-18 md:bottom-16 right-2 md:right-4
              size-4 md:size-6 fill-[#F3BF2D]"
          />
        </div>

        {/* Support */}
        <div
          className="relative bg-[#F3F3F3] z-1 
            border-y-6 md:border-y-8 border-black"
        >
          <div
            className={`${screenMarginX} my-4 md:my-8 space-y-4 md:space-y-6 
              text-center font-bold`}
          >
            <div className="uppercase">
              <h2 className="hero-title-text">Support the {title}</h2>
              <span className="title-text">Join us in making a difference</span>
            </div>

            {/* Buttons */}
            <div
              className="flex justify-center gap-8 title-text
                *:z-1
                *:px-4 *:md:px-8 *:lg:px-12 
                *:py-2 *:md:py-4 *:lg:py-8

                *:rounded-lg
                *:uppercase *:cursor-pointer

                *:hover:bg-[#F3F3F3] *:hover:outline-2 *:hover:outline-inherit
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

          {/* Background */}
          <CircleSVG
            className="absolute
              top-[calc(50%-24px)]
              -left-8 md:-left-10
              size-16 md:size-24 fill-[#D42021]"
          />
          <CircleSVG
            className="absolute
              top-[calc(50%-60px)] md:top-[calc(50%-72px)]
              -left-6 md:-left-8
              size-12 md:size-16 fill-black"
          />
          <CircleSVG
            className="absolute
              top-[calc(50%-24px)]
              -right-8 md:-right-10
              size-16 md:size-24 fill-[#D42021]"
          />
          <CircleSVG
            className="absolute
              top-[calc(50%-60px)] md:top-[calc(50%-72px)]
              -right-6 md:-right-8
              size-12 md:size-16 fill-black"
          />
        </div>

        {/* Gallery */}
        <div
          className="relative -my-4 md:-my-8 py-4 md:py-8 
            [&_svg]:-z-1 overflow-hidden"
        >
          <div className={`${screenMarginX} space-y-8`}>
            <h2 className="hero-title-text font-bold uppercase text-center">
              Gallery & Highlights
            </h2>

            <div
              className="grid grid-cols-1 
                xs:grid-cols-2 md:grid-cols-3 
                gap-4 md:gap-8"
            >
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

          {/* Background */}
          <CircleSVG
            className="absolute
              -top-4 md:-top-8 -left-20 md:-left-30 
              size-32 xs:size-40 md:size-56 fill-[#F3BF2D]"
          />
          <CircleSVG
            className="hidden xs:block absolute
              -top-12 md:-top-16 -left-2 
              size-24 md:size-32 fill-black"
          />

          <CircleSVG
            className="absolute
              -bottom-5 md:-bottom-16 -right-5 md:-right-16
              size-32 md:size-64 fill-[#D42021]"
          />
          <CircleSVG
            className="absolute
              bottom-32 md:bottom-56 right-6 md:right-8
              size-8 md:size-12 fill-[#F3BF2D]"
          />

          <CircleSVG
            className="absolute
              bottom-34 md:bottom-56 -right-8 md:-right-12
              size-20 md:size-28 fill-black"
          />
          
        </div>

        {/* Additional content */}
        {children}
      </div>
    </>
  );
}
