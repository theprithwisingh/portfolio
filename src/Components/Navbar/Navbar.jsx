import "./Navbar.css";
import theme_icon from '../../assets/theme-icon.png'
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-name">
          <span>Prithwi</span>
          <span>Singh.</span>
        </div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">About</li> */}
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact me</li>
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
