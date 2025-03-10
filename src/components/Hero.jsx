import React from 'react'
import './hero.css'
import img1 from '../../src/assets/img1.png'
import img2 from '../../src/assets/img2.png'
import img3 from '../../src/assets/img3.png'
import img4 from '../../src/assets/img4.png'
import img5 from '../../src/assets/img5.png'
import img6 from '../../src/assets/img6.png'
import img7 from '../../src/assets/img7.png'
import img8 from '../../src/assets/img8.png'
import img9 from '../../src/assets/img9.png'
const Hero = () => {
  return (
    <div className='bodys'>
      <div>
        <h1>Contrary To The</h1>
        <h1>Popular Belief, At</h1>
      </div>
      <div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
      </div>
      <div className='button'>
        <p className='non'>Non Charact</p>
        <p className='lorem'>Lorem Ipsum</p>
      </div>
      <div>
        <p>There are many variad</p>
        <p>tions</p>
      </div>
      <div className='cir'>
        <div className='circle'>< img src={img1} alt="" / ></div>
        <div className='circle'>< img src={img2} alt="" / ></div>
        <div className='circle'>< img src={img3} alt="" / ></div>
        <div className='circle'>< img src={img4} alt="" / ></div>
        <div className='circle'>< img src={img5} alt="" / ></div>
        <div className='circle'>< img src={img6} alt="" / ></div>
        <div className='circle'>< img src={img7} alt="" / ></div>
        <div className='circle'>< img src={img8} alt="" / ></div>
        <div className='circle'>< img src={img9} alt="" / ></div>

      </div>
    </div>
  )
}

export default Hero
