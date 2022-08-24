export const baseUrlNft = "https://opensea13.p.rapidapi.com";
// collections tranding and sales
export const baseUrlCollection =
  "https://top-nft-collections-and-sales.p.rapidapi.com";

export const optionsNft = {
  method: "GET",
  params: {
    collection_slug: "cryptopunks",
    order_direction: "desc",
    include_orders: "false",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_NFT_API_KEY!,
    "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
  },
};

export const optionsCollection = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_NFT_API_KEY!,
    "X-RapidAPI-Host": "top-nft-collections-and-sales.p.rapidapi.com",
  },
};
