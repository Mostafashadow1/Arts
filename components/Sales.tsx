import React, { useState } from "react";
import { Cards } from "components";
import { salesProps } from "types/type";

const Sales = ({ salesDay, salesWeek, salesMonth }: salesProps) => {
  const [isDay, setIsDay] = useState(true);
  const [isMonth, setIsMonth] = useState(false);
  const [isWeek, setIsWeek] = useState(false);
  const resetAllSales = () => {
    setIsMonth(false);
    setIsWeek(false);
    setIsDay(false);
  };

  // set Sales day true =  show and set all other Sales false = hide
  const showDaySales = () => {
    if (isDay) return;
    resetAllSales();
    setIsDay(true);
  };
  // set Sales week true =  show and set all other Sales false = hide
  const showWeekSales = () => {
    if (isWeek) return;
    resetAllSales();
    setIsWeek(true);
  };
  // set Sales Month true =  show and set all other Sales false = hide
  const showMonthSales = () => {
    if (isMonth) return;
    resetAllSales();
    setIsMonth(true);
  };

  return (
    <div className="my-14 mb-5 p-2 ">
      <div className="flex justify-center">
        <h3 className="text-2xl md:text-3xl font-medium w-fit text-center capitalize bg-gradient-to-r from-[#794ADC] to-[#FD80FF] text-transparent bg-clip-text ">
          top NFT sales
        </h3>
      </div>
      <div className="mt-10 px-4 md:px-0 flex justify-center text-white capitalize gap-x-6">
        <button
          className={`rounded-lg px-6 py-2 bg-activeColor text-base font-semibold bg-opacity-80 cursor-pointer ${
            isDay && " bg-opacity-100 cursor-default scale-110"
          }`}
          onClick={showDaySales}
        >
          Tranding Day
        </button>
        <button
          className={`rounded-lg px-6  py-2  bg-activeColor text-base font-semibold bg-opacity-80 cursor-pointer ${
            isWeek && " bg-opacity-100 cursor-default scale-110"
          }`}
          onClick={showWeekSales}
        >
          Tranding Week
        </button>
        <button
          className={`rounded-lg  px-6 py-2 bg-activeColor text-base font-semibold bg-opacity-80 cursor-pointer ${
            isMonth && " bg-opacity-100 cursor-default scale-110"
          }`}
          onClick={showMonthSales}
        >
          Tranding Month
        </button>
      </div>
      <div className="mt-10">
        {isDay && <Cards cardsData={salesDay} />}
        {isWeek && <Cards cardsData={salesWeek} />}
        {isMonth && <Cards cardsData={salesMonth} />}
      </div>
    </div>
  );
};

export default Sales;
