import React from "react";
import "./playlist.css";

const Playlist = props => (
  <div className="sidebarPlaylist">
    <h2 className="title">Mis Playlist</h2>
    <ol className="playlist">
      {props.categories.map(category => (
        <li className="playlist-item" key={category.get("id")}>
          <a href="">
            <span>{category.get("title")}</span>
          </a>
        </li>
      ))}
    </ol>
  </div>
);

export default Playlist;
