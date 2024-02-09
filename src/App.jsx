
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


          <div className='text-center'> 

            <button onClick={() => changeColor('blue')} type="button" class="btn btn-primary s">Blue</button>
            <button onClick={() => changeColor('grey')} type="button" class="btn btn-secondary s">Grey</button>
            <button onClick={() => changeColor('green')} type="button" class="btn btn-success s">Green</button>
            <button onClick={() => changeColor('red')} type="button" class="btn btn-danger s">Red</button>
            <button onClick={() => changeColor('yellow')} type="button" class="btn btn-warning s">Yellow</button>
            <button onClick={() => changeColor('indigo')} type="button" class="btn btn-info s">Indigo</button>
          </div>

        </div>


      </div>



    </>


  )
}

export default App
