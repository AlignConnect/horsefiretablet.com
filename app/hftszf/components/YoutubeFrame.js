"use client";
import React, { useEffect, useState, useRef } from "react";

const YoutubeFrame = ({ vid }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {load ? (
        <iframe
          className="!w-[100%] !mx-auto h-[210px] md:h-[500px] rounded-md"
          src={`https://www.youtube.com/embed/${vid}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default YoutubeFrame;
