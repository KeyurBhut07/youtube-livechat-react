import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jason = await data.json();
    setVideos(jason.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    // <div className="flex flex-wrap">
    //   {videos?.map((video) => (
    //     <VideoCard key={video.id} info={video} />
    //   ))}
    // </div>
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        {videos?.map((video) => (
          <div key={video.id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <Link to={`/watch?v=${video.id}`}>
              <VideoCard info={video} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
