import React from "react";
import "./Form.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="mainform">
        <Header />
        <div id="main_form">
          <form
            encType="multipart/form-data"
            className="postDetails"
            onSubmit={(e) => {
              e.preventDefault();
              const userData = new FormData();
              userData.append("description", e.target.description.value);
              userData.append("name", e.target.name.value);
              userData.append("location", e.target.location.value);
              userData.append("date", e.target.date.value);
              userData.append("PostImage", e.target.PostImage.files[0]);
              userData.append("likes", Math.ceil(Math.random() * 100));
              console.log(userData);
              fetch(`http://localhost:8080/add`, {
                method: "POST",
                body: userData,
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  window.location.reload(true);
                });
              navigate("/post-view");
            }}
          >
            <input type="file" className="custom-file-input" name="PostImage" />
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Location" name="location" />
            <input type="text" placeholder="Description" name="description" />
            <input type="text" placeholder="Date" name="date" />
            <button id="postbtn" type="submit">
              POST
            </button>
          </form>
          <br />
        </div>
      </div>
    </>
  );
};

export default Form;
