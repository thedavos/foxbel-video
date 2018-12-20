import React from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props) {
    const { playlist, handleOpenModal } = props

    return (
        <div className="Playlist">
            {
                playlist.map(item => {
                    return (
                        <Media {...item} key={item.id} handleOpenModal={handleOpenModal}/>
                    )
                })
            }
        </div>
    )
}

export default Playlist