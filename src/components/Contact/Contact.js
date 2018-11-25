import React, { Component } from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelopeSquare } from 'react-icons/fa';
import './Contact.css';


function Contact() {
  return (
  	<section className="contact-container">

          <div className="contact-header">
						<h3>
							Need to get in touch?
						</h3>
					</div>
            <div className="contact-items">

              <a href="mailto:rzhancock@gmail.com" className="contact-buttons">
                <div><FaEnvelopeSquare /></div>
                Email
              </a>

              <a href="https://www.linkedin.com/in/robertzhancock/" className="contact-buttons">
                <div><FaLinkedin /></div>
                LinkedIn
              </a>

              <a href="https://www.linkedin.com/in/robertzhancock/" className="contact-buttons">
                <div><FaGithub /></div>
                GitHub
              </a>
            </div>
		</section>
  );
}

export default Contact;