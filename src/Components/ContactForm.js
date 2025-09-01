import React from 'react'

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
        <h2 className="heading">Contact me</h2>

        <form className="form">
            <input type="text" name="first-name" placeholder="First Name *" className="form__input" />
            <input type="text" name="last-name" placeholder="Last Name *" className="form__input" />
            <input type="email" name="email" placeholder="Email *" className="form__input" />
            <input type="text" name="phone" placeholder="Phone" className="form__input" />
            <label className="form-label">My message *</label>
            <textarea rows="6" className="form__textarea"></textarea>
            <button className="form__button">Send my message</button>
        </form>
    </section>
  )
}

export default ContactForm