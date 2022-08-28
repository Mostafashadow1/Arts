import Image from "next/image";
import React from "react";
import { nftCardProps } from "types/type";
import defaultImage1 from "images/nft_d.png";
import defaultImage2 from "images/nft_d_2.png";
import defaultImage3 from "images/nft_d_3.png";
import defaultImage4 from "images/nft_d_4.png";
import defaultImage5 from "images/nft_d_5.png";
import defaultImage6 from "images/nft_d_6.png";
const NftCard = ({ nft }: nftCardProps) => {
  // all images defaults render random image when not found image
  const images = [
    defaultImage1,
    defaultImage2,
    defaultImage3,
    defaultImage4,
    defaultImage5,
    defaultImage6,
  ];
  const randomImage = Math.floor(Math.random() * images.length);
  return (
    <div className=" cursor-pointer mt-10 sm:rounded-tl-[40px] border hover:scale-105 rounded-lg overflow-hidden transition duration-150  text-white">
      <div >
        <Image
            placeholder="blur"
          blurDataURL="base64"
          src={nft.image_url || images[randomImage]}
          alt="nft iamge"
          layout="responsive"
          width="100%"
          height="100px"
        />
      </div>
      <div className="p-2 ">
        <h2 className="text-2xl font-medium text-mainColor">
          {nft?.creator?.user?.username || "Unknown"}
        </h2>
      </div>

      <div className=" px-2 mb-1 capitalize space-y-1">
        <div className="flex gap-2 text-base">
          <h2 className="text-mainColor ">name :</h2>
          <h2 className="text-activeColor">{nft?.name || "Unknown"}</h2>
        </div>
        <div className="flex gap-2 text-activeColor">
          <h2 className="text-mainColor">token : </h2>
          <h2 className="text-activeColor">{nft?.token_id?.slice(0, 2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
