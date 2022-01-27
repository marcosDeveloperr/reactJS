import Item from "./components/item";

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
          <a href="/" className="list-group-item list-group-item-action list-group-item-dark">Flamengo</a>
          <a href="/" className="list-group-item list-group-item-action list-group-item-dark">Sport</a>
          <a href="/" className="list-group-item list-group-item-action list-group-item-dark">Botafogo</a>
          <a href="/" className="list-group-item list-group-item-action list-group-item-dark">Corinthians</a>        
      </ul>      
   
    {/*componentes vou replicar o codigo ...fica imenso. 
     trabalhar com component . Na pasta components/item*/}

     <ul>
       <Item/>
       <Item/>
       <Item/>
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