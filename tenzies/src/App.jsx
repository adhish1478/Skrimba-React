import { useState } from 'react'
import Dice from "/src/components/Dice"

export default function App() {


      const [dice, setDice] = useState(generateAllNewDice())
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
        }

    function rollDice() {
      const newDice= generateAllNewDice()
      setDice(newDice)
    }

    const diceElements = dice.map(num => <Dice value={num} />)
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className='roll-dice' onClick={rollDice}>Roll Dice</button>

        </main>
    )

}