import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchALlData, productType } from "../Data/getData";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState<productType[]>([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchALlData();
      setAllUsers(data);
    };
    getData();
  }, []);

  console.log(allUsers);

  return (
    <div className="bg-gray-600 py-8 sm:py-8 ">
      <div className="mx-auto  max-w-7xl gap-x-20 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our content creators
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            the driving force behind the videos you love. They bring their
            unique talents and creativity to every upload, shaping the app into
            a vibrant and dynamic community."
          </p>
        </div>
        {allUsers.length > 0 ? (
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
          >
            {allUsers?.map((elem, index) => (
              <Link key={elem.postId} to={`/creator/${elem.creator.name}`}>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={elem.creator.pic}
                      alt="img"
                    />
                    <div className="text-left">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-100">
                        {elem.creator.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-300">
                        {index % 4 == 0
                          ? "Bloger"
                          : index % 3 == 0
                          ? "Video Creater"
                          : "Content Creator"}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <img
            src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
            alt="Loading"
            className="opacity-20 w-60  mx-auto"
          ></img>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
