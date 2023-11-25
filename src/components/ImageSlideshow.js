import React, { useState, useEffect } from "react";
import "../styles/ImageSlideshow.css";

const ImageSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/image1.jpg", "/image5.png", "/image3.jpg", "/image7.jpg"];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Automatically transition to the next image every 3 seconds
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="image-slideshow">
      <button className="nav-button left" onClick={prevImage}>
        {"<"}
      </button>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <button className="nav-button right" onClick={nextImage}>
        {" >"}
      </button>
    </div>
  );
};

export default ImageSlideshow;
