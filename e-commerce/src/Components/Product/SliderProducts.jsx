import React from 'react';
import Products from '../../store.js';

export default function SliderProducts(props) {
  const mensClothing = Products.flat().filter(
    (product)=> product.category==="men's clothing"
  )
  // Function to chunk the products array into groups of 3
  const chunkProducts = (products, size) => {
    const result = [];
    for (let i = 0; i < products.length; i += size) {
      result.push(products.slice(i, i + size)); // Create a new chunk of size 'size' (3 in this case)
    }
    return result;
  };

  // Chunk products into groups of 3
  const productChunks = chunkProducts(mensClothing, 3); // Flatten products array and split into chunks of 3

  return (
    // The main carousel wrapper with slide effect
    <div id="productCarousel" className="carousel slide mt-5 pt-5" style={{
        border: '2px solid #f3f3f3', // Border around the carousel
        borderRadius: '8px',      // Rounded corners for the carousel
        padding: '10px',          // Padding around the carousel
        backgroundColor: '#fff',  // White background color for the carousel
      }} data-bs-ride="carousel">
        {/* Stylish Header */}
      <div className="text-center mb-4">
        <h1 className="text-uppercase font-weight-bold text-dark" style={{ letterSpacing: '2px' }}>
        Men's Clothing        </h1>
        <p className="text-muted mt-2">
        Check out the latest men's clothing in our store
        </p>
      </div>
      <div className="carousel-inner">
        {/* Loop through the product chunks and create a carousel item for each */}
        {productChunks.map((chunk, index) => {
          return (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`} // 'active' class for the first item
            >
              {/* Row that will hold 3 products per slide */}
              <div className="row justify-content-center">
                {chunk.map((value) => {
                  return (
                    // Each product takes up one-third of the row (col-md-4)
                    <div key={value.id} className="col-md-4 my-4 text-center">
                      <div className="item">
                        {/* Product image */}
                        <img
                          height={200}
                          className="w-50 d-block mx-auto"
                          src={value.image}
                          alt={value.title}
                        />
                        <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-truncate mt-4 mb-3" title={value.title}>
                    {value.title}
                  </h6>
                  <div className="mt-auto">
                    
                    <p className="mb-2">
                      Price: <span className="text-success">${value.price.toFixed(2)}</span>
                    </p>
                    <p className="text-warning">
                      Rating: <span>{value.rating.rate} ⭐</span>
                    </p>
                  </div>
                  </div>
                  
                        {/* Add to cart button */}
                        <button
                          className="btn btn-primary text-white w-50"
                          onClick={() => {
                            props.addItems(value); // Add product to the cart
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel control buttons */}
      <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#productCarousel"
  data-bs-slide="prev"
  style={{
    backgroundColor: 'transparent', // Make background transparent
    border: 'none', // Remove default border
    
  }}
>
  <span
    className="carousel-control-prev-icon"
    aria-hidden="true"
    style={{
      backgroundColor: 'black', // Set arrow icon color to black
      width: '30px',  // Optional: Adjust size of the arrow icon
      height: '30px',
      border: '0px solid #fff', // Optional: white border for contrast
        borderRadius: '50%',// Optional: Adjust size of the arrow icon
    }}
  ></span>
  <span className="visually-hidden">Previous</span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#productCarousel"
  data-bs-slide="next"
  style={{
    backgroundColor: 'transparent', // Make background transparent
    border: 'none', // Remove default border
  }}
>
  <span
    className="carousel-control-next-icon"
    aria-hidden="true"
    style={{
      backgroundColor: 'black', // Set arrow icon color to black
      width: '30px',  // Optional: Adjust size of the arrow icon
      height: '30px',
      border: '0px solid #fff', // Optional: white border for contrast
        borderRadius: '50%', // Optional: Adjust size of the arrow icon
    }}
  ></span>
  <span className="visually-hidden">Next</span>
</button>

    </div>
  );
}
