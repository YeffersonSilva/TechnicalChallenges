
import './App.css'
import HelloWord from './components/HelloWord'
import Recibiendo from './components/recibiendo'

function App() {

  const name = 'Golcito'
  const yers = 25
  const adress = 'Calle 123'
  return (
    <div>
      <HelloWord name={name} />
      <Recibiendo name={name} yers={yers} adress={adress} />
      
 </div>
     
   
  )
}

export default App
