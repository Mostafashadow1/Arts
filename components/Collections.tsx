import React, { useState } from "react";
import { collectiontsProps } from "types/type";
import { Cards } from "components";
const Collections = ({
  collectionsMonth,
  collectionsWeek,
  collectionsDay,
}: collectiontsProps) => {
  const [isDay, setIsDay] = useState(true);
  const [isMonth, setIsMonth] = useState(false);
  const [isWeek, setIsWeek] = useState(false);

  const resetAllCollections = () => {
    setIsMonth(false);
    setIsWeek(false);
    setIsDay(false);
  };

  // set collection day true =  show and set all other collection false = hide
  const showDayCollection = () => {
    if (isDay) return;
    resetAllCollections();
    setIsDay(true);
  };
  // set collection week true =  show and set all other collection false = hide
  const showWeekCollection = () => {
    if (isWeek) return;
    resetAllCollections();
    setIsWeek(true);
  };
  // set collection Month true =  show and set all other collection false = hide
  const showMonthCollection = () => {
    if (isMonth) return;
    resetAllCollections();
    setIsMonth(true);
  };

  return (
    <div className="my-12 mb-5 p-2 border-b ">
      <div className="flex justify-center">
        <h3 className="text-2xl md:text-3xl font-medium w-fit text-center capitalize bg-gradient-to-r from-[#794ADC] to-[#FD80FF] text-transparent bg-clip-text ">
          top NFT collections
        </h3>
      </div>
      <div className="mt-10  px-4 md:px-0 flex justify-center text-white capitalize gap-x-6">
        <button
          className={`rounded-lg px-6 py-2 bg-activeColor text-base font-semibold bg-opacity-80 cursor-pointer ${
            isDay && " bg-opacity-100 cursor-default scale-110"
          }`}
          onClick={showDayCollection}
        >
          Tranding Day
        </button>
        <button
          className={`rounded-lg px-6  py-2  bg-activeColor text-base font-semibold bg-opacity-80 cursor-pointer ${
            isWeek && " bg-opacity-100 cursor-default scale-110"
          }`}
          onClick={showWeekCollection}
        >
          Tranding Week
        </button>
        <button
          className={`rounded-lg  px-6 py-2 bg-activeColor text-base font-semibold bg-opacity-80 cursor-pointer ${
            isMonth && " bg-opacity-100 cursor-default scale-110"
          }`}
          onClick={showMonthCollection}
        >
          Tranding Month
        </button>
      </div>
      <div className="mt-10">
        {isDay && <Cards cardsData={collectionsDay} />}
        {isWeek && <Cards cardsData={collectionsWeek} />}
        {isMonth && <Cards cardsData={collectionsMonth} />}
      </div>
    </div>
  );
};

export default Collections;
