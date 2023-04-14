import React from "react";
import "./contact.css";
import Data from "./Data";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const dataContact = Data();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4onsolj', 'template_khy78kv', form.current, '5JzGCa3z2ti7tz01c')
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container-contact">
        <div className="description-contact">
          {dataContact.map((item) => (
            <article key={item.id} className="contact-item">
              <div className="icon-contact">{item.icon}</div>
              <h4>{item.titelContact}</h4>
              <h5>{item.addressContact}</h5>
              <a href={item.linkContact} target="_blank">Send a message</a>
            </article>
          ))}
        </div>
        <div className="contact-from">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
