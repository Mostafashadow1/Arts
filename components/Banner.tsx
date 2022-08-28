/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";

type bannerProps = {
  title1: string;
  title2: string;
  description: string;
  href?: string;
  image: any;
  imageWidth?: string;
  imageHeight?: string;
};

const Banner = ({
  title1,
  title2,
  description,
  href,
  image,
  imageWidth,
  imageHeight,
}: bannerProps) => {
  return (
    <div className=" flex flex-wrap md:justify-between items-center py-4 px-2  border-b border-mainColor">
      <div className="mt-2 md:mt-[-20px] md:flex-[0.5] ">
        <div className="capitalize font-medium  space-y-4">
          <h3 className="text-3xl">{title1}</h3>
          <h3 className="text-3xl bg-gradient-to-r from-[#794ADC] w-fit to-[#FD80FF] bg-clip-text text-transparent">
            {title2}
          </h3>
        </div>
        <div className="mt-3 w-full md:w-[90%]">
          <p className="  text-base font-medium text-secondColor">
            {description}
          </p>
        </div>
        {href && (
          <Link href={`${href}`}>
            <button className="text-base mt-5 bg-secondColor text-white rounded-lg px-6 py-2 hover:bg-opacity-90 transition duration-100">
              Explore more
            </button>
          </Link>
        )}
      </div>
      <div className="flex  mx-auto md:mx-0 md:flex-[0.3]">
        <Image
          priority
          src={image}
          alt="image"
          width={imageWidth ? imageWidth : "400"}
          height={imageHeight ? imageHeight : "400"}
          className=" md:scale-125 "
        />
      </div>
    </div>
  );
};

export default Banner;
