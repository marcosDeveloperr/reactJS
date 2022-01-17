import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


function primeiroJSX()
{
  return (<div>Marcos</div>)   
  
}   

function soma(a,b)
{
  return a+b
}

const App = () => {
  return (
    <div className="App">
      <h3>Ola, mundo reactJS - {primeiroJSX()}</h3>
      <p>Soma: {soma(3,10)}</p>    
    </div>
  
  )
}


const rootElement = document.getElementById("root")
ReactDOM.render(<App/>,rootElement)
