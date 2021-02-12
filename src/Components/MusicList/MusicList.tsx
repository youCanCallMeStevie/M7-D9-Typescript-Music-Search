import React from 'react';
import { Row, Col, Spinner } from "react-bootstrap";
import MusicCard from '../MusicCard/MusicCard';
import {RouteComponentProps} from 'react-router-dom'



function MusicList(props: RouteComponentProps) {
    return (
        <div>
        <h4 style={{ color: "whitesmoke" }}>{title}</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center justify-content-center">
          {loading ? (
            [0, 1, 2, 3, 4, 5].map((item) => (
              <Col key={item}>
                <Spinner animation="border" variant="light" />
              </Col>
            ))
          ) : (
            <>
              {albums?.map((album) => (
                <MusicCard
                  albumTitle={album.title_short}
                  img={album.album.cover}
                  artist={album.artist.name}
                  trackName={album.title_short}
                  id={album.album.id}
                  artistId={album.artist.id}
                />
              ))}
            </>
          )}
        </Row>
      </div>
    )
}

export default MusicList;
