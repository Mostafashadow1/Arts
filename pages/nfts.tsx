import { Banner, Nfts } from "components";
import React from "react";
import { nftRequests } from "utils/nftRequests";
import image from "images/nfts_d.png";
import { nftsProps } from "types/type";
import { optionsNft } from "utils/constant";
import Head from "next/head";
const NftsPage = ({ nfts }: nftsProps) => {
  return (
    <div>
      <Head>
        <title>Arts | nfts</title>
      </Head>
      <Banner
        title1="Discover a lot of drawings of drawings NFTS"
        title2="that you will really like"
        description="Discover the amazing NFT graphic, and you can find NFT out the most
        famous and some other information that will amaze you. Find out now
        Don't be too late to find out what's going on around your"
        image={image}
        imageWidth="500px"
        imageHeight="500px"
      />
      <Nfts nfts={nfts} />
    </div>
  );
};

export default NftsPage;

export async function getStaticProps() {
  const res = await fetch(`${nftRequests.fetchAssets}?limit=60`, optionsNft);
  const data = await res.json();
  return {
    props: {
      nfts: data?.assets || null,
    },
  };
}
