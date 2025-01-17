import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-56">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Movie</li>
        <li>Gmaing</li>
        <li>Sport</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-7">Watch Later</h1>
      <ul>
        <li>Movie</li>
        <li>Gmaing</li>
        <li>Sport</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
