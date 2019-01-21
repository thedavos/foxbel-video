import React from "react";
import { Fullscreen } from "../../icons/components/figures";
import "./full-screen.css";

const FullScreen = props => (
  <div className="FullScreen" onClick={props.handleFullScreenClick}>
    <Fullscreen size={25} color="white" viewBox="0 0 32 32" />
  </div>
);

export default FullScreen;
