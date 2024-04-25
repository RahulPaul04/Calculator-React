import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [output,setOutput] = useState("")
  const [placeholder,setplaceholder] = useState("0")
  const [input2,setInput2] = useState("")
  const [move,setmove] = useState(false)
  const [tdur,setTdur] = useState("0.4s")

  const displayContent = (val) =>{
    setTdur("0.4s")

    let value = move?output + val:input2+ val
    setInput2(value)
    setplaceholder("0")
    setmove(false)

  }

  const minusone = () =>{
    setTdur("0.4s")

    let value = move?input2:input2.slice(0,-1)
    setInput2(value)
    setmove(false)

  }

  const showResult = ()=>{
    setTdur("0.4s")
   if(input2)
   { try{
      setOutput(String(eval(input2)))
      setmove(true)
  }
  catch{
    console.log("error caught");
      setInput2("")
      setplaceholder("Invalid Expression")
  }}
  }

  const reset = ()=>{
    setTdur("0s")
    setOutput("")
    setInput2("")
    setmove(false)


  }

  let st = {
    transition: ` transform ${tdur}`, 
    transform: `translateY(${move ? '-45' : '0'}px)`,
    fontSize:`${move?'1.5rem':'2.5rem'}`
  };
  
  return (
  
      <div className="full-container d-flex">
      <div className="calculator mx-auto col-lg-4 col-md-5 col-10">
          <div className="display">
            <input id="display2" style={st} value={input2} placeholder={placeholder} type="text" readonly/>
            <input id="display" style={{fontSize:`${move?'2.5rem':'0'}`}} value={output}  type="text" readonly/>
            </div>
          <div onClick={e => displayContent('(')}  className="button operator">(</div>
          <div onClick={e => displayContent(')')}  className="button operator">)</div>
          <div onClick={minusone} className="button operator">del</div>
          <div onClick={reset} className="button AC">AC</div>
          <div onClick={e => displayContent('7')} className="button">7</div>
          <div onClick={e => displayContent('8')}  className="button">8</div>
          <div onClick={e => displayContent('9')}  className="button">9</div>
          <div onClick={e => displayContent('/')}  className="button operator">/</div>
          <div onClick={e => displayContent('4')}  className="button">4</div>
          <div onClick={e => displayContent('5')}  className="button">5</div>
          <div onClick={e => displayContent('6')}  className="button">6</div>
          <div onClick={e => displayContent('*')}  className="button operator">*</div>
          <div onClick={e => displayContent('1')}  className="button">1</div>
          <div onClick={e => displayContent('2')}  className="button">2</div>
          <div onClick={e => displayContent('3')}  className="button">3</div>
          <div onClick={e => displayContent('-')}  className="button operator">-</div>
          <div onClick={e => displayContent('0')}  className="button">0</div>
          <div onClick={e => displayContent('.')}  className="button">.</div>
          <div onClick={showResult} className="button equal">=</div>
          <div onClick={e => displayContent('+')}  className="button operator">+</div>
      </div>
      </div>
   
  )
}

export default App
