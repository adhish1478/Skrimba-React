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
    
    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
            
    }
    
    console.log(dice)
    
    function rollDice() {
        setDice(prevDice => prevDice.map(dice =>
          dice.isHeld
          ? dice
          : {...dice, value: Math.ceil(Math.random() * 6)}
        ))
    }

    function holdDice(id) {
      setDice(prevDice => 
        prevDice.map(dice => 
          id === dice.id 
          ? {...dice, isHeld: !dice.isHeld}
          : dice
        ))
    }

    const diceElements = dice.map((item) => (
        <Dice key={item.id} 
        value= {item.value} 
        isHeld= {item.isHeld} 
        holdDice ={() => holdDice(item.id)}/>
    ))
    
    return (
        <main>
          <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}