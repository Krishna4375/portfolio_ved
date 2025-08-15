import React, { useState } from 'react'

export default function Contact({ isActive }) {
  const [disabled, setDisabled] = useState(true)

  // simple form enable/disable logic: check inputs (demo)
  const handleInput = e => {
    const form = e.target.form
    if (!form) return
    const valid = Array.from(form.elements).filter(Boolean).every(el => {
      if (el.tagName === 'BUTTON') return true
      if (el.required) return el.value.trim() !== ''
      return true
    })
    setDisabled(!valid)
  }

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input onInput={handleInput} type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
            <input onInput={handleInput} type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea onInput={handleInput} name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" disabled={disabled} data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}