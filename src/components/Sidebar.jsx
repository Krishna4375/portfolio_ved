import React, { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`sidebar ${open ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="src/assets/images/avatar-1.png" alt="Vedant Garje" width="70" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Vedant Garje">Vedant Garje</h1>
          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={() => setOpen(p => !p)}>
          <span>{open ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:vedantgarje3@gmail.com" className="contact-link">Vedantgarje3@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><ion-icon name="phone-portrait-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918689863903" className="contact-link">+91 86898 63903</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><ion-icon name="calendar-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2006-11-05">November 05, 2006</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><ion-icon name="location-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Panvel , Navi Mumbai, Maharastra</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item"><a href="https://github.com/Krishna4375" className="social-link"><ion-icon name="logo-github"></ion-icon></a></li>
          <li className="social-item"><a href="https://in.linkedin.com/in/vedant-garje-291956356" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li className="social-item"><a href="https://www.instagram.com/vedant_garje_4/" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
      </div>
    </aside>
  )
}