import React from "react";
import Detail from "./Detail";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar seprateImg = {props.img}/>
        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
      </div>
      <div className="bottom">
        <Detail detailInfo = {props.phone}/>
        <Detail detailInfo = {props.email}/>
      </div>
    </div>
  );
}

export default Card;
