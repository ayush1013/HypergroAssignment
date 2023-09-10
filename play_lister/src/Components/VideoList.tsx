import React from "react";
import { productType } from "../Data/getData";
import {Link} from "react-router-dom"

type elementType = {
  elem: productType;
};

const VideoList: React.FC<elementType> = ({ elem }) => {
  return (
    <div
      key={elem.postId}
      className="rounded-2xl bg-white shadow-md p-2  mx-auto w-full mb-10 h-[auto] sm:h-[300px] lg:h-[300px]"
    >
      <div className="flex mb-2">
        <div className="w-12 h-10 mt-2 rounded-full overflow-hidden">
          <img className="w-12 " src={elem.creator.pic} alt="img" />
        </div>
        <div className="text-left w-full ml-2 ">
          <p className="font-bold overflow-hidden h-[20px]">
            {elem.creator.name ? elem.creator.name : "User"}
          </p>
          <p className="overflow-hidden h-[50px] ">
            When Your GF is Way Too Beautiful 🤣
          </p>
        </div>
      </div>
      <Link to={`/play/${elem.postId}`} >
        <div className="relative overflow-hidden w-full h-auto lg:h-[200px] sm:h-[200px]">
          <img
            src={elem.submission.thumbnail}
            className="w-full h-full"
            alt="thumbnail"
          />
          <img
            src="icons8-play-100.png"
            alt="play"
            className="opacity-50 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Link>
    </div>
  );
};

export default VideoList;
