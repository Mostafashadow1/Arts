import { Banner, Collections } from "components";
import Head from "next/head";
import React from "react";
import { collectionsRequests } from "utils/collectionsRequests";
import { optionsCollection } from "utils/constant";
import image from "images/collections.png";
import { collectiontsProps } from "types/type";
const CollectionsPage = ({
  collectionsMonth,
  collectionsWeek,
  collectionsDay,
}: collectiontsProps) => {
  return (
    <div>
      <Head>
        <title>Arts | collections</title>
      </Head>
      <Banner
        title1="discover the most "
        title2="Collections Rare NFTs"
        description="Discover the most popular totals. You can also specify the period you want to know information about, such as the month, week, day"
        image={image}
      />

      <Collections
        collectionsMonth={collectionsMonth}
        collectionsWeek={collectionsWeek}
        collectionsDay={collectionsDay}
      />
    </div>
  );
};

export default CollectionsPage;

export async function getStaticProps() {
  const [collectionsMonth, collectionsWeek, collectionsDay] = await Promise.all(
    [
      fetch(collectionsRequests.fetchCollectionMonth, optionsCollection).then(
        (res) => res.json()
      ),
      fetch(collectionsRequests.fetchCollectionWeek, optionsCollection).then(
        (res) => res.json()
      ),
      fetch(collectionsRequests.fetchCollectionDay, optionsCollection).then(
        (res) => res.json()
      ),
    ]
  );

  return {
    props: {
      collectionsMonth: collectionsMonth || null,
      collectionsWeek: collectionsWeek || null,
      collectionsDay: collectionsDay || null,
    },
  };
}
