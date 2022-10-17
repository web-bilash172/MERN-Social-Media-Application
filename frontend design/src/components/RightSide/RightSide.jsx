import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Commennt from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrenCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />

        <img src={Commennt} alt="" />
      </div>
      <TrendCard></TrendCard>
      <button className="button r-button" onClick={() => setModalOpened(true)}>
      
        Share
      </button>
      <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
    </div>
  );
};

export default RightSide;
