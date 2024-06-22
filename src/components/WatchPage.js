import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closMenu());
  }, []);
  return (
    <>
      <div className="flex-col w-full">
        <div className="px-5 flex w-full">
          <div>
            <iframe
              width="1100"
              height="550"
              src={`https://www.youtube.com/embed/${searchParams.get(
                "v"
              )}?autoplay=1`}
              title="Youtube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchPage;
