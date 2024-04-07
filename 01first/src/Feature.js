import React from 'react'
import img from './img/best-features.png'

function Feature() {
  return (
    <div className='feature'>
        <div className='featurepic'>
          <img src={img}></img>
        </div>
        <div className='featuretext'>
            <h1>Some of the best features of Our App!</h1><br></br><br></br>
            <div className='featuretype'>
                <Type message="Easy to Costomize"/>
                <Type message="Extreme Security"/>
                <Type message="Customer Support"/>
                <Type message="Creative Design"/>
            </div>

        </div>
    </div>
  )
}

function Type(value){
  return(
    <div className='type'>
      <div><br></br><i class="bi bi-tools"></i></div>
      <div className='typetext'>
        <h2>{value.message}</h2>
        <p>Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
      </div>
    </div>
  )
}

export default Feature
