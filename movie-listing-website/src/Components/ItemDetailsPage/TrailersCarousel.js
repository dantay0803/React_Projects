import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Carousel, Modal } from 'react-bootstrap';
import YouTubePlayer from '../YouTubePlayer';

const StyledCarousel = styled(Carousel)`
  .carousel-inner > .carousel-item > img {
    margin: 0 auto;
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
          ? trailerResults.results.map(trailer => (
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
