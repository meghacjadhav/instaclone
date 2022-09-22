import React from "react";
import "./PostView.css";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import Header from "../Header/Header";
const PostView = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="mainPostView">
        <Header />
        {data.result &&
          data.result.reverse().map((item, index) => (
            <div key={index} className="postViewContainer">
              <p id="firstCont">
                <span id="name">{item.name}</span>
                <span id="location">{item.location}</span>
                <span id="dots">
                  <BsThreeDots />
                </span>
              </p>
              <img
                src={`http://localhost:8080/Images/${item.PostImage}`}
                alt={`${item.PostImage}`}
                id="secCont"
              />
              <p id="thirdCont">
                <span id="heart">
                  <BsHeart />
                </span>
                <span id="rocket">
                  <IoMdPaperPlane />
                </span>
                <span id="date">{item.date}</span>
              </p>
              <p id="likes">{item.likes} likes </p>
              <p id="desc">{item.description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default PostView;
