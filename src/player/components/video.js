import React, { Component } from 'react';
import './video.css'

export default class Video extends Component {
    
    togglePlay() {
        if (this.props.pause) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    setRef = el => {
        this.video = el;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay();
        }
    }
    
    render() {

        const {
            handleLoadedMetaData,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;

        return (
            <div className='Video'>
                <video
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetaData}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                />
            </div>
        )
    }
}