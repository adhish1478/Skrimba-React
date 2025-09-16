import { useState } from 'react'
import Dice from "/src/components/Dice"


const arrays = [1,1,1,1,1,1,1,1,1,1]

const eightDies= arrays.map(die => (
    <Dice value= {die}/>
))


export default function App() {
    return <main>
        <div className="die-container">
            {eightDies}
        </div>
    </main>
}