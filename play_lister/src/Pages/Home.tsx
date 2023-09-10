import React, { useEffect, useState } from "react";
import { getData, productType } from "../Data/getData";
import { type } from "@testing-library/user-event/dist/type";
import VideoComponent from "../Components/VideoComponent";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";
import VideoList from "../Components/VideoList";

// const initialPage = JSON.parse(localStorage.getItem("page") || "" )

const Home = () => {
  const [data, setData] = useState<productType[]>([]);
  const [activeVideo, setActiveVideo] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const handlePage = (num: number) => {
    setPage((prev) => prev + num);
    localStorage.setItem("page", JSON.stringify(page));
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
      <Navbar />
      {data.length > 0 ? (
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
          {data?.map((elem) => (
            <VideoList elem={elem}/>
          ))}
        </div>
      ) : (
        <img
          src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
          alt="Loading"
          className=" opacity-50 w-[300px] mx-auto"
        ></img>
      )}
      <Pagination handlePage={handlePage} page={page} />
    </div>
  );
};

export default Home;



