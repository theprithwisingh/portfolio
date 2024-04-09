import './Hero.css';
import { LuChevronDownCircle } from "react-icons/lu";
import image from "../../assets/images.jpg"
function Hero() {
  return (
    <div className="hero-section">
     <div className='right-section'>
      <div className='paragraph-One'>
        <img src={image} alt="" />
        <p><span>I’m</span><span>Prithwi.</span></p>
        <p>Full stack software developer!</p>
        <p>I can help bring your ideas into reality.</p>
      <div className="paragraph-Two">
        <p>I specialize in <span>MERN</span> stack, <span>System Designing</span> and <span>Backend Engineering</span>.</p>
      </div>
    </div>
    <div className='circle'>
    <LuChevronDownCircle />
    </div>
    </div>
    </div>
  );
}

export default Hero;