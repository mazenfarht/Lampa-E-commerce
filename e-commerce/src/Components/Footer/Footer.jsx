import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import img5 from '../../Img/888.png';
import img6 from '../../Img/777.png';

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
        <div className="container">
          {/* Add content here if needed */}
        </div>
      </div>
      <img src={img6} alt="" className="w-100 img-fluid" />

      <footer className="bg-black text-white py-5">
        <div className="container">
          <div className="row">
            {/* Pages Section */}
            <div className="col-sm-6 col-md-3 mb-4">
              <h5 className="text-uppercase mb-3">Pages</h5>
              <ul className="list-unstyled">
                <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/chatbot" className="text-white text-decoration-none">Chatbot</a></li>
                <li><a href="/product" className="text-white text-decoration-none">Products</a></li>
                <li><a href="/cart" className="text-white text-decoration-none">Cart</a></li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className="col-sm-6 col-md-3 mb-4">
              <h5 className="text-uppercase mb-3">Categories</h5>
              <ul className="list-unstyled">
                <li><a href="/furniture" className="text-white text-decoration-none">Furniture</a></li>
                <li><a href="/electronic" className="text-white text-decoration-none">Electronic</a></li>
                <li><a href="/homeproduct" className="text-white text-decoration-none">Home-Products</a></li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-sm-6 col-md-3 mb-4">
              <h5 className="text-uppercase mb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="text-white">Phone: 01128199928</li>
                <li className="text-white">Email: mazenmostafa2022@gmail.com</li>
                <li className="text-white">Address: 123 Street, City</li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="col-sm-6 col-md-3 mb-4">
              <h5 className="text-uppercase mb-3">Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/mazen.mostafe.9" className="text-white text-decoration-none"><FaFacebook size={20} /></a>
                <a href="https://www.instagram.com/mazenmostafa1710/" className="text-white text-decoration-none"><FaInstagram size={20} /></a>
                <a href="https://www.linkedin.com/in/mazen-mostafa-353102225/" className="text-white text-decoration-none"><FaLinkedin size={20} /></a>
                <a href="https://github.com/mazenfarht" className="text-white text-decoration-none"><FaGithub size={20} /></a>
              </div>
            </div>
          </div>

          <hr className="bg-light" />

          {/* Newsletter Subscription Section */}
          <div className="row text-center mb-4">
            <div className="col">
              <h5 className="text-uppercase mb-3">Subscribe to our Newsletter</h5>
              <form className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{ maxWidth: '300px' }}
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo and Copyright */}
        <div className="bg-black py-3 mt-4">
          <div className="container text-center">
            {/* <p className="mb-1">&copy; 2024 Lamba. All Rights Reserved.</p>
            <p className="mb-0">Designed by Mazen Mostafa</p> */}
          </div>
        </div>
        <img src={img5} className="w-100 img-fluid" alt="" />
      </footer>
    </>
  );
};

export default Footer;
