import React, { useContext } from 'react';
import { CartContext } from '../../App'; // Import the CartContext
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, addItems, removeItems, removeProducts, totalQty, totalPrice } = useContext(CartContext); // Access the CartContext

  const navigate = useNavigate();

  const handelcheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-4">Cart Items</h3>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <h5>Your Cart is Empty</h5>
          </div>
        ) : (
          <>
            <table className="table table-bordered table-hover text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '70px', height: '70px' }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-sm btn-info me-2"
                          onClick={() => addItems(item)}
                        >
                          +
                        </button>
                        <span>{item.qty}</span>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => removeItems(item)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.qty).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeProducts(item)}
                      >
                        <i className="fa-solid fa-trash"></i> Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Total Row */}
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-end">
                    <h5>Total Products:</h5>
                  </td>
                  <td>{totalQty}</td>
                  <td>{`$${totalPrice.toFixed(2)}`}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={handelcheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        )}
      </div>
    </>
  );
}
