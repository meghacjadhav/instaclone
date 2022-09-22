import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import PostView from "./Components/PostView/PostView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
function App() {
  const [userInfo, setUserInfo] = useState([]);
  const fetchData = async () => {
    await fetch("http://localhost:8080/all")
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/post-view" element={<PostView data={userInfo} />} />
          <Route path="/post-view" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
