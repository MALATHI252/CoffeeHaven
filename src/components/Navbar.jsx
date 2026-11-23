import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
      <a className="navbar-brand" href="/">Coffee Haven</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#coffeeNavbar" aria-controls="coffeeNavbar" aria-expanded="false"
      aria-label="Toggle navigation">
        <span className="navbar-toggle-icon"></span>
      </button>
<div className="collapse navbar-collapse"id="coffeeNavbar">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <Link className="nav-link" href="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="/menu">Menu</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="/about">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" href="/">Contact</Link>
    </li>
  </ul>
      

    </div>
    </div>
        </nav>
  )
}

export default Navbar
