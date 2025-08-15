import React from 'react'

export default function Portfolio({ isActive }) {
  const projects = [
    {title: '3D car', category: 'Web development', img: 'src/assets/images/3d car.png', link: 'https://car-modals.vercel.app/'},

  ]

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>Select category</div>
            <div className="select-icon"><ion-icon name="chevron-down"></ion-icon></div>
          </button>
          <ul className="select-list">
            <li className="select-item"><button data-select-item>All</button></li>
            <li className="select-item"><button data-select-item>Web design</button></li>
            <li className="select-item"><button data-select-item>Applications</button></li>
            <li className="select-item"><button data-select-item>Web development</button></li>
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((p, i) => (
            <li className={`project-item active`} data-filter-item data-category={p.category} key={i}>
              <a href={p.link || '#'} target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box"><ion-icon name="eye-outline"></ion-icon></div>
                  <img src={p.img} alt={p.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">{p.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}