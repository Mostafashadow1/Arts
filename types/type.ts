// api nft open sea
export type nftType = {
  id: number;
  image_url?: string;
  name?: string;
  collection_url?: string;
  description?: string;
  token_id?: string;
  volume?: string;
  creator?: creator;
};

// api top tranding collection and sales
export type collectiontType = {
  collection_name: string;
  collection_url: string;
  trades?: string;
  volume?: string;
  floor?: string;
  price?: string;
  nft_name?: string;
  date?: string;
};

export type creator = {
  user: any;
  username: string;
};

export type homeProps = {
  nfts: nftType[];
  collectionsMonth: collectiontType[];
  collectionsWeek: collectiontType[];
  collectionsDay: collectiontType[];
  salesDay: collectiontType[];
  salesWeek: collectiontType[];
  salesMonth: collectiontType[];
};

export type nftsProps = {
  nfts: nftType[];
};
export type collectiontsProps = {
  collectionsMonth: collectiontType[];
  collectionsWeek: collectiontType[];
  collectionsDay: collectiontType[];
  hiddenButton?: boolean;
};

export type salesProps = {
  salesMonth: collectiontType[];
  salesWeek: collectiontType[];
  salesDay: collectiontType[];
};

export type cardsDataProps = {
  cardsData: collectiontType[];
};

// nft type card
export type nftCardProps = {
  nft: nftType;
};

// collectionCard type

export type cardProps = {
  cardData: collectiontType;
};
