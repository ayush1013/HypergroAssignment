import React from "react";
import { productType } from "../Data/getData";
import {Link} from "react-router-dom"

type elementType = {
  elem: productType;
};

const AllVideoList: React.FC<elementType> = ({ elem }) => {
  return (
    <div
      key={elem.postId}
      className="rounded-2xl bg-white shadow-md p-2  mx-auto w-[80%] mb-4 h-[auto] sm:h-[200px] lg:h-[200px]"
    >
        <div className="relative overflow-hidden w-full h-auto lg:h-[100px] sm:h-[100px]">
          <img
            src={elem.submission.thumbnail}
            className="w-full h-auto"
            alt="thumbnail"
          />
          <img
            src="iconsplay.png"
            alt="play"
            className="opacity-50 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

      <div className="flex mt-2">
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
    </div>
  );
};

export default AllVideoList;
