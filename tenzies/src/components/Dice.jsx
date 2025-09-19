export default function Dice(props) {
    return (
            <button className="die"
            style= {{backgroundColor : props.isHeld ? "#59E391" : "white"}}
            >{props.value}</button>
        
    )
}