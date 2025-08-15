import React from 'react'

export default function Certifications({ isActive }) {
  const projects = [
    {title: '3D car', category: 'Web development', img: 'src/assets/images/3d car.png', link: 'https://car-modals.vercel.app/'},

  ]
  return (
    <article className={`cerification ${isActive ? 'active' : ''}`} data-page="certifications">
      <header>
        <h2 className="h2 article-title">certifications</h2>
      </header>

      <section className="cerification-posts">
        <ul className="cerification-posts-list">
          <li className="cerification-post-item">
            <a href="#">
              <figure className="cerification-banner-box"><img src="src/assets/images/python.jpg" alt="Python Developer - Course Completion" loading="lazy" /></figure>
              <div className="cerification-content">
                <div className="cerification-meta">
                  <p className="cerification-category">completed</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Feb 06, 2025</time>
                </div>
                <h3 className="h3 cerification-item-title">Python Developer - Course Completion</h3>
                <p className="cerification-text">Built a strong foundation in Python with mini-projects and practical examples.</p>
              </div>
            </a>
          </li>

          <li className="cerification-post-item">
            <a href="#">
              <figure className="cerification-banner-box"><img src="src/assets/images/datasci.png" alt="Data Structures & Algorithms Certified" loading="lazy" /></figure>
              <div className="cerification-content">
                <div className="cerification-meta">
                  <p className="cerification-category">completed</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Apr 23, 2025</time>
                </div>
                <h3 className="h3 cerification-item-title">Data Structures & Algorithms Certified</h3>
                <p className="cerification-text">Built a solid base in DSA through coding challenges on arrays, recursion, trees, and sorting.</p>
              </div>
            </a>
          </li>

          <li className="cerification-post-item">
            <a href="#">
              <figure className="cerification-banner-box"><img src="src/assets/images/datasci.png" alt="Data Structures & Algorithms Certified" loading="lazy" /></figure>
              <div className="cerification-content">
                <div className="cerification-meta">
                  <p className="cerification-category">completed</p>
                  <span className="dot"></span>
                  <time dateTime="2022-02-23">Apr 23, 2025</time>
                </div>
                <h3 className="h3 cerification-item-title">Data Structures & Algorithms Certified</h3>
                <p className="cerification-text">Built a solid base in DSA through coding challenges on arrays, recursion, trees, and sorting.</p>
              </div>
            </a>
          </li>
        </ul>
      </section>

      
    </article>
  )
}