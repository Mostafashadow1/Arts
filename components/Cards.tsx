import React from "react";
import Masonry from "react-masonry-css";
import { cardsDataProps } from "types/type";
import { Card } from "components";
const Cards = ({ cardsData }: cardsDataProps) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid p-2"
        columnClassName="my-masonry-grid_column"
      >
        {cardsData?.map((cardData, idx) => (
          <Card key={idx} cardData={cardData} />
        ))}
      </Masonry>
      <div className="px-2"></div>
    </>
  );
};

export default Cards;
