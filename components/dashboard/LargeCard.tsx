import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const LargeCard = () => {
  const [width, setWidth] = useState(0);

  const percent = 69;

  useEffect(() => {
    setWidth(percent);
  }, [percent]);
  return (
    <div className="bg-[#71357c]  w-fit pr-10 py-8 h-full pl-3 rounded-lg text-white justify-start">
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold">Web development</p>
        <EllipsisVerticalIcon className="h-5 w-5" />
      </div>
      <div className="mt-5 text-sm space-y-1 text-white/60 pb-5 px-1">
        69%
        <div className="w-full bg-black/80 mt-1 rounded-md">
          <div
            className="bg-white rounded-md h-1"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
      {/* Main */}
    </div>
  );
};

export default LargeCard;
