import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="header">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="menu">
      <li className="menu-item">
        <Link to="/">
          Books
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/categories">
          Categories
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
