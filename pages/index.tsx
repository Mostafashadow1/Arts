import { Banner, Collections, Sales } from "components";
import { Nfts } from "components";
import Head from "next/head";
import { homeProps } from "types/type";
import { nftRequests } from "utils/nftRequests";
import { optionsCollection, optionsNft } from "utils/constant";
import { collectionsRequests } from "utils/collectionsRequests";
import { salesRequests } from "utils/salesRequests";
import image from "images/home.png";
const Home = ({
  nfts,
  collectionsMonth,
  collectionsWeek,
  collectionsDay,
  salesDay,
  salesWeek,
  salesMonth,
}: homeProps) => {
  return (
    <div>
      <Head>
        <title>Arts | Home</title>
      </Head>
      <Banner
        title1="discover Digital art collect"
        title2="Rare NFTs and sell"
        description="Discover the amazing NFT graphic, and you can find NFT out the most
        famous and some other information that will amaze you. Find out now
        Don't be too late to find out what's going on around your"
        href="/nfts"
        image={image}
      />
      <Nfts nfts={nfts} />

      <Collections
        collectionsMonth={collectionsMonth}
        collectionsWeek={collectionsWeek}
        collectionsDay={collectionsDay}
      />
      <Sales
        salesDay={salesDay}
        salesWeek={salesWeek}
        salesMonth={salesMonth}
      />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const [
    nfts,
    collectionsMonth,
    collectionsWeek,
    collectionsDay,
    salesDay,
    salesWeek,
    salesMonth,
  ] = await Promise.all([
    fetch(`${nftRequests.fetchAssets}?limit=24`, optionsNft).then((res) =>
      res.json()
    ),
    fetch(collectionsRequests.fetchCollectionMonth, optionsCollection).then(
      (res) => res.json()
    ),
    fetch(collectionsRequests.fetchCollectionWeek, optionsCollection).then(
      (res) => res.json()
    ),
    fetch(collectionsRequests.fetchCollectionDay, optionsCollection).then(
      (res) => res.json()
    ),
    fetch(salesRequests.fetchSalesDay, optionsCollection).then((res) =>
      res.json()
    ),
    fetch(salesRequests.fetchSalesWeek, optionsCollection).then((res) =>
      res.json()
    ),
    fetch(salesRequests.fetchSalesMonth, optionsCollection).then((res) =>
      res.json()
    ),
  ]);
  const limitCollection = 10;
  const limitSale = 10;
  return {
    props: {
      nfts: nfts?.assets || null,
      collectionsMonth:
        collectionsMonth?.length > 0
          ? collectionsMonth?.slice(0, limitCollection)
          : null,
      collectionsWeek:
        collectionsWeek?.length > 0
          ? collectionsWeek?.slice(0, limitCollection)
          : null,
      collectionsDay:
        collectionsDay?.length > 0
          ? collectionsDay?.slice(0, limitCollection)
          : null,
      salesDay: salesDay?.length > 0 ? salesDay?.slice(0, limitSale) : null,
      salesWeek: salesWeek?.length > 0 ? salesWeek?.slice(0, limitSale) : null,
      salesMonth:
        salesMonth?.length > 0 ? salesMonth?.slice(0, limitSale) : null,
    },
  };
}
