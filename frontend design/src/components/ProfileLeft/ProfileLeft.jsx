import React from "react";
import FollowerCard from "../FollowerCard/FollowerCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";

const ProfileLeft = () => {
  return (
    <div className="profileSide">  {/* importing css class from profileSide.css  */}
      <LogoSearch/>
      <InfoCard/>
      <FollowerCard/>
    </div>
  );
};

export default ProfileLeft;
