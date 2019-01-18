import React from "react";
import MediaContainer from "../containers/media";
import "./playlist.css";

function Playlist(props) {
  const { playlist, handleOpenModal } = props;
  return (
    <div className="Playlist">
      {playlist.map(mediaId => {
        return (
          <MediaContainer
            key={mediaId}
            id={mediaId}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </div>
  );
}

export default Playlist;
