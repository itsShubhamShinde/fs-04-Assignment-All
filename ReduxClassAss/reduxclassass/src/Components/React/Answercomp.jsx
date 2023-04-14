import React from 'react'
import '../Styling/Inputcomp.css'
import { useSelector } from 'react-redux'

const Answercomp = () => {
    const { name } = useSelector((storedata) => {
        return storedata;
    })
    return (
        <div className='inputOuterDiv' style={{ width: "500px" }}>
            <h2>Text Component</h2>
            <h3>Data is coming from redux store.</h3>
            <h2>{name}</h2>
        </div>
    )
}

export default Answercomp