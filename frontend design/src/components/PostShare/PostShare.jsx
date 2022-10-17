import React from "react";
import "./PostShare.css";
import profileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
import { useRef } from "react";

const PostShare = () => {
  // states
  const [image, setImage] = useState(null);
  const [videos, setVideo] = useState(null);

  const imageRef = useRef();
  const videoRef = useRef();

  // function for set image
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  // function for set video file
  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let video = event.target.files[0];
      setVideo({
        videos: URL.createObjectURL(video),
      });
    }
  };
  return (
    <div className="postShare">
      <img src={profileImg} alt="" />
      <div>
        <input type="text" placeholder="What's on your mind?" />
        {/* post options like image,event,video,location etc  */}
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Image
          </div>
          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button">Share</button>

          {/* showing image  */}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>

          {/* showing video file  */}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myVideo"
              ref={videoRef}
              onChange={onVideoChange}
            />
          </div>
        </div>
        {/* posting image file  */}
        {image && (
          <div className="imagePreview">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
        {/* playing video file  */}
        {videos && (
          <div>
            <UilTimes onClick={() => setVideo(null)} />
            <video loop autoPlay>
              <source src={videos.videos} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
