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
          {/* <li className="nav-item">Home</li>
          <li className="nav-item">Project</li>
          <li className="nav-item">Contact me</li>
          <li className="nav-item">Download CV</li> */}
          <li><a href="#hero-section">Home</a></li>
          <li><a href="#projects-container">Project</a></li>
          <li><a href="#form-container">Contact me</a></li>
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
