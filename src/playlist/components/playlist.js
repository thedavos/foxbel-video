import React from "react";
import MediaContainer from "../containers/media";
import { Options } from "../../icons/components/figures";
import "./playlist.css";

function Playlist(props) {
  const { playlist, handleOpenModal, handleOpenMediaOptions } = props;
  return (
    <div className="Playlist">
      {playlist.map(mediaId => {
        return (
          <div className="Media-container" key={mediaId}>
            <MediaContainer id={mediaId} handleOpenModal={handleOpenModal} />
            <div className="Media-options" onClick={handleOpenMediaOptions}>
              <Options color="white" size={20} viewBox="0 0 192 512" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Playlist;
