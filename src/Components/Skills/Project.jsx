import React from 'react'
import './Project.css'
import food from '../../assets/food.jpg'
function Project() {
  return (
    <div className='projects'>
      <div className='projectCards'>
        <div className='left'>
         <img src={food} alt="" className='poster-image' />
         <button>Live Demo</button>
         <button>GitHub</button>
        </div>
        <div className='right'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius est repellat laborum dicta non ducimus repellendus nulla, veritatis sed fugiat id? Quae nisi cumque illum ipsa vero repudiandae sed!snap
          <span>...More detals</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project