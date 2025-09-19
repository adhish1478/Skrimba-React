import { useState } from "react"
import Dice from "/src/components/Dice"
import {nanoid} from "nanoid"

export default function App() {
    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     * 
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */
    const [dice, setDice] = useState(generateAllNewDice())
    
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: true,
                id: nanoid()
            }))
            
    }
    
    console.log(dice)
    
    function rollDice() {
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map((item) => (
        <Dice key={item.id} value= {item.value} isHeld= {item.isHeld}/>
    ))
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}