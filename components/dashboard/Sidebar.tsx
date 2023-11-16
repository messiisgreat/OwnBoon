import React from "react";
import {
  HomeIcon,
  RectangleStackIcon,
  ClockIcon,
  ChatBubbleBottomCenterIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
const Sidebar = () => {
  return (
    <div className="flex flex-col col-span-1   h-screen items-start  p-5 justify-between ">
      <div>
        <img src="https://flowbite.com/docs/images/logo.svg" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-[#4b9afa] hover:bg-[#4b9afa]/70 transition-all duration-150 w-fit p-2 cursor-pointer rounded-full text-white">
          <HomeIcon className="w-5 h-5" />
        </div>
        <div className="p-2 w-fit cursor-pointer">
          <RectangleStackIcon className="w-5 h-5" />
        </div>
        <div className="p-2 w-fit cursor-pointer">
          <ClockIcon className="h-5 w-5" />
        </div>
        <div className="p-2 w-fit cursor-pointer">
          <ChatBubbleBottomCenterIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-2 bg-gradient-to-tr from-[#4b9afa] to-[#4b9afa]/40 cursor-pointer rounded-full  text-white">
        <PlusIcon className="h-7 w-7 p-1  rounded-full" />
      </div>
    </div>
  );
};

export default Sidebar;
