import React from "react";
import image from "images/error.jpg";
import Image from "next/image";
import Link from "next/link";
const ErorrPage = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Image
          priority
          src={image}
          alt="image"
          height="300"
          width="400"
          objectFit="contain"
        />
        <div className="flex items-center justify-center gap-2">
          <p className=" text-center capitalize text-xl">
            this page not found got to
          </p>
          <Link href="/">
            <button className="text-2xl font-semibold text-activeColor">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErorrPage;
