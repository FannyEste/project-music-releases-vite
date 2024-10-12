import React from "react";
import ArtistName from "./ArtistName";  // Import ArtistName component
import "./index.css"; 

const Album = ({ album }) => {
    return (
      <div className="album-card">
        {/* Album cover and controls */}
        <div className="image-container">
          <img className="album-image" src={album.images[1].url} alt={album.name} />
          
          {/* Controls - Play, Heart, Dots */}
          <div className="controls">
            <img className="heart-btn" src="./src/assets/icons/heart.svg" alt="Favorite" />
            <img className="play-btn" src="./src/assets/icons/play.svg" alt="Play" />
            <img className="dots-btn" src="./src/assets/icons/dots.svg" alt="More options" />
          </div>
        </div>
  
        {/* Album name */}
        <h3>
          <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">
            {album.name}
          </a>
        </h3>
  
        {/* Artists list with commas */}
        <div className="artists">
          {album.artists.map((artist, index) => (
            <span key={artist.id}>
              <ArtistName artist={artist} />
              {index < album.artists.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Album;