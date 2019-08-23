import React, { useState, useEffect, useRef } from 'react';

let loadYT;

export default function YouTubePlayer(props) {
  const youtubePlayerRef = useRef(null);
  const [onStateChange, setOnStateChange] = useState(null);

  const { videoId } = props || '';

  useEffect(() => {
    setOnStateChange(onPlayerStateChange);

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    else {
      loadVideo();
    }
  }, [videoId]);

  const loadVideo = () => {
    let player = new window.YT.Player(youtubePlayerRef.current, {
      height: 390,
      width: 640,
      videoId,
      events: {
        onStateChange: onPlayerStateChange
      }
    });
  };

  const onPlayerStateChange = e => {
    if (typeof onStateChange === 'function') {
      onStateChange(e);
    }
  };

  return (

    <div className='youtubeComponent-wrapper'>
      <div ref={youtubePlayerRef} />
    </div>

  );
}


// https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution