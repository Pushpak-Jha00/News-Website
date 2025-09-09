import React from 'react'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="container bg-light">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom  border-danger pb-3 mb-3">
      <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-dark">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/news-todo" className="nav-link px-2 text-dark">Notes</NavLink></li>
    </ul>
    <p className="text-center text-dark">© 2024 Pushpak, Jha</p>
  </footer>
</div>
  )
}

export default Footer
