import React from "react";
import ImageSlideshow from "./ImageSlideshow"; // Import the new component
import HomeFlexBox from "./HomeFlexBox"; // Import the new component

const Home = () => {
  return (
    <>
      <ImageSlideshow />
      {/* Add other content below the slideshow */}
      <HomeFlexBox />
    </>
  );
};

export default Home;
