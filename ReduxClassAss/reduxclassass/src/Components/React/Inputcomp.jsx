import React, { useState } from 'react'
import '../Styling/Inputcomp.css'
import myStore from './Store'

const Inputcomp = () => {
    const [input,setInput]=useState()
    const callDispatch = ()=>{
        console.log("start");
        myStore.dispatch({
            type:"name",
            username : input,
        })
    }
    return (
        <div className='inputOuterDiv'>
            <h2>Input Component</h2>
            <input type="text" placeholder='Search' onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={callDispatch}>Submit</button>
        </div>
    )
}

export default Inputcomp