import "./Navbar.css";
import theme_icon from '../../assets/theme-icon.png'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-name">
          <span>Prithwi</span>
          <span>Singh.</span>
        </div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">About</li> */}
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/projects">Project</Link></li>
          <li className="nav-item"><Link to="/Contact">Contact me</Link></li>
          <li className="nav-item">Download CV</li>
        </ul>

        {/*theme-button*/}
        <div className=" theme-toggle">
            <img src={theme_icon} alt="theme-icon" className={`dark ? "":light`}/>
        </div>
    </nav>
  );
}

export default Navbar;
