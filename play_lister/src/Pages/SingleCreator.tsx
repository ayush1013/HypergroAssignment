import React, { useEffect, useState } from "react";
import { fetchALlData, getData, productType } from "../Data/getData";
import { type } from "@testing-library/user-event/dist/type";
import VideoComponent from "../Components/VideoComponent";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";
import VideoList from "../Components/VideoList";
import {useParams} from "react-router-dom"

// const initialPage = JSON.parse(localStorage.getItem("page") || "" )

const SingleCreator = () => {
  const [data, setData] = useState<productType[]>([]);
  const [videoData, setVideoData] = useState<productType[]>([]);
  const [activeVideo, setActiveVideo] = useState<string>("");
  const {name} = useParams()

  const handlePlay = (id: string) => {
    setActiveVideo(id);
  };

  useEffect(() => {
    const getData = async () => {
        let data = await fetchALlData();
        setData(data);
      };
      getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      let temp = data.filter((el) => el.creator.name === name);
      console.log(data);
      setVideoData(temp);
    }
  }, [data.length]);

  console.log(data,name);

  return (
    <div>
      <Navbar />
      {videoData.length > 0 ? (
        <div className="px-20 grid mt-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto">
          {videoData?.map((elem) => (
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
    </div>
  );
};

export default SingleCreator;



