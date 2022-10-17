//this is home component

import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <ProfileSide></ProfileSide>
      <PostSide></PostSide>
      <RightSide></RightSide>
    </div>
  );
};

export default Home;
