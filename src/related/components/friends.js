import React from 'react'
import './friends.css'

const Friends = props => (
    <div className="sidebarFriendsList">
        <h2 className="title">Playlist de amigos</h2>
        <ul className="playlistFriends">
        {
            props.friends.map(friend => (
                <li 
                    className="playlistFriends-item" 
                    key={friend.id}
                >
                    <a href="#">
                        <img
                            src={friend.cover}
                            alt={`image: ${friend.name}`}
                        />
                        <span>{friend.name}</span>
                    </a>
                </li>
            ))
        }
        </ul>
    </div>
)

export default Friends