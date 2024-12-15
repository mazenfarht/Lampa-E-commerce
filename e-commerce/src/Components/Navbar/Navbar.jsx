import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div
        id="textCarousel"
        className="carousel slide mx-auto"
        style={{ width: "100%", backgroundColor: "black" }}
        data-bs-ride="carousel"
        data-bs-interval="3000" // Adjusted interval to 3 seconds
      >
        {/* Slides */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center align-items-center text-center py-3">
              <h5 className="text-white px-2">
                Explore our latest collection of products, from gadgets to fashion! 
                Don't miss out on limited-time offers.
              </h5>
            </div>
          </div>

          {/* Other Slides */}
          {[
            "Hurry! Grab your favorite items at a discounted price before they're gone. Shop now and save big!",
            "Find out what our customers are loving! Check out the bestsellers and top-rated products in every category.",
            "Shop our exclusive collection of limited edition products. These items won't last long—get yours today!",
            "Discover the latest in tech and innovation. Our new smart gadgets are designed to make your life easier."
          ].map((text, index) => (
            <div key={index} className="carousel-item">
              <div className="d-flex justify-content-center align-items-center text-center py-3">
                <h5 className="text-white px-2">{text}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#textCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#textCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Navbar;
