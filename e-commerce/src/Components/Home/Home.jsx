import React, { useContext, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { CartContext } from '../../App';
import SliderProducts from '../Product/SliderProducts';
import '../Home/Home.css'
import Electronic from '../Product/Electronic';
import img1 from '../../Img/4.png'
import img2 from '../../Img/home.png'
import img3 from '../../Img/6.png'
import { useNavigate } from 'react-router-dom';



export default function Home() {
  
  const { cartItems, addItems, removeItems, removeProducts, totalQty } = useContext(CartContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  const navigate =useNavigate();
  
  const nav = () => {
    navigate('/electronic');
  };
  const nav2 = () => {
    navigate('/homeproduct');
  };
  const nav3 = () => {
    navigate('/furniture');
  };

  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {['0', '1', '2', '3', '4', '5'].map((index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={activeIndex === parseInt(index) ? 'active' : ''}
        aria-label={`Slide ${parseInt(index) + 1}`}
        onClick={() => handleSlideChange(parseInt(index))}
      />
    ))}
  </div>
  <div className="carousel-inner">
    {['https://f.nooncdn.com/mpcms/EN0003/assets/806f2a78-1577-42fd-a8be-e5f5099c9045.png?format=avif', 
       'https://f.nooncdn.com/mpcms/EN0003/assets/3ebc5d30-8f05-49a2-9df5-0f7f14b29153.png?format=avif', 
       'https://f.nooncdn.com/mpcms/EN0003/assets/13f80f53-3446-4807-9751-b5e8a7e814ed.png?format=avif',
       'https://f.nooncdn.com/mpcms/EN0003/assets/49bcef68-86d4-4da3-bc19-1d12b840a335.png?format=avif',
       'https://f.nooncdn.com/mpcms/EN0003/assets/bc5424aa-d22d-4e61-8801-752b1db450b4.png?format=avif',
       'https://f.nooncdn.com/ads/banner-1440x1440/en_dk_eg-hero-01%20(8).1728545971.8773131.png?format=avif'].map((src, index) => (
      <div className={`carousel-item ${activeIndex === index ? "active" : ""}`} key={index}>
        <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ objectFit: "cover", height: "50vh" }} />
      </div>
    ))}
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <SliderProducts addItems={addItems}/>
      <div className="container-fluid p-0">
        <img src='https://f.nooncdn.com/ads/banner-1440x1440/display%20desktop---.1731005862.3564265.png?format=avif' alt='Banner' className='w-100'></img>
      </div>
      {/* Organizers */}
      
      <div className="logo-marquee" style={{
        border: '2px solid #f3f3f3', // Border around the carousel
        borderRadius: '8px',      // Rounded corners for the carousel
        padding: '10px',          // Padding around the carousel
        backgroundColor: '#fff',  // White background color for the carousel
      }}>
      <div className="text-center mb-4">
        <h1 className="text-uppercase font-weight-bold text-dark" style={{ letterSpacing: '2px' , padding: '30px' }}>
          Organizers
        </h1>
        
      </div>
      <div className="logos-wrapper">
        
        {/* Non-clickable logos */}
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/CCI-Logo-Eng-Arb.png" alt="CCI Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/ceramica-focus.png" alt="Ceramica Focus Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/Compasses400.png" alt="Compasses Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/Dailynewwws.png" alt="Daily News" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/dEfORUM-1.png" alt="Deforum Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/HEHOME-FINAL-1.png" alt="HEHOME Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/DeZeen.png" alt="DeZeen Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/LTD_Brandmark_RGB.400020.png" alt="LTD Brandmark" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/NA.png" alt="NA Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/OFFICIAL.png" alt="Official Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/onsite3-1.png" alt="Onsite Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/REALTY.png" alt="RC Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/tdj.png" alt="TDJ Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/9-2.png" alt="9-2 Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/ac.png" alt="AC Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/AinDubai.png" alt="Ain Dubai" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/Al-Bait.png" alt="Al-Bait" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/asianglass.png" alt="Asian Glass" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/cairowest.png" alt="Cairo West" />

        {/* Clickable logos */}
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/RUSSIA-EXPO.png" alt="Russia Expo" data-link="https://russiaexpo.org/" />
        <img src="https://thedesign-show.com/wp-content/uploads/2024/12/Untitled-design.png" alt="Industry Events" data-link="https://www.industryevents.com" />
        
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/CCI-Logo-Eng-Arb.png" alt="CCI Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/ceramica-focus.png" alt="Ceramica Focus Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/Compasses400.png" alt="Compasses Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/Dailynewwws.png" alt="Daily News" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/dEfORUM-1.png" alt="Deforum Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/HEHOME-FINAL-1.png" alt="HEHOME Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/DeZeen.png" alt="DeZeen Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/LTD_Brandmark_RGB.400020.png" alt="LTD Brandmark" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/NA.png" alt="NA Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/OFFICIAL.png" alt="Official Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/onsite3-1.png" alt="Onsite Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/RC400400.png" alt="RC Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/tdj.png" alt="TDJ Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/9-2.png" alt="9-2 Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/ac.png" alt="AC Logo" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/AinDubai.png" alt="Ain Dubai" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/Al-Bait.png" alt="Al-Bait" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/asianglass.png" alt="Asian Glass" />
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/cairowest.png" alt="Cairo West" />

        {/* Clickable logos */}
        <img src="https://workspace-egypt.com/wp-content/uploads/2024/12/RUSSIA-EXPO.png" alt="Russia Expo" data-link="https://russiaexpo.org/" />
        <img src="https://thedesign-show.com/wp-content/uploads/2024/12/Untitled-design.png" alt="Industry Events" data-link="https://www.industryevents.com" />
      </div>
    </div>
    <div className="container-fluid p-0 mt-5">
    <div className="row align-items-center">
  <div className="col-8 col-md-9">
    <h3 className="ms-3">Electronic</h3>
  </div>
  <div className="col-4 col-md-3 text-end">
    <button 
      className="btn border border-dark text-dark bg-transparent px-2 py-1" 
      onClick={nav}
    >
      Show More
    </button>
  </div>
</div>

</div>
<>
  {/* Banner Section */}
  <img src={img1} alt="Banner" className="w-100 img-fluid" />

  {/* Electronic Section */}
  <Electronic addItems={addItems} />

  {/* Home Section */}
  <div className="container-fluid p-0 mt-5">
    <div className="row align-items-center">
      <div className="col-8 col-md-9">
        <h3 className="ms-3">Home</h3>
      </div>
      <div className="col-4 col-md-3 text-end">
        <button
          className="btn border border-dark text-dark bg-transparent px-3 py-1"
          onClick={nav2}
        >
          Show More
        </button>
      </div>
    </div>
  </div>

  {/* Banner Section */}
  <img src={img2} alt="Banner" className="w-100 img-fluid" />

  {/* Additional Banner Section */}
  <div className="container-fluid p-0 mt-5">
    <img
      src="https://f.nooncdn.com/mpcms/EN0003/assets/a399b5cf-fc5b-411e-a501-39ebae719025.gif?format=avif"
      alt="Banner"
      className="w-100 img-fluid"
    />
  </div>

  {/* Furniture Section */}
  <div className="container-fluid p-0 mt-5">
    <div className="row align-items-center">
      <div className="col-8 col-md-9">
        <h3 className="ms-3">Furniture</h3>
      </div>
      <div className="col-4 col-md-3 text-end">
        <button
          className="btn border border-dark text-dark bg-transparent px-3 py-1"
          onClick={nav3}
        >
          Show More
        </button>
      </div>
    </div>
  </div>

  {/* Final Banner Section */}
  <div className="mb-5">
    <img src={img3} alt="Banner" className="w-100 img-fluid" />
  </div>
</>


    <style>
  {`
    @media (max-width: 768px) {
      .carousel img {
        height: 30vh;  /* Smaller height for mobile */
        object-fit: cover; /* Ensure images cover the area without distortion */
      }
      .carousel-control-prev-icon, .carousel-control-next-icon {
        background-color: black; /* Ensure visibility of the icons */
      }
      .carousel-indicators button {
        background-color: black; /* Darken indicator buttons */
      }
        .col-9 {
        text-align: center; /* Center the title on mobile */
        // margin-left: 10px; /* Remove left margin on mobile */
        // margin-right: 10px; /* Remove left margin on mobile */

      }
      .col-3 {
        text-align: center; /* Center the button on mobile */
        margin-top: -20px; /* Add some space above the button */
        // margin-left: 200px; /* Remove left margin on mobile */

        
      }
      .btn {
        width: 100%; /* Make the button full width on mobile */
      }
    }
  `}
</style>
    
    </>
  );
}
