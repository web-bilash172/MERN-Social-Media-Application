import React from "react";
import coverImg from "../../img/cover.jpg";
import profileImg from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className="profileCard">
      {/* cover photo ,profile picture and name section  */}
      <div className="profileImage">
        <img src={coverImg} alt="" />
        <img src={profileImg} alt="" />
      </div>
      <div className="profileName">
        <span>Jenifar Lorrege</span>
        <span>Junior React Developer</span>
      </div>
      {/* follow status section  */}
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>4537</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>2344</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {
        profilePage?'': <span>My Profile</span>
      }
    
    </div>
  );
};

export default ProfileCard;
