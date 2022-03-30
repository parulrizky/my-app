import React from "react";

const TrackList = ({source, title, artist, album}) => {
    return (
        <div className= "track-item">
            <div className="album">
                <div className="album-image">
                    <img src={source} />
                </div>
                <div className="album-info">
                    <h2>{title}</h2>
                    <h3>{artist} - {album}</h3>
                    <button>select</button>
                </div>
            </div>
        </div>
    )
}

export default TrackList