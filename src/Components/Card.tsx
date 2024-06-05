import { CgProfile } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import SelfHtml from "./SelfHtml";
import React from "react";
import { Post } from "./TypeNode";

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = props => {
  const {
    title,
    author,
    num_comments,
    url,
    score,
    ups,
    thumbnail,
    created_utc
  } = props.post;

  function timeSinceCreation(unixTimestamp: number): string {
    const currentTime: Date = new Date();
    const createdTime: Date = new Date(unixTimestamp * 1000);
    const timeDifference = currentTime - createdTime;

    // Calculate days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));

    // Determine the appropriate unit to display
    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    } else {
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    }
  }

  return (
    <div className="w-full bg-white shadow-sm rounded-lg overflow-hidden dark:shadow-white  dark:bg-[#101214]">
      <div className="flex items-center p-6">
        <CgProfile size={40} className="dark:text-[#eef1f3]" />
        <div className="ml-4">
          <h3 className="font-bold text-gray-900 dark:text-[#b8c4cc]">
            {author}
            <span className="text-xs text-gray-500 ml-2">
              {timeSinceCreation(created_utc)}
            </span>
          </h3>
          <p className="text-gray-700 dark:text-gray-400">
            @{author}{" "}
            <span className="text-gray-400 text-xs ml-1  dark:text-[#889388]">
              {score} karma
            </span>
          </p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-[#f1f3f5]">
          {title}
          <a
            href={url}
            className="text-blue-500 text-sm underline cursor-pointer ml-2 "
          >
            Link
          </a>
        </h3>
        {thumbnail !== "self" ? <img src={thumbnail} width={200} /> : ""}
        <div className="mt-4 text-gray-600">
          <SelfHtml post={props.post} />
        </div>
        <div className="flex mt-2 items-center gap-2 justify-start">
          <FaRegComment size={25} className="dark:text-[#eef1f3]" />
          <span className="dark:text-[#b8c4cc]">
            {num_comments}
          </span>
          <AiOutlineLike size={25} className="dark:text-[#eef1f3]" />
          <span className="dark:text-[#b8c4cc]">
            {ups}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
