import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      

      <main>
        <section className="hero">
          <h1>About Us</h1>
          <p>Learnify is a dynamic and user-friendly course selling website that aims to revolutionize online education. With a vast array of courses spanning topics such as web development, blockchain, cybersecurity, AI/ML, IoT, and cloud computing, Learnify empowers learners to expand their knowledge and skills in the rapidly evolving digital landscape. The platform offers an immersive and interactive learning experience, combining high-quality course content with engaging multimedia resources. Learnify's intuitive interface and personalized recommendations help learners discover the most relevant courses tailored to their interests and career goals. With a vibrant community of instructors and learners, Learnify fosters collaboration, knowledge sharing, and growth. Join Learnify today and unlock your potential for success in the digital world.</p>
          
        </section>

        <section className="features">
          <div className="feature">
            <img src="https://th.bing.com/th/id/R.e78f0fd94042f4d9a39c375637cfc901?rik=hPKUzdbfDaogMg&riu=http%3a%2f%2ftheherringtongroup.org%2fwp-content%2fuploads%2f2019%2f10%2fDigital-Tools-Icon%402x.png&ehk=jkkz6QfTc3Ds5cq9VZpEdyCBOGYGUwo59fTnpXIGCEM%3d&risl=&pid=ImgRaw&r=0" alt="Web Development" />
            <h2>Web Development</h2>
            <p>Learn the skills to build modern and responsive websites using HTML, CSS, and JavaScript. Master popular frameworks and libraries like React, Angular, and Vue.js.</p>
          </div>
          <div className="feature">
            <img src="https://cdn1.iconfinder.com/data/icons/cryptocurrency-blockchain-fintech-free/32/Cryptocurrency_blockchain_data-37-512.png" alt="Blockchain" />
            <h2>Blockchain</h2>
            <p>Discover the fundamentals of blockchain technology and cryptocurrencies. Explore smart contracts, decentralized applications (DApps), and the future of decentralized finance (DeFi).</p>
          </div>
          <div className="feature">
            <img src="https://th.bing.com/th/id/R.af70faab19dc9a9b9a695128b7bc4ee4?rik=4IwA2sHUHfAMYQ&riu=http%3a%2f%2fncsmadison.com%2fwp-content%2fuploads%2f2018%2f01%2fSecurity-Icon-2.png&ehk=%2fMI12j2fmDkdc9dYPm0P8HRfjhuxPcspzll1ozjVF8Q%3d&risl=&pid=ImgRaw&r=0" alt="Cybersecurity" />
            <h2>Cybersecurity</h2>
            <p>Enhance your understanding of cybersecurity principles and techniques. Learn how to protect systems, networks, and data from cyber threats and develop skills in ethical hacking and secure coding.</p>
          </div>
          <div className="feature">
            <img src="https://aimlplatform.org/wp-content/uploads/2021/04/2-1.png" alt="AI/ML" />
            <h2>AI/ML</h2>
            <p>Explore the fascinating world of Artificial Intelligence (AI) and Machine Learning (ML). Acquire knowledge in data analysis, predictive modeling, neural networks, and deep learning algorithms.</p>
          </div>
          <div className="feature">
            <img src="https://cdn.onlinewebfonts.com/svg/img_384091.png" alt="IoT" />
            <h2>IoT</h2>
            <p>Get hands-on experience with Internet of Things (IoT) technologies. Learn how to connect devices, collect and analyze data, and build smart solutions for various industries.</p>
          </div>
          <div className="feature">
            <img src="https://cdn.onlinewebfonts.com/svg/img_459341.png" alt="Cloud Computing" />
            <h2>Cloud Computing</h2>
            <p>Discover the power of cloud computing and its applications. Learn about different cloud platforms, deployment models, and gain practical skills to design and manage scalable cloud solutions.</p>
          </div>
        </section>
        
        <center><a href="/" className="cta-button">Home</a></center>
      </main>

      <footer>
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
