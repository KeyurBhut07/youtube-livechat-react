import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { YOUTUBE_SERACH_API } from "../utils/constant";
import { cacheResult } from "../store/searchSlice";

const Header = () => {
  const [serachQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[serachQuery]) {
        setSuggestion(searchCache[serachQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [serachQuery]);

  const getSearchSuggestions = async () => {
    console.log("Call API  ", serachQuery);
    const response = await fetch(YOUTUBE_SERACH_API + serachQuery);
    const data = await response.json();
    setSuggestion(data[1]);
    dispatch(cacheResult({ [serachQuery]: data[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mx-2 cursor-pointer"
          alt="hamburger"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFU7aWIxBgnNrlC7EB7TiUtLw4obRO-NZamWpHUt4RA&s"
        />
        <img
          className="h-10 pb-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoM6qC8dsS5mGtnuIipf3JYtlzTCyMh3uXw&s"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-600 p-2 rounded-l-full"
            value={serachQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-600 p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[36rem] shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="shadow-sm rounded-sm py-2 hover:bg-gray-100"
                >
                  <span className="pr-2">🔍</span> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Header;
