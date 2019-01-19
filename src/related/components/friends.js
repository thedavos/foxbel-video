import React from "react";
import "./friends.css";

const Friends = props => (
  <div className="sidebarFriendsList">
    <h2 className="title">Playlist de amigos</h2>
    <ul className="playlistFriends">
      {props.friends.map(friend => (
        <li className="playlistFriends-item" key={friend.get("id")}>
          <a href="#">
            <img
              src={friend.get("cover")}
              alt={`image: ${friend.get("name")}`}
            />
            <span>{friend.get("name")}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Friends;
