import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact container py-5">
      <h2 className="text-center">Contact Me</h2>
      <form className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Send</button>
      </form>
    </section>
  );
}

export default Contact;
