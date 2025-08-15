import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />

        <Certifications isActive={activePage === 'certifications'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
}