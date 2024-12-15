import React, { Component, createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Components/LayOut/MainLayout';
import Home from './Components/Home/Home';
import Chatbot from './Components/ChatBot/Chatbot';
import { ToastContainer } from 'react-toastify';
import Notfound from './Components/NotFound/Notfound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import SliderProducts from './Components/Product/SliderProducts';
import Checkout from './Components/Checkout/Checkout';
import Electronic from './Components/Product/Electronic';
import Homepro from './Components/Product/Homepro';
import Furniture from './Components/Product/Furniture';

// Auth Context
export const AuthContext = createContext();

// Cart Context
export const CartContext = createContext();

export default class App extends Component {
  state = {
    isLoggedIn: false,
    username: '', // Username for the logged-in user
    cartItems: [],
  };

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username'); // Debug localStorage
    console.log("Retrieved from localStorage:", { isLoggedIn, username });
  
    const savedCartItems = JSON.parse(localStorage.getItem('data'));
    if (isLoggedIn && username) {
      this.setState({ isLoggedIn, username });
    }
  
    if (savedCartItems) {
      this.setState({ cartItems: savedCartItems });
    }
  }
  

  // Auth functions
  login = (username) => {
    console.log("Logging in:", username); // Debug log
    this.setState({ isLoggedIn: true, username }, () => {
      console.log("State updated:", this.state); // Confirm state
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
    });
  };
  

  logout = () => {
    this.setState({ isLoggedIn: false, username: '' , cartItems: [] }, () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('data'); // Clear cart data from localStorage
    });
  };

  // Cart functions
  addItems = (item) => {
    const { cartItems } = this.state;
    const exist = cartItems.find((elm) => elm.id === item.id);

    if (exist) {
      const updatedCart = cartItems.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm
      );
      this.setState({ cartItems: updatedCart });
      this.saveCartToStorage(updatedCart);
    } else {
      const updatedCart = [...cartItems, { ...item, qty: 1 }];
      this.setState({ cartItems: updatedCart });
      this.saveCartToStorage(updatedCart);
    }
  };

  removeItems = (item) => {
    const { cartItems } = this.state;
    const exist = cartItems.find((elm) => elm.id === item.id);

    if (exist.qty > 1) {
      const updatedCart = cartItems.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty - 1 } : elm
      );
      this.setState({ cartItems: updatedCart });
      this.saveCartToStorage(updatedCart);
    }
  };

  removeProducts = (item) => {
    const updatedCart = this.state.cartItems.filter((elm) => elm.id !== item.id);
    this.setState({ cartItems: updatedCart });
    this.saveCartToStorage(updatedCart);
  };

  getTotalQty = () => {
    return this.state.cartItems.reduce((total, item) => total + item.qty, 0);
  };

  saveCartToStorage = (cartItems) => {
    localStorage.setItem('data', JSON.stringify(cartItems));
  };

  getTotalPrice =()=>{
    return this.state.cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  }
 
  

  // Calculate the total price of products in the cart
  

  routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Login /> },
        { path: 'home', element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'electronic', element: <Electronic /> },
        { path: 'homeproduct', element: <Homepro /> },
        { path: 'furniture', element: <Furniture /> },



        { path: 'chatbot', element: <Chatbot /> },
        { path: 'cart', element: <Cart/> },
        { path: 'product', element: <Product addItems={this.addItems} /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'sliderpro', element: <SliderProducts addItems={this.addItems} /> },

        { path: '*', element: <Notfound /> },
      ],
    },
  ]);

  render() {
    return (
      <>
        <ToastContainer theme="colored" />
        <AuthContext.Provider
          value={{
            isLoggedIn: this.state.isLoggedIn,
            username: this.state.username, // Provide username to context
            login: this.login,
            logout: this.logout,
          }}
        >
          <CartContext.Provider
            value={{
              cartItems: this.state.cartItems,
              addItems: this.addItems,
              removeItems: this.removeItems,
              removeProducts: this.removeProducts,
              totalQty: this.getTotalQty(),
              totalPrice : this.getTotalPrice(),

            }}
          >
            <RouterProvider router={this.routes} />
          </CartContext.Provider>
        </AuthContext.Provider>
      </>
    );
  }
}
