import React from 'react'

function UserPlaylist({ playlist }) {
    const { name, description, images, owner} = playlist;

    return (
        <div className='track-item'>
            <div className="album">
                <div className="album-image">
                    <img src={images[0].url} alt="" />
                </div>
                <div className="album-info">
                    <h2>{name}</h2>
                    <h4>{!description ? "By: "+owner.display_name : description}</h4>
                </div>
            </div>
        </div>
    )
}

export default UserPlaylist