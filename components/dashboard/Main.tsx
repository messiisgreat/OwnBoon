import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import LargeCard from "./LargeCard";

const Main = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  // @ts-ignore
  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <div className="col-span-9 py-8  space-y-16 bg-white/40 rounded-lg rounded-r-2xl">
      {/* Header */}
      <div className="flex px-5  justify-between items-center">
        <div className="flex gap-4 font-bold text-lg">
          <img
            className="h-8 w-8 object-cover  rounded-full"
            src={session?.user?.image || ""}
          />
          <p>Hi {session?.user?.name}, welcome Back!</p>
        </div>
        <div className="items-center flex gap-5">
          <p className="text-sm font-semibold text-black/50">{formattedDate}</p>
          <div className="bg-black/5 p-2 text-black/80 cursor-pointer hover:text-black hover:bg-black/30 transition-all duration-150  rounded-lg">
            <p>Add New Goal</p>
          </div>
        </div>
      </div>
      {/* Progress */}
      <div className="px-5 py-2 rounded-lg bg-white">
        <LargeCard />
      </div>
      {/* Taks for today */}
      <div className="grid grid-cols-7 px-5 p-5 rounded-lg   bg-white/80 text-lg font-[500] ">
        <div className="space-y-10 col-span-4  ">
          <h1>Goals For Today</h1>
          <div className="space-y-10 overflow-y-scroll scrollbar !scrollbar-track-[#4b9afa]  !scrollbar-thumb-[#4b9afa] h-60">
            <div className="font-normal bg-white   text-xs space-y-3 border-l-2 w-full border-orange-500 py-2 rounded-xl px-3  shadow-xl shadow-black/5">
              <div className="space-y-2">
                <h2 className="flex justify-between ">
                  <span className="font-bold"> Mobile App</span> <span>()</span>
                </h2>
                <p className="text-black/60">prepare sugma balls</p>
              </div>
            </div>
            <div className="font-normal bg-white  text-xs space-y-3 border-l-2 w-full border-orange-500 py-2 rounded-xl px-3  shadow-xl shadow-black/5">
              <div className="space-y-2">
                <h2 className="flex justify-between ">
                  <span className="font-bold"> Mobile App</span> <span>()</span>
                </h2>
                <p className="text-black/60">prepare sugma balls</p>
              </div>
            </div>
            <div className="font-normal bg-white  text-xs space-y-3 border-l-2 w-full border-orange-500 py-2 rounded-xl px-3  shadow-xl shadow-black/5">
              <div className="space-y-2">
                <h2 className="flex justify-between ">
                  <span className="font-bold"> Mobile App</span> <span>()</span>
                </h2>
                <p className="text-black/60">prepare sugma balls</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 justify-start col-span-3 w-full px-10">
          <p className="font-semibold">Statistics</p>
          <div className="flex gap-10 ">
            <div className="bg-black/5 px-3 rounded-lg py-5 w-fit">
              <h1>28 h</h1>
              <p className="text-sm font-[450] text-black/40 mt-3 ">
                Focus Time
              </p>
            </div>
            <div className="bg-black/5 px-3 rounded-lg py-5 w-fit">
              <h1>69</h1>
              <p className="text-sm font-[450] text-black/40 mt-3 ">
                Finished Goals
              </p>
            </div>
            <div className="bg-black/5 px-3 rounded-lg py-5 w-fit">
              <h1>Vent Chat</h1>
              <p className="text-sm font-[450] text-black/40 mt-3 ">2 h</p>
            </div>
          </div>
          <div className="flex gap-10 ">
            <div
              onClick={() => {
                router.push("/blogs");
              }}
              className="bg-black/5 px-3 cursor-pointer rounded-lg py-5 w-fit"
            >
              <h1>Blogs</h1>
              <p className="text-sm font-[450] text-black/40 mt-3 ">0 post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
