
import { useState } from 'react'
import './App.css'
import './index.css'


function App() {
  const [bgcolor, setBgColor] = useState("rgb(0, 0, 0)")

  const changeColor = (color) => {
    console.log("inputt on");
    setBgColor(color)

  }

  return (
    <>
      <div style={{ width: '100%', height: '100vh', backgroundColor: bgcolor }} className="d-flex justify-content-center align-items-center">


        <div>
          <h1 className='text-center mb-5 text-light'>Background Color Changer</h1>
  
          <button onClick={() => changeColor('blue')} type="button" class="btn btn-outline-primary s">Primary</button>
          <button onClick={() => changeColor("gray")} type="button" class="btn btn-outline-secondary s">Secondary</button>
          <button onClick={() => changeColor("green")} type="button" class="btn btn-outline-success s">Success</button>
          <button onClick={() => changeColor("red")} type="button" class="btn btn-outline-danger s">Danger</button>
          <button onClick={() => changeColor("yellow")} type="button" class="btn btn-outline-warning s">Warning</button>
          {/* <button onClick={() => changeColor("indigo")} type="button" class="btn btn-outline-info s">Info</button> */}
          {/* <button onClick={() => changeColor("orange")} type="button" class="btn btn-outline-warning s">orange</button> */}
        </div>

      </div>


    </>


  )
}

export default App
