import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-full shadow-lg rounded-lg flex flex-col">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <div className="flex-grow flex flex-col justify-between">
        <ul className="mt-2">
          <li className="font-bold text-lg">{title}</li>
          <li className="text-sm text-gray-600">{channelTitle}</li>
          <li className="text-sm text-gray-600">
            {statistics.viewCount} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
