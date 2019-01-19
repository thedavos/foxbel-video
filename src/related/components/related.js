import React from "react";
import logo from "./../../../images/logo.png";
import Playlist from "./playlist";
import Friends from "./friends";
import "./related.css";

function Related(props) {
  const { categories, friends } = props;
  return (
    <div className="Related">
      <img src={logo} width={250} />
      <Playlist categories={categories} />
      <Friends friends={friends} />
    </div>
  );
}

export default Related;
