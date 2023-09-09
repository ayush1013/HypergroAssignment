import React, { useEffect, useState } from "react";
import { getData, productType } from "../Data/getData";
import { type } from "@testing-library/user-event/dist/type";
import ReactPlayer from "react-player";
import VideoComponent from "./VideoComponent";
import Pagination from "./Pagination";

const Home = () => {
  const [data, setData] = useState<productType[]>([]);
  const [activeVideo, setActiveVideo] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const handlePage = (num: number) => {
    setPage((prev) => prev + num);
  };

  const handlePlay = (id: string) => {
    setActiveVideo(id);
  };

  useEffect(() => {
    getData(page)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <div className="grid grid-cols-1 mx-left w-1/4 mx-auto">
        {data.length > 0 &&
          data?.map((elem) => (
            <div
              key={elem.postId}
              className="rounded-2xl bg-white shadow-md p-2 mx-auto w-full mb-10 "
            >
              <VideoComponent
                elem={elem}
                handlePlay={handlePlay}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
              />
            </div>
          ))}
      </div>
      <Pagination handlePage={handlePage} page={page} />
    </div>
  );
};

export default Home;
