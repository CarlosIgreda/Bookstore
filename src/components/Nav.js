import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => (
  <nav className="nav display-flex">
    <div className="title-and-pages display-flex">
      <h1 className="nav-title cursor">Bookstore CMS</h1>
      <ul className="menu display-flex">
        <li>
          <Link to="/" className="menu-item">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/categories" className="menu-item categories-item">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </div>
    <img alt="user" src="https://i.postimg.cc/5tBBBbDD/usericon.png" className="user-icon cursor" />
  </nav>
);

export default Nav;
