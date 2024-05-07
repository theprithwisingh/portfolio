import React from 'react'
import './Project.css'
import food from '../../assets/food.jpg'
function Project() {
  return (
    <div className='projects'>
      <div className='heading-line'>
      <h1>These are the projects I have worked on so
     </h1>
     <p>I've Worked On Plenty Of Projects, But These Are The Ones I'm Really Proud Of. Many Are Open-Source, So If You Spot Something You Like, Check Out The Code And Feel Free To Pitch In With Your Ideas For Making It Even Better.</p>
      </div>
      <div className='projectCards'>
        <div className='left'>
         <img src={food} alt="" className='poster-image' />
         <div className='btn'>
         <button>Live Demo</button>
         <button>GitHub</button>
         </div>
        </div>
        <div className='right'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et molestias enim ab ea! Ducimus ratione molestiae nisi accusamus culpa error, maxime laborum quia provident asperiores pariatur? Natus odio esse officia reprehenderit at omnis delectus nemo est, ducimus enim asperiores saepe animi minima deleniti suscipit numquam quibusdam excepturi et labore autem.
          <span>...More detals</span>
          </p>
        </div>
      </div>
{/* 2 */}
      <div className='projectCards'>
        <div className='left'>
         <img src={food} alt="" className='poster-image' />
         <div className='btn'>
         <button>Live Demo</button>
         <button>GitHub</button>
         </div>
        </div>
        <div className='right'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et molestias enim ab ea! Ducimus ratione molestiae nisi accusamus culpa error, maxime laborum quia provident asperiores pariatur? Natus odio esse officia reprehenderit at omnis delectus nemo est, ducimus enim asperiores saepe animi minima deleniti suscipit numquam quibusdam excepturi et labore autem.
          <span>...More detals</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project