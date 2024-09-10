import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)


    
    return <div> <p>Burasi Home Page !</p>
       

        <button onClick={() => {
          
          setCount(count+1)
            
           
            
        }}>
            Arttir

        </button>

        <p> {count}</p>

        <button onClick={() => {
          setCount(count-1)
        }}>
          Azalt
        </button>



    </div>
}

export default App
