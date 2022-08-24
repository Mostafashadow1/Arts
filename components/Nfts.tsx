import Head from "next/head";
import React from "react";
import Masonry from "react-masonry-css";
import { nftsProps } from "types/type";
import NftCard from "./NftCard";
const Nfts = ({ nfts }: nftsProps) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="mt-12 p-2  mb-5  border-b">
      <div className="flex flex-col items-center gap-y-2 text-2xl md:text-3xl ">
        <h3 className=" font-medium w-fit text-center capitalize bg-gradient-to-r from-[#794ADC] to-[#FD80FF] text-transparent bg-clip-text ">
          we give the best quality
        </h3>
        <h3 className=" font-bold w-fit text-center capitalize bg-gradient-to-r from-[#794ADC] to-[#FD80FF] text-transparent bg-clip-text ">
          NFT for you
        </h3>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid "
        columnClassName="my-masonry-grid_column"
      >
        {nfts && nfts?.map((item: any) => <NftCard key={item.id} nft={item} />)}
      </Masonry>
    </div>
  );
};

export default Nfts;
