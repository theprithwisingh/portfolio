import './Hero.css';
import image from "../../assets/image.png"
function Hero() {
  return (
    <div>
    <div className="hero-section">
     <div className='left-section'>
       <div className='paragraph-one'>
          <p>How</p>
          <p>can I assist you</p>
          <p>today ?</p>
       </div>
       <div className='paragraph-two'>
          <p>See</p>
          <p>my featured</p>
          <p>projects.</p>

       </div>
     </div>
     <div className='right-section'>
        <div className='paragraph-three'>
        <p>Hi</p>
        <p>I’m Prithwi🤟</p>
        <p>Software Engineer !</p>
        </div>

        <div className="paragraph-four">
        <p>I specialize in <span>MERN</span> stack, <span>System Designing</span> and <span>Backend Engineering</span>.</p>
        </div>
        
        <div className="image">
          <img src={image} alt="" />
        </div>
     </div>
    </div>
    </div>
  );
}

export default Hero;