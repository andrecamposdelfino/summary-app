import './App.css'
import {useState} from  "react"
import { IoFlash } from "react-icons/io5"
import { BiSolidMemoryCard } from "react-icons/bi"
import { RiMessage3Fill } from "react-icons/ri"
import { MdVisibility } from "react-icons/md"

function App() {

  const [number, setNumber] = useState(0)

  const handleNumberRandomico = (event) => {
    event.preventDefault()
    setNumber(Math.floor(Math.random() * 100))
  }
  

  return (
    <section>
      <div className="wrapper-container">

        <div className="wrapper-left">

          <h3>Your Result</h3>

          <div className="box-result">
            <h1>{number}</h1>
            <p>of 100</p>
          </div>

          <h1>Great</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, ipsum est. Ducimus, quibusdam! Minus dolorum vero</p>

        </div>

        

        <div className="wrapper-right">

          <h1>Summary</h1>

          <div className="box-reaction red">
            <h1><IoFlash /> Reaction</h1>
            <span>{number} / 100</span>
          </div>

          <div className="box-reaction yellow">
            <h1><BiSolidMemoryCard /> Memory</h1>
            <span>{number} / 100</span>
          </div>

          <div className="box-reaction green">
            <h1> <RiMessage3Fill /> Verbal</h1>
            <span>{number} / 100</span>
          </div>

          <div className="box-reaction blue">
            <h1><MdVisibility /> Visual</h1>
            <span>{number} / 100</span>
          </div>

          <button onClick={handleNumberRandomico}>Continue</button>

        </div>

      </div>
    </section>
  )
}

export default App
