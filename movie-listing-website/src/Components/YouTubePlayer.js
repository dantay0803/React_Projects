import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

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

export default function YouTubePlayer(props) {
  const youtubePlayerRef = useRef(null);
  const [loadYT, setLoadYT] = useState(null);
  const [onStateChange, setOnStateChange] = useState(null);
  const [show, setShow] = useState(false);

  const videoId = 'RuAQo97K-zE';

  useEffect(() => {
    setOnStateChange(onPlayerStateChange);

    setLoadYT(
      new Promise(resolve => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      })
    );
  }, []);

  const onPlayerStateChange = e => {
    if (typeof onStateChange === 'function') {
      onStateChange(e);
    }
  };

  const handleClose = () => {
    setShow(false);
    console.log(youtubePlayerRef);
  };

  const handleShow = () => {
    setShow(true);

    loadYT.then(YT => {
      const player = new YT.Player(youtubePlayerRef.current, {
        height: 390,
        width: 640,
        videoId,
        events: {
          onStateChange: onPlayerStateChange
        }
      });
    });
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <VideoModal centered show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <div className='youtubeComponent-wrapper'>
            <div ref={youtubePlayerRef} />
          </div>
        </Modal.Body>
      </VideoModal>
    </>
  );
}
