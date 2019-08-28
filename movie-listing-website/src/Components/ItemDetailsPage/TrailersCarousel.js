import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel, Modal } from 'react-bootstrap';
import YouTubePlayer from '../YouTubePlayer';
import { IoIosPlayCircle } from 'react-icons/io';

const StyledCarousel = styled(Carousel)`
  max-width: 32.38rem;
  max-height: 22.5rem;
  margin: 0 auto;

  .carousel-item {
    overflow: hidden;
  }

  .carousel-caption {
    opacity: 0;
    width: 100%;
    height: 100%;
    font-size: 7.5rem;
    position: absolute;
    top: 50%;
    left: 42.5%;
    transform: translate(-50%, -50%);
  }

  .carousel-caption: hover {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
    cursor: pointer;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 57.5%;
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

export default function TrailersCarousel(props) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [videoSite, setVideoSite] = useState(null);
  const { trailerResults } = props;

  return (
    <>
      <StyledCarousel controls={false}>
        {trailerResults !== null
          ? trailerResults.results.slice(0, 3).map(trailer => (
              <Carousel.Item
                key={trailer.id}
                onClick={() => {
                  setVideoId(trailer.key);
                  setVideoSite('YouTube');
                  setShow(true);
                }}>
                <img
                  className='d-block'
                  src={
                    trailer.key !== undefined
                      ? `https://i.ytimg.com/vi/${trailer.key}/hqdefault.jpg`
                      : `https://via.placeholder.com/595x360?text=Image+not+available`
                  }
                  alt={`${trailer.name} - trailer`}
                />
                <Carousel.Caption>
                  <div className='centered'>
                    <IoIosPlayCircle />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          : null}
      </StyledCarousel>

      <VideoModal centered show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          {videoSite === 'YouTube' ? <YouTubePlayer videoId={videoId} /> : null}
        </Modal.Body>
      </VideoModal>
    </>
  );
}
