import React from 'react';
import './HomePage.css';
import './Lato.css';
import './Footer.css';

import { Link } from 'react-router-dom';

function HomePage() {
  // Used to toggle the menu on small screens when clicking on the menu button
  function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") === -1) {
      x.className += " show";
    } else {
      x.className = x.className.replace(" show", "");
    }
  }

  return (
    <div>
      {/* Navbar */}
      <div className="top">
        <div className="bar red card left-align large">
          <a className="bar-item button hide-medium hide-large right padding-large hover-white large red" href="javascript:void(0);" onClick={myFunction} title="Toggle Navigation Menu">
            <i className="fa fa-bars"></i>
          </a>
          <Link to='/' className="bar-item button padding-large white">Home</Link>
          <Link to='/about' className="bar-item button hide-small padding-large hover-white">About</Link>
          <Link to='/courses' className="bar-item button hide-small padding-large hover-white">Courses</Link>
          <Link to='/contact' className="bar-item button hide-small padding-large hover-white">Contact Us</Link>
          
          
        </div>

        {/* Navbar on small screens */}
        <div id="navDemo" className="bar-block white hide hide-large hide-medium large">
        <Link to='/' className="bar-item button padding-large">Home</Link>
          <Link to='/about' className="bar-item button padding-large">About</Link>
          <Link to='/about' className="bar-item button padding-large">Courses</Link>
          <Link to='/contact' className="bar-item button padding-large">Contact Us</Link>
        
        </div>
      </div>

      {/* Header */}
      <header className="container red center" style={{ padding: "128px 16px" }}>
        <h2 className="margin jumbo">"Learnify"</h2>
        
        <button className="button black padding-large large margin-top"><Link to='/courses' style={{ textDecoration: 'none' }}>Get Started</Link></button>
      </header>

      <div className="row-padding padding-64 container">
      <div className="content" >
        <div className="twothird" >
          <h1>" Unlocking Benefits of E-Learning"</h1>
          <h5 style={{ textAlign: 'justify' }}className="padding-32" >
          In today's fast-paced world, e-learning has emerged as a transformative force, revolutionizing the way we acquire knowledge and skills. Learnify, a leading e-learning platform, embraces this digital revolution and empowers learners with a plethora of opportunities. With Learnify, individuals can embark on a journey of self-improvement and personal growth.In conclusion, Learnify stands as a beacon of e-learning excellence, providing a gateway to a world of knowledge and skill enhancement. By embracing Learnify, learners can unlock the benefits of e-learning, including flexibility, accessibility, community engagement, personalized learning, and lifelong learning opportunities. Embark on your educational journey with Learnify and embrace the boundless possibilities of online learning.</h5>
        </div>

        <div className="third center" >
        <div className="image-container">
          <img src="https://cdn.onlinewebfonts.com/svg/img_459341.png" alt="Education" className="education-image" />
          </div>
        </div>
      </div>
    </div>

    
      

      
      <footer>
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default HomePage;
