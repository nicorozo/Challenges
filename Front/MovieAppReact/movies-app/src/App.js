import React from 'react'
import './App.css'
import Card from './Card.jsx'
import NavBar from './NavBar'
import { useState } from 'react'



export default function App() {

    const [index, setIndex] = useState(0)

    function nextClick() {
        setIndex(index + 1)

    }
    function backClick() {
        setIndex(index - 1)
    }
    return (
        <div className='main-container'>
            <NavBar nextClick={nextClick} backClick={backClick} />
            <Card index={index} />
        </div>
    )
}