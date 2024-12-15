import React, { useContext } from 'react';
import { CartContext } from '../../App';
import Products from '../../store.js';

export default function Furniture() {
  const { addItems } = useContext(CartContext);

  // Filter only "electronics" category
  const furniture = Products.flat().filter(
    (product) => product.category === "furniture"
  );

  // Chunk array into groups of 4
  const chunkProducts = (products, size) => {
    const result = [];
    for (let i = 0; i < products.length; i += size) {
      result.push(products.slice(i, i + size));
    }
    return result;
  };

  const productChunks = chunkProducts(furniture, 4);

  return (
    <div className="container-fluid mt-5">
      <div className="text-center mb-4">
        <h1 className="text-uppercase font-weight-bold text-dark" style={{ letterSpacing: '2px' }}>
          Furnitures
        </h1>
        <p className="text-muted mt-2">
          Check out the latest Furniture
        </p>
      </div>

      {/* Display product chunks */}
      {productChunks.map((chunk, index) => (
        <div key={index} className="row mb-4">
          {chunk.map((value) => (
            <div key={value.id} className="col-md-3 mb-4">
              <div className="item text-center">
                <img
                  height={200}
                  className="w-50 mb-3"
                  src={value.image}
                  alt={value.title}
                />
                <h6 className="card-title text-truncate" title={value.title}>
                  {value.title}
                </h6>
                <p className="text-success">Price: ${value.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary text-white w-100"
                  onClick={() => addItems(value)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
