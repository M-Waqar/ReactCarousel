import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

function App() {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        stopOnHover={false}
        dynamicHeight={false}
      >
        <div>
          <img alt="heading theme 1" src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img alt="heading theme 2" src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img alt="heading theme 3" src={img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
