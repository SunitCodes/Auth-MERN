import React, { useCallback, useState } from 'react'
import './passwordGenerator.css'

const PasswordGenerator = () => {
  
    const [length , setLength] = useState(16);
    const [isNumber, setIsNumber] = useState(false);
    const [isSymbol, setIsSymbol] = useState(false);
    const [password, setPassword] = useState();

    const GeneratePassword = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(isNumber)
            str += "123456789"
        if(isSymbol)
            str += "!@#$%^&*()_~?/`"

        for(let i=0;i<length;i++){
            let char = Math.floor(Math.random()*str.length()+1)
            pass += str.charAt(char)
        }

        setPassword = pass;

    }, [length , isNumber, isSymbol])
  
  return (
    <div className="container">
            <h1>Password Generator</h1>

            <input type="text" className="output" value={password}/>
            <button id="copy" onclick="copyText()">Copy</button>
        <div className='container2'>
            <label for="passlength">Password Length : {length}</label><input type="range" value={length} id="passlength" min="8" max="24"
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label for="numbers">Include Numbers :</label><input className="a" type="checkbox" id="numbers"/>
            <label for="symbols">Include Symblos :</label><input className="a" type="checkbox" id="symbols"/>
        </div>
        <button id="generate" onClick={GeneratePassword}>Generate Password</button>
    </div>

  )
}

export default PasswordGenerator
