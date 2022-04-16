import React from 'react';

import './css/UserPlaylist.css'

function UserPlaylist({ playlist }) {
    const { name, description, images, owner} = playlist;

    return (
        <div className='track-item-playlist'>
            <div className="album-playlist">
                    <img className="thumbnail" src={images[0].url} alt="" />
                <div className="album-body">
                <div>
                    <h2 className="album-info-playlist">{name}</h2>
                    <div>
                    <span className='description'>{!description ? "By: "+owner.display_name : description}</span>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UserPlaylist