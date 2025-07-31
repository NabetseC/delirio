import React, { useState, useEffect } from 'react';

const words = [
  { text: 'boxing', gradient: ['#ff3d3d', '#b30000'] },           // bold reds
  { text: 'basketball', gradient: ['#ff9100', '#ff3d00'] },       // vibrant orange-red
  { text: 'golf', gradient: ['#00a152', '#006644'] },             // rich greens
  { text: 'taekwondo', gradient: ['#000000', '#434343'] },        // black to gray
  { text: 'kickboxing', gradient: ['#ff1744', '#8e0038'] },       // intense red-pink
  { text: 'muay thai', gradient: ['#004aad', '#002766'] },        // strong blues
  { text: 'soccer', gradient: ['#1b5e20', '#00c853'] },           // dark to neon green
  { text: 'tennis', gradient: ['#64dd17', '#1faa00'] },           // punchy lime green
  { text: 'baseball', gradient: ['#c62828', '#ad1457'] },         // red to deep magenta
  { text: 'volleyball', gradient: ['#ffab00', '#ff6f00'] },       // rich golden-orange
  { text: 'more', gradient: ['#6a1b9a', '#ab47bc'] }              // bold purples
];

function ChangingText() {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setOpacity(0);

      // Wait before changing word and fading back in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setOpacity(1);
      }, 300); // fade out duration
    }, 1500); // total cycle duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center"}}>
      <p
        style={{
          display: "inline",
          backgroundImage: `linear-gradient(90deg, ${words[index].gradient[0]}, ${words[index].gradient[1]})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          fontSize: "32px",
          fontWeight: "bold",
          lineHeight: "1.2",
          transition: "opacity 0.3s ease-in-out",
          opacity: opacity,
          marginTop: "1vh"
        }}
      >
        {words[index].text}
      </p>
    </div>
  );
}

export default ChangingText;
