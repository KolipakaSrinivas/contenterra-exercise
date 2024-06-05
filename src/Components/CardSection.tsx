import React from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { CardPropsTypes, RedditPost } from "./TypeNode";

const CardSection: React.FC<CardPropsTypes> = ({ loading, posts }) => {
  return (
    <div className="absolute  ml-auto mr-auto  md:left-60  w-full md:w-[75%] p-3 right-0   bg-slate-100 flex gap-4 flex-col dark:bg-[#0e1113]">
      <div className="bg-slate-300 h-[5rem] p-10 mb-10 rounded-md relative dark:bg-[#222628]  ">
        <img
          className="absolute w-[5rem] top-10 left-5 bg-blue-800 rounded-full border-slate-200 border-2 dark:border-gray-950"
          src="https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png"
          alt=""
        />
        <h1 className="absolute font-medium text-2xl top-[6rem] left-[7rem] dark:text-[#f2f2f2]">
          r/reactjs
        </h1>
      </div>
      <hr className=" border-1 border-slate-600 " />
      {loading
        ? <SkeletonCard />
        : posts.map((post: RedditPost, index: number) =>
            <Card key={index} post={post.data} />
          )}
    </div>
  );
};

export default CardSection;
