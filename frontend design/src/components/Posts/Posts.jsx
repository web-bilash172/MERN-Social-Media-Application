import React from "react";
import "./Posts.css";
import { postsData } from "../../Data/postData";
import Post from "../Post/Post";
const Posts = () => {
  return (
    <div className="posts">
      {postsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
