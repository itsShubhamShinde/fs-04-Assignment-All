import React from 'react'
import './Styling/Reactbasic.css'
import Inputcomp from './React/Inputcomp'
import Answercomp from './React/Answercomp'

const ReactBasic = () => {
  return (
    <div className='reactbasicOuterDiv'>
    <h1 style={{marginTop:"40px"}}>React Basic Implementation.</h1>
    <div className="OuterContainer">
      <div className="leftDiv">
        <Inputcomp/>
      </div>
      <hr/>
      <div className="leftDiv">
        <Answercomp/>
      </div>
    </div>
</div>
  )
}

export default ReactBasic