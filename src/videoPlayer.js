import React, { useRef, useEffect, useState } from 'react';
import demoVideo from "./demoVid.mp4";
import './PageStyle.css';


function VideoPlayer() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay blocked — fallback: mute and retry
          video.muted = true;
          setIsMuted(true);
          video.play();
        });
      }
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="video-container">
      <video
        id="demo"
        src={demoVideo}
        className="video"
        autoPlay
        loop
        playsInline
        ref={videoRef}
      />
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}

export default VideoPlayer;