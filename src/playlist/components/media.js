import React from "react";
import "./media.css";

const Media = props => (
  <div className="Media" onClick={props.handleClick}>
    <div className="Media-cover">
      <img
        className="Media-image"
        src={props.cover}
        alt={props.alt}
        width={260}
        height={160}
      />
    </div>
    <h3 className="Media-title"> {props.title} </h3>
    <p className="Media-author"> {props.author} </p>
  </div>
);

export default Media;
