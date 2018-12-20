import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formatedTime from '../../utils/formatted'
import ProgressBar from '../components/progress-bar';
import Volume from '../components/volume'
import FullScreen from '../components/full-screen';
import { Spinner } from '../components/spinner';

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        lastVolume: 0,
        volume: 1,
    }

    togglePlay = ev => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() {
        this.setState({
            pause: !this.props.autoplay
        })
    }

    handleLoadedMetaData = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    formattedTimeDuration = () => {
        return formatedTime(this.state.duration)
    }

    formattedCurrentTime = () => formatedTime(this.state.currentTime)

    handleVolumeChange = event => {
        this.setState({
            volume: event.target.value,
        })

        this.video.volume = event.target.value
        
    }

    handleVolumeToggle = event => {

        const { volume, lastVolume } = this.state

        this.setState({
            lastVolume: volume,
            volume: volume === 0 ? lastVolume : 0,
        })

        this.video.volume = lastVolume
    }

    handleFullScreenClick = event => {
        
        if (document.mozFullScreen) {
            document.mozCancelFullScreen();
        }
        else if(document.webkitIsFullScreen) {
            document.webkitExitFullscreen()
        }
        else if(this.player.mozRequestFullScreen) {
            this.player.mozRequestFullScreen()
        }
        else if(this.player.webkitRequestFullscreen) {
            this.player.webkitRequestFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render() {

        const { src, title } = this.props

        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title 
                    title= { title }
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.formattedTimeDuration()}
                        currentTime={this.formattedCurrentTime()}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumeToggle={this.handleVolumeToggle}
                        volume={this.state.volume}
                    />
                    <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video 
                    autoplay={this.props.autoplay}
                    src= { src }
                    pause={this.state.pause}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;