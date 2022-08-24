import React from "react";
import { optionsCollection } from "utils/constant";
import { salesRequests } from "utils/salesRequests";
import { salesProps } from "types/type";
import Head from "next/head";
import { Banner, Sales } from "components";
import image from "images/sales.png";
const SalesPage = ({ salesDay, salesWeek, salesMonth }: salesProps) => {
  return (
    <div>
      <Head>
        <title>Arts | Sales</title>
      </Head>
      <Banner
        title1="discover the most "
        title2="Sales Rare NFTs"
        description="Find out the most expensive drawing. You can also select the period you want to know information about, such as month, week and day"
        image={image}
      />
      <Sales
        salesDay={salesDay}
        salesWeek={salesWeek}
        salesMonth={salesMonth}
      />
    </div>
  );
};

export default SalesPage;

export async function getStaticProps() {
  const [salesDay, salesWeek, salesMonth] = await Promise.all([
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

  return {
    props: {
      salesDay: salesDay || null,
      salesWeek: salesWeek || null,
      salesMonth: salesMonth || null,
    },
  };
}
