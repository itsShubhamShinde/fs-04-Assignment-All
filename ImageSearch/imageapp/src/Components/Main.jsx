import React, { useEffect, useState } from 'react'
import './Style.css'

const Main = () => {
    const [input,setInput] = useState("")
    const [data,setData] = useState("")

    useEffect(()=>{

    },[data])
  return (
    <div className='OuterDiv'>
        <div className="Navbar">
            <h2>GeekGallery</h2>
            <div className="searchinputDiv">
                <input type="text"  placeholder='Search' onChange={(e)=>{setInput(e.target.value)}}/>
                <button onClick={()=>{setData(input)}}>Search</button>
            </div>
        </div>
        <div className="mainSection"></div>
    </div>
  )
}

export default Main