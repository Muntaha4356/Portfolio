import React from 'react';
import './Contact.css';
//import contactImg from '../assets/contact-illustration.png'; // Replace with your actual path

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Contact <span>me</span></h2>
          <p>If you have any questions or comments, please contact me via email or phone.</p>

          <div className="contact-info">
            <div>
              <h4>Email</h4>
              <p>muntahapolaris@gmail.com</p>
            </div>
            <div>
              <h4>Mobile no.</h4>
              <p>+923278042382</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;
