import React from 'react'
import { VolumeIcon, Mute } from '../../icons/components/figures'
import './volume.css'

const Volume = props => (
    <div 
        className="Volume"
    >
        <div
            onClick={ props.handleVolumeToggle }
        >
            {   
                props.volume ?
                <VolumeIcon 
                    color='white'
                    size={25}
                />
                :
                <Mute
                    color='white'
                    size={25}
                />
            }

        </div>
        <div className="Volume-range">
            <input 
                type="range"
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}
                value={props.volume}
            />
        </div>
    </div>
)

export default Volume