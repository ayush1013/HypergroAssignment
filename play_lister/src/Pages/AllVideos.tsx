import React, { useEffect, useState } from "react";
import { fetchALlData, productType } from "../Data/getData";
import Navbar from "../Components/Nabar";
import PlayOne from "../Components/PlayOne";

const AllVideos = () => {
  const [allVideos, setallVideos] = useState<productType[]>([]);
  const [activeVideo, setActiveVideo] = useState<string>("");
  const handlePlay = (id: string) => {
    setActiveVideo(id);
  };

  useEffect(() => {
    const getData = async () => {
      let data = await fetchALlData();
      setallVideos(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      {allVideos.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 mx-left w-[340px] mx-auto">
          {allVideos?.map((elem) => (
            <div
              key={elem.postId}
              className="rounded-2xl bg-white shadow-md p-2 mx-auto w-full mb-10 cursor-pointer "
            >
              <PlayOne
                elem={elem}
                handlePlay={handlePlay}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
              />
            </div>
          ))}
        </div>
      ) : (
        <img
          src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
          alt="Loading"
          className=" opacity-50 w-[500px] mx-auto"
        ></img>
      )}
    </div>
  );
};

export default AllVideos;
