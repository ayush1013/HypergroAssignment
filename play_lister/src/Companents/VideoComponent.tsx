import React, { useRef, useEffect } from "react";
import { productType } from "../Data/getData";

type VideoComponentProps = {
  elem: productType;
  handlePlay: (id: string) => void;
  activeVideo: string;
  setActiveVideo: React.Dispatch<React.SetStateAction<string>>;
};

const VideoComponent: React.FC<VideoComponentProps> = ({
  elem,
  handlePlay,
  activeVideo,
  setActiveVideo,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (postId: string) => {
    setActiveVideo(postId);
    handlePlay(postId);
  };

  useEffect(() => {
    if (activeVideo !== elem.postId && videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeVideo, elem.postId]);

  return (
    <div className="w-full">
      <div className="flex mb-2">
        <div className="w-12 h-10 mt-2 rounded-full overflow-hidden">
          <img className="w-12 " src={elem.creator.pic} alt="img" />
        </div>
        <div className="text-left w-full ml-2 ">
          <p className="font-bold">{elem.creator.name}</p>
          <p>When Your GF is Way Too Beautiful 🤣</p>
        </div>
      </div>
      <video
        ref={videoRef}
        controls
        poster={elem.submission.thumbnail}
        onClick={() => handleVideoClick(elem.postId)}
        onPlay={() => handleVideoClick(elem.postId)}
        style={{
          width: "100%",
          height: "82vh",
        }}
      >
        <source src={elem.submission.mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
