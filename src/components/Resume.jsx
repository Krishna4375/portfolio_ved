import React from 'react'

export default function Resume({ isActive }) {
  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><ion-icon name="book-outline"></ion-icon></div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Bharati Vidyapeeth College of Engineering</h4>
            <span></span>
            <p className="timeline-text">B.E. in Information Technology – Pursuing</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">N.N. Paliwala Junior College</h4>
            <span></span>
            <p className="timeline-text">HSC – Science Stream</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">C.K.T. High School, Panvel</h4>
            <span></span>
            <p className="timeline-text">SSC (1st to 10th Standard)</p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {[
            {name: 'Web design', value: 70},
            {name: 'HTML', value: 90},
            {name: 'CSS', value: 80},
            {name: 'JAVASCRIPT', value: 60},
          ].map(s => (
            <li className="skills-item" key={s.name}>
              <div className="title-wrapper">
                <h5 className="h5">{s.name}</h5>
                <data value={s.value}>{s.value}%</data>
              </div>
              <div className="skill-progress-bg"><div className="skill-progress-fill" style={{width: `${s.value}%`}}></div></div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}