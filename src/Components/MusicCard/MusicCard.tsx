import React from 'react';
import { Link } from "react-router-dom";
import { Image, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import {
  faHeart,
  faPlay,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import "./MusicCard.css"
import {RouteComponentProps} from 'react-router-dom'


function MusicCard(props: RouteComponentProps) {
    return (
        <div>
                  <Col className="myCard card trending mb-4" id="sampleCard">
        <div>
          <h6>
            <Link to={`/details/${id}`}>
              {albumTitle.length > 20
                ? albumTitle.slice(0, 20) + "..."
                : albumTitle}
            </Link>
          </h6>
          <h6>
            <Link to={`/artist/${artistId}/${artist}`}>
              {artist}
            </Link>
          </h6>
        </div>
        <Image
          src={img}
          className="card-img-top"
          alt="album cover"
        />

        <FontAwesomeIcon
          className="spotify-card-icon fab fa-spotify"
          icon={faSpotify}
        />
        <span className="overlay-icons">
          <FontAwesomeIcon
            className="heart far fa-heart fa-sm mr-3"
            icon={faHeart}
          />
          <FontAwesomeIcon
            className="play fas fa-play fa-1x mr-3"
            icon={faPlay}
          />
          <FontAwesomeIcon
            className="fa fa-ellipsis-h fa-sm"
            icon={faEllipsisH}
          />
        
        </span>
      </Col>

       </div>
    );
  }



export default MusicCard
