import React from 'react';
import './video-player-controls.css'

const videoPlayerControls = props => (
    <div className="VideoPlayerControls">
        {
            props.children
        }
    </div>
)

export default videoPlayerControls;