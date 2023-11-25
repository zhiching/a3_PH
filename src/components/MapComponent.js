import React from "react";

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        title="Pet Heaven Map"
        id="gmap_canvas"
        width="380"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=380&amp;height=400&amp;hl=en&amp;q=50%20Sungei%20Tengah%20Road,%20Singapore%20699012+(Pet%20Heaven)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
