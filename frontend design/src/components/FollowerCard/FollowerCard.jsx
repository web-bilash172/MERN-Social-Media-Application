import React from "react";
import { followers } from "../../Data/followersData";
import './FollowerCard.css'
const FollowerCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you?</h3>
      {followers.map((follower, id) => {
        return (
          <div className="followers">
            <div>
              <img src={follower.img} alt=""
               className="followerImg" />
               <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.userName}</span>
               </div>
            </div>
            <button className="button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerCard;
