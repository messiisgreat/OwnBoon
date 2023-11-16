import React from "react";

const Progress = () => {
  return (
    <div className="col-span-2 bg-[#faf5ee]/40 rounded-tl-2xl p-6 py-10">
      <h1 className="font-semibold">Calendar</h1>
      <div className="mt-16">
        <div className="">
          <h1 className="text-xs flex justify-between items-center text-black/50 font-semibold">
            Mar 27, 2023 <span className="text-lg">...</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Progress;
