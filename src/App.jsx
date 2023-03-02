import { useState } from 'react'
import FortunaCards from './componentes/FortunaCards'
import phrases from "./data/phrases.json"
import TituloPrincipal from './componentes/TituloPrincipal'
import './App.css'

function App() {
  const [indexPhrases, setIndexPhrases] = useState(0)

  const changeFortuna =() => {
    setIndexPhrases(Math.floor(Math.random() * phrases.length))

  }
const fondo = [1,2,3,4]

const [indexFondo, setIndexFondo] = useState(0)

const changefondo =() =>{
  if(indexFondo === fondo.length -1) {
    setIndexFondo(0) ;

  }
  else{
    setIndexFondo(indexFondo +1);
  }
}

  return (
    <div className="App" style={{backgroundImage: "url('fondo"+fondo[indexFondo]+".jpg')"}}>
      <TituloPrincipal/>

      <FortunaCards 
        fortunaData={phrases[indexPhrases]}
      />
      <button onClick={()=>{changeFortuna(),changefondo()}}>Ver 1 + por D10S</button>


    </div>
  )
}

export default App
