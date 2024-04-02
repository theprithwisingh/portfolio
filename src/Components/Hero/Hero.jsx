import './Hero.css';
import image from "../../assets/images.jpg"
function Hero() {
  return (
    <div className="hero-section">
     <div className='right-section'>
        <div className='paragraph-One'>
        <img src={image} alt="" />
        <p><span>I’m</span><span>Prithwi.</span></p>
        <p>Lormtur Adipisci !</p>
        <p>Hello EveryOne myself Prithwi Singh</p>


        <div className="paragraph-Two">
        <p>I specialize in <span>MERN</span> stack, <span>System Designing</span> and <span>Backend Engineering</span>.</p>
        </div>

        </div>
     </div>
    </div>
  );
}

export default Hero;