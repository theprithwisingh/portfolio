import './Hero.css';
import icon from "../../assets/img.png"
function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <img src={icon} alt="" />
        <h1>Hi, I'm Prithwi</h1>
        <p>Building digital products, brands, and experiences.</p>
        <p>A Product Designer and Visual Developer in SF.</p>
        <p>I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
        <button>CONNECT WITH ME</button>
      </div>
    </div>
  );
}

export default Hero;