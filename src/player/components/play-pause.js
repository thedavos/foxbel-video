import React from "react";
import { Play, Pause } from "../../icons/components/figures";
import "./play-pause.css";

const PlayPause = props => (
  <div className="PlayPause">
    {props.pause ? (
      <button onClick={props.handleClick}>
        <Play size={25} color="white" viewBox="0 0 32 32" />
      </button>
    ) : (
      <button onClick={props.handleClick}>
        <Pause size={25} color="white" viewBox="0 0 32 32" />
      </button>
    )}
  </div>
);

export default PlayPause;
