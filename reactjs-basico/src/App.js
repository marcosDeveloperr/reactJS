const App = () => {
  return(
    //nao permite trabalhar com elementos irmaos. 
    //Para isso trabalhamos com esses elementos dentro de uma div.
    // <h1>Oi, Mundo reactJS</h1>
    // <p>Melhor time do mundo é o Flamengo.</p>

    // <div>
    //   <h1>Oi, Mundo reactJS</h1>
    //   <p>Melhor time do mundo é o Flamengo.</p>
    // </div>
    //Ao invés de <div>...</div> também podemos usar <> .. </> 
    <>
      <h1>Oi, Mundo reactJS</h1>
        <p>Melhor time do mundo é o Flamengo.</p>
      <h2>Lista de times favoritos</h2>
      <ul>
        <li>Flamengo</li>
        <li>Sport</li>
        <li>Botafogo</li>
        <li>Corinthians</li>
      </ul>
    </>
  )
}

export default App;

//**Outra forma correta**/
// export default function App(){
//   return(
//     <h1>Oi, Mundo reactJS.</h1>
//   )
// }