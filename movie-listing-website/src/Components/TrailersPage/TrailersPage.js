import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import BasicHeader from '../BasicHeader';
import YouTubePlayer from '../YouTubePlayer';
import { IoIosPlayCircle } from 'react-icons/io';

const Styles = styled.div`
  margin-top: 5rem;

  .trailerListing {
    margin-top: 2rem;
  }
`;

const StyledTrailerCard = styled(Card)`
  margin: 1rem;
  width: 32.5rem;
  height: 28rem;

  .card-img {
    min-width: 32.38rem;
    min-height: 22.5rem;
  }

  .card-title {
    color: var(--bert-black);
    text-align: center;
    font-family: 'Rubik', sans-serif;
  }

  .card-img-overlay {
    opacity: 0;
    bottom: 5.3rem;
  }

  .card-img-overlay: hover {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
    cursor: pointer;
  }

  .centered {
    font-size: 7.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const VideoModal = styled(Modal)`
  .modal-dialog,
  .modal-dialog-centered,
  .modal-content {
    background-color: rgba(0, 0, 0, 0);
    min-width: 640px;
  }

  .modal-body {
    padding: 0;
    margin: 0;
  }

  .youtubeComponent-wrapper {
    padding: 0;
    margin: 0;
  }
`;

export default function TrailersPage(props) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [videoSite, setVideoSite] = useState(null);

  const { title, releaseYear, posterPath, trailerResults } = props.location
    .state || {
    title: null,
    releaseYear: null,
    posterPath: null,
    trailerResults: null
  };

  const listTrailers = () => {
    let rows = [];

    if (trailerResults !== null) {
      for (let i = 0; i < trailerResults.results.length; i += 2) {
        rows.push(
          <Row className='justify-content-md-center'>
            <Col md='6'>
              <StyledTrailerCard
                className='text-white'
                key={trailerResults.results[i].id}
                onClick={() => {
                  setVideoId(trailerResults.results[i].key);
                  setVideoSite('YouTube');
                  setShow(true);
                }}>
                <Card.Img
                  src={
                    trailerResults.results[i].key !== null
                      ? `https://i.ytimg.com/vi/${trailerResults.results[i].key}/hqdefault.jpg`
                      : `https://via.placeholder.com/638x358?text=Image+not+available`
                  }
                  alt='Card image'
                />
                <Card.ImgOverlay>
                  <div className='centered'>
                    <IoIosPlayCircle />
                  </div>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title>{trailerResults.results[i].name}</Card.Title>
                </Card.Body>
              </StyledTrailerCard>
            </Col>
            {i + 1 < trailerResults.results.length ? (
              <Col md='6'>
                <StyledTrailerCard
                  className='text-white'
                  key={trailerResults.results[i + 1].id}
                  onClick={() => {
                    setVideoId(trailerResults.results[i + 1].key);
                    setVideoSite('YouTube');
                    setShow(true);
                  }}>
                  <Card.Img
                    src={
                      trailerResults.results[i + 1].key !== null
                        ? `https://i.ytimg.com/vi/${trailerResults.results[i + 1].key}/hqdefault.jpg`
                        : `https://via.placeholder.com/638x358?text=Image+not+available`
                    }
                    alt='Card image'
                  />
                  <Card.ImgOverlay>
                    <div className='centered'>
                      <IoIosPlayCircle />
                    </div>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title>
                      {trailerResults.results[i + 1].name}
                    </Card.Title>
                  </Card.Body>
                </StyledTrailerCard>
              </Col>
            ) : null}
          </Row>
        );
      }
    }

    return rows;
  };

  return (
    <>
      <Styles>
        <Container fluid>
          <BasicHeader
            title={title}
            releaseYear={releaseYear}
            posterPath={posterPath}
            navigateBack={props.history.goBack}
          />
          <Container className='trailerListing'>{listTrailers()}</Container>
        </Container>
      </Styles>

      <VideoModal centered show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          {videoSite === 'YouTube' ? <YouTubePlayer videoId={videoId} /> : null}
        </Modal.Body>
      </VideoModal>
    </>
  );
}
