import { useState } from "react"

export default function Form(){
    const[name, setNome]= useState("")
    const[idade, setIdade]= useState(0)

function salvarUsuario(){
    fetch('api/form',{method:'POST',body:{name, idade}})
}

    return(
        <>
        <h1>Integração com API #2</h1>
        <input type="text" useRef={name} onClick={e => setNome(e.target.value)} />
        <input type="number" useRef={idade} onClick={e => setIdade(e.target.value)}/>
        <button onClick={salvarUsuario()}>Enfiar</button>
        </>
    )
}