import React from 'react'
import './Resume.css'
import Navbar from '../../Components/Navbar/Navbar';
import profileImage from '../../Components/assets/images.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Resume = () => {
  return (
    <div className='Resume-section'>
        <div className='left'>
        <div className='pic-name-position'>
          <img src={profileImage} alt="" />
          <p>Prithwi singh</p>
          <p>Software engineer & Freelancer</p>
        </div>
        <hr/>
        <div className='email-location-socialmedia'>
          <div className='email'>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <div className='email-context'>
              <div>Email</div>
              <div>Prihtwisingh@google.com</div>
            </div>
          </div>
          <div className='location'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
            <div className='location-context'>
              <div>Location</div>
              <div>Mumbai, India</div>
            </div>
          </div>
          <div className='socialmedia'>
            <FontAwesomeIcon icon={faGithub} className='social-icon'/>
            <FontAwesomeIcon icon={faTwitter} className='social-icon'/>
            <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
            <FontAwesomeIcon icon={faLinkedin} className='social-icon'/>
            <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
            <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
          </div>
        </div>
        </div>
<div className="right">
   <p className="subtitle">Resume</p>
    <div className='navbar-setting'><Navbar/></div>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis perspiciatis laboriosam quasi, quod quae debitis corrupti quos, assumenda cupiditate vitae totam dolorem maxime? Deleniti harum delectus tempora nostrum adipisci atque nam quaerat explicabo quod exercitationem dignissimos officiis asperiores expedita nihil voluptate aliquid laborum eum placeat ipsa sapiente consectetur praesentium, tenetur impedit! Rem ipsa minima quis exercitationem libero quos deserunt? Corrupti vitae quae atque velit dolores, earum autem, laboriosam et obcaecati consequatur ex! Exercitationem voluptatem nenpm runsciunt sequi maxime quasi, doloribus numquam, quam id minus ea accusamus consequatur nostrum debitis, at excepturi voluptatum! At asperiores ut explicabo earum, odit, sit repudiandae, porro perspiciatis iste distinctio magnam? Hic iusto delectus tenetur doloremque perspiciatis ex maiores similique quia deleniti exercitationem doloribus, maxime ullam rerum sapiente, cumque nulla aspernatur, totam minus cum reiciendis. Iure, doloremque modi debitis pariatur minus aliquid, nisi sed cum quae, inventore rem quaerat. Nostrum incidunt dolor autem cumque explicabo consectetur nam ipsa, asperiores ex ullam corrupti aliquid voluptatum odio numquam rerum inventore harum repellendus quibusdam vel, debitis, minus quo. Quas veniam magnam itaque doloribus consequatur non facere earum! Animi expedita, omnis fugiat ipsam unde laudantium sapiente cupiditate, consequatur dolor exercitationem quod a repellat. Molestias sequi totam unde nisi dolor labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis perspiciatis laboriosam quasi, quod quae debitis corrupti quos, assumenda cupiditate vitae totam dolorem maxime? Deleniti harum delectus tempora nostrum adipisci atque nam quaerat explicabo quod exercitationem dignissimos officiis asperiores expedita nihil voluptate aliquid laborum eum placeat ipsa sapiente consectetur praesentium, tenetur impedit! Rem ipsa minima quis exercitationem libero quos deserunt? Corrupti vitae quae atque velit dolores, earum autem, laboriosam et obcaecati consequatur ex! Exercitationem voluptatem nesciunt sequi maxime quasi, doloribus numquam, quam id minus ea accusamus consequatur nostrum debitis, at excepturi voluptatum! At asperiores ut explicabo earum, odit, sit repudiandae, porro perspiciatis iste distinctio magnam? Hic iusto delectus tenetur doloremque perspiciatis ex maiores similique quia deleniti exercitationem doloribus, maxime ullam rerum sapiente, cumque nulla aspernatur, totam minus cum reiciendis. Iure, doloremque modi debitis pariatur minus aliquid, nisi sed cum quae, inventore rem quaerat. Nostrum incidunt dolor autem cumque explicabo consectetur nam ipsa, asperiores ex ullam corrupti aliquid voluptatum odio numquam rerum inventore harum repellendus quibusdam vel, debitis, minus quo. Quas veniam magnam itaque doloribus consequatur non facere earum! Animi expedita, omnis fugiat ipsam unde laudantium sapiente cupiditate, consequatur dolor exercitationem quod a repellat. Molestias sequi totam unde nisi dolor labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis perspiciatis laboriosam quasi, quod quae debitis corrupti quos, assumenda cupiditate vitae totam dolorem maxime? Deleniti harum delectus tempora nostrum adipisci atque nam quaerat explicabo quod exercitationem dignissimos officiis asperiores expedita nihil voluptate aliquid laborum eum placeat ipsa sapiente consectetur praesentium, tenetur impedit! Rem ipsa minima quis exercitationem libero quos deserunt? Corrupti vitae quae atque velit dolores, earum autem, laboriosam et obcaecati consequatur ex! Exercitationem voluptatem nesciunt sequi maxime quasi, doloribus numquam, quam id minus ea accusamus consequatur nostrum debitis, at excepturi voluptatum! At asperiores ut explicabo earum, odit, sit repudiandae, porro perspiciatis iste distinctio magnam? Hic iusto delectus tenetur doloremque perspiciatis ex maiores similique quia deleniti exercitationem doloribus, maxime ullam rerum sapiente, cumque nulla aspernatur, totam minus cum reiciendis. Iure, doloremque modi debitis pariatur minus aliquid, nisi sed cum quae, inventore rem quaerat. Nostrum incidunt dolor autem cumque explicabo consectetur nam ipsa, asperiores ex ullam corrupti aliquid voluptatum odio numquam rerum inventore harum repellendus quibusdam vel, debitis, minus quo. Quas veniam magnam itaque doloribus consequatur non facere earum! Animi expedita, omnis fugiat ipsam unde laudantium sapiente cupiditate, consequatur dolor exercitationem quod a repellat. Molestias sequi totam unde nisi dolor labore.</p>
  </div>   
  </div>
  )
}

export default Resume;
