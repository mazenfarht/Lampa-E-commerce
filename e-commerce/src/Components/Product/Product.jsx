import React, { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../../App';

import Products from '../../store.js';

export default function Product(props) {
  // console.log('Props in Product:', props); // Check for addItems in props
  const { cartItems, addItems, removeItems, removeProducts, totalQty } = useContext(CartContext);

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-90">
          <div className="row text-center mt-5 pt-5">
      {Products.map((Productvalue, index) => {
        return Productvalue.map((value) => {
          return (
            <div key={value.id} className="col-md-4 my-4">
              <div className="item">
                
                <img height={320} className="w-50" src={value.image} alt={value.title} />
                
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-truncate mt-4 mb-3" title={value.title}>
                    {value.title}
                  </h6>
                  <div className="mt-auto">
                    <p className="card-text text-muted mb-1">
                      Category: <span className="text-primary">{value.category}</span>
                    </p>
                    <p className="mb-2">
                      Price: <span className="text-success">${value.price.toFixed(2)}</span>
                    </p>
                    <p className="text-warning">
                      Rating: <span>{value.rating.rate} ⭐</span>
                    </p>
                  </div>
                  </div>

                <button
                  className="btn btn-primary text-white w-100"
                  onClick={() => {
                    props.addItems(value); // Safely call the function
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        });
      })}
    </div>
          </div>
          {/* <div className="col-md-3">
            <Cart totalQty={totalQty} removeProducts={removeProducts} removeItems={removeItems} addItems={addItems} cartItems={cartItems} />
          </div> */}
        </div>
    </div>
    
  );
}

