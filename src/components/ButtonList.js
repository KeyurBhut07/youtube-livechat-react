import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Live",
  "Song",
  "Gaming",
  "Socer",
  "Cricket",
  "Cooking",
  "Triler",
  "T-Series",
  "Arijit Singh",
  "Lo-Fi",
  "Javascript",
  "News",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((itm, index) => (
        <Button key={index + 1} name={itm} />
      ))}
    </div>
  );
};

export default ButtonList;
