import "./Navbar.css";
import theme_icon from '../../assets/theme-icon.svg'
function Navbar() {
  // const [theme, setTheme] = useState("light");

  // Toggle theme based on current theme
  // const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Handle click events for menu items and theme toggle
  // const handleClick = (link) => {
  //   // Handle navigation logic here (e.g., using React Router)
  // };

  return (
    <nav className="navbar">
        <div className="logo-name">
          <span>Prithwi</span>
          <span>Singh</span>
        </div>

        {/*menu */}
        <ul className="navbar-nav">
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Skill</li>
          <li className="nav-item">Contact me</li>
        </ul>

        {/* theme-button */}
        <div className=" theme-toggle">
              <img src={theme_icon} alt="theme-icon" className={`dark ? "":light`}/>
        </div>
    </nav>
  );
}

export default Navbar;
