import React from "react";
import { cardProps } from "types/type";
const Card = ({ cardData }: cardProps) => {
  return (
    <a href={`${cardData?.collection_url}`} target="_blank" rel="noreferrer">
      <div className=" mt-6 transition duration-100 border cursor-pointer hover:border-activeColor   p-2 border-dashed   rounded-sm ">
        <div className=" flex capitalize font-semibold gap-2">
          <h2 className="">collection name :</h2>
          <h2 className="text-activeColor">{cardData?.collection_name}</h2>
        </div>
        <div className="capitalize my-2 font-medium">
          <div className="flex gap-1 text-sm">
            <h4>{cardData?.price ? "price :" : "trades :"}</h4>
            <h4 className="text-activeColor">
              {cardData?.price ? cardData.price : cardData?.trades}
            </h4>
          </div>
          <div className="flex gap-1 text-sm">
            <h4>{cardData.date ? "date :" : "volume :"}</h4>
            <h4 className="text-activeColor">
              {cardData.date ? cardData.date : cardData?.volume}
            </h4>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
