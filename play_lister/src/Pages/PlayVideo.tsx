import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Nabar";
import { fetchALlData, getData, productType } from "../Data/getData";
import { useParams } from "react-router-dom";
import VideoComponent from "../Components/VideoComponent";
import VideoList from "../Components/VideoList";
import AllVideoList from "../Components/AllVideoList";
import { Link } from "react-router-dom";

// let initialVideos = JSON.parse(localStorage.getItem("allData") ?? "");
const PlayVideo = () => {
  const [allVideos, setallVideos] = useState<productType[]>([]);
  const { id } = useParams();
  const [videoData, setVideoData] = useState<productType[]>([]);
  const [activeVideo, setActiveVideo] = useState<string>("");
  const [comment, setComment] = useState<number>(0);
  const [like, setLike] = useState<boolean>(false);
  const [textOfComment, setTextOfComment] = useState<string>("");
  const [commentArr, setCommentArr] = useState<string[]>([""]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchALlData();
      setallVideos(data);
    };
    getData();
  }, [id]);
  //   console.log(id)

  useEffect(() => {
    if (allVideos.length > 0) {
      let data = allVideos.filter((el) => el.postId === id);
      console.log(data);
      setVideoData(data);
      setComment(data[0].comment.count);
    }
  }, [allVideos.length, id]);

  const handlePlay = (id: string) => {
    setActiveVideo(id);
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCommentArr([""]);
    setTextOfComment("")
  };
  //   console.log("Text is", textOfComment);

  const handleComment = () => {
    setCommentArr([...commentArr, textOfComment]);
    setComment((prev) => prev + 1);
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center  gap-8 pt-20 border-black border w-screen">
        {videoData.length === 0 ? (
          <img
            src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
            alt="Loading"
            className=" opacity-50 md:w-[70%] lg:w-[70%] "
          ></img>
        ) : (
          <div className=" md:w-[70%] lg:w-[70%] cursor-pointer ">
            <VideoComponent
              elem={videoData[0]}
              handlePlay={handlePlay}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
            />

            {/* Like And Comments */}

            <div className="flex justify-between p-2 w-full border-b border-gray-300 ">
              <div
                className="flex justify-between"
                onClick={() => setLike(!like)}
              >
                <img
                  src="https://img.icons8.com/?size=48&id=33479&format=png"
                  alt="Like"
                  className="w-6 h-6 mr-2"
                />
                <p className={like ? "text-indigo-600" : "text:black"}>
                  {like
                    ? videoData[0].reaction.count + 1
                    : videoData[0].reaction.count}
                  Likes
                </p>
              </div>
              <div>
                <p>{comment} Comments</p>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-4 mt-2">
              <input
                value={textOfComment}
                onChange={(e) => setTextOfComment(e.target.value)}
                className="w-[80%] mr-[10px] px-3 py-2 border border-gray-300 rounded"
                placeholder="Write a comment..."
              />
              <button
                onClick={handleComment}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Post Comment
              </button>
            </div>

            {/* AllComments */}
            <div className="text-left bg-gray-200 p-2 ">
              {commentArr?.map(
                (el, index) =>
                  index != 0 && (
                    <div className="flex mb-2">
                      <div className="w-12 h-10 mt-2 rounded-full overflow-hidden">
                        <img
                          className="w-12 "
                          src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="text-left w-full ml-2 ">
                        <p className="font-bold">Playlister User</p>
                        <p>{el}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
        <div className=" md:w-[25%] lg:w-[25%]">
          {allVideos.length > 0 ? (
            <div className="grid mt-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2 mx-auto">
              {allVideos?.map((elem) => (
                <Link
                  to={`/play/${elem.postId}`}
                  key={elem.postId}
                  onClick={handleScroll}
                >
                  <AllVideoList elem={elem} />
                </Link>
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
      </div>
    </div>
  );
};

export default PlayVideo;

{
  /* */
}
