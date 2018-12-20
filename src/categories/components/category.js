import React from 'react'
import Playlist from '../../playlist/components/playlist'
/* import { Play, Volume, Pause, Fullscreen } from '../../icons/components/figures' */
import './category.css'

function Category(props) {

    const { description, title, playlist, handleOpenModal } = props

    return (
        <div className="Category">
            <p className="Category-description"> { description } </p>
            <h3 className="Category-title"> { title } </h3>
            <Playlist 
                playlist={ playlist}
                handleOpenModal={ handleOpenModal }
            />
        </div>
    )
}

export default Category