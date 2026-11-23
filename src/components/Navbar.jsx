import { Link } from 'react-router-dom'
function Navbar({cartCount}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
      <a className="navbar-brand" to="/">Coffee Haven</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false"
      aria-label="Toggle navigation">
        <span className="navbar-toggle-icon"></span>
      </button>
<div className="collapse navbar-collapse"id="navbarMenu">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <Link className="nav-link"to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"to="/menu">Menu</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"to="/cart"> 🛒 Cart ({cartCount})</Link>
    </li>

  </ul>
      

    </div>
    </div>
        </nav>
  );
}

export default Navbar;
