import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">The Blog</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Posts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Post</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
}

export default Navbar