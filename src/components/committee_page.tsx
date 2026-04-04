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
  const marginX = "px-4 md:px-8 lg:px-16";
  console.log(gallery);

  return (
    <>
      <NavBar />
      <div className="py-16 flex flex-col gap-8 bg-white text-black">
        {/* Banner */}
        <div
          className="px-4 md:px-8 lg:px-16 
          flex flex-col font-bold hero-title-text text-6xl"
        >
          {/* Title */}
          <h1 className="text-[#D42021]">{title}</h1>

          <div className="flex items-center space-x-10">
            <h1 className="">SSLC</h1>
            <div className="w-2 h-14 bg-black rounded-sm"></div>
            <div className="subtitle-text text-3xl text-balance">
              <p>
                Empowering students through <br />
                Scholarships and Awards
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className="px-4 md:px-8 lg:px-16 
          grid lg:grid-cols-2 lg:grid-flow-col gap-4"
        >
          <img
            className="w-full object-cover 
                border-4 border-[#D42021] rounded-md"
            src={bannerImgSrc}
          />
          <div className="bg-red-500"></div>
        </div>

        {/* Support */}
        <div
          className="py-8 flex flex-col gap-8 items-center
            bg-[#F3F3F3] border-y-8 border-black
            text-3xl text-center font-bold uppercase"
        >
          <div>
            <h2 className="text-5xl">Support the {title}</h2>
            <h3 className="">Join us in making a difference</h3>
          </div>

          <div
            className="flex gap-8 
              *:px-6 *:py-4 *:rounded-lg *:border *:border-black"
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
              ({ caption, imgSrc }: { caption: string; imgSrc: string }) => (
                <div>
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
