import { useState } from 'react'
import './guess.css'

let luckyNumber = Math.floor(Math.random() * 9) + 1




const Guess = () =>{
    const [output, setOutput] = useState("Answer")

    const regen = (e) => {
    luckyNumber = Math.floor(Math.random() * 9) + 1
    setOutput("Answer")
    }   
    const handleClick = (e) => {
        const buttonText = Number(e.target.textContent);
        console.log(luckyNumber)

        if (buttonText != luckyNumber){
            setOutput('Wrong 🤣')
        } else { 
            setOutput('Correct👌')
            
        }
}

    return(
        <div className="card">
            <h1>Guess the Number</h1>
            <p className='output'>{output}</p>
            <div className="btns">
                <button onClick={handleClick}>1</button><button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button><button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button><button onClick={handleClick}>6</button>
                <button onClick={handleClick}>7</button><button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button id='retry' onClick={regen}>Retry</button>
            </div>
        </div>
    )
}

export default Guess

