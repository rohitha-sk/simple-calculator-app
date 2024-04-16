import logo from './logo.svg';
import './App.css';
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App(){
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operation, setOperation] = useState(null);
 
  function plus(e) {
    e.preventDefault();
    if (operation === null) {
      setPreviousNumber(currentNumber);
      setCurrentNumber("");
    } else {
      calculateResult();
    }
    setOperation("+");
  };
 
  function minus(e) {
    e.preventDefault();
    if (operation === null) {
      setPreviousNumber(currentNumber);
      setCurrentNumber("");
    } else {
      calculateResult();
    }
    setOperation("-");
  }

  function times(e) {
    e.preventDefault();
    if (operation === null) {
      setPreviousNumber(currentNumber);
      setCurrentNumber("");
    } else {
      calculateResult();
    }
    setOperation("*");
  }

  function divide(e) {
    e.preventDefault();
    if (operation === null) {
      setPreviousNumber(currentNumber);
      setCurrentNumber("");
    } else {
      calculateResult();
    }
    setOperation("/");
  }

  function calculateResult() {
    let currentVal = parseFloat(currentNumber);
    let prevVal = parseFloat(previousNumber);
    let result;
    switch (operation) {
      case "+":
        result = prevVal + currentVal;
        break;
      case "-":
        result = prevVal - currentVal;
        break;
      case "*":
        result = prevVal * currentVal;
        break;
      case "/":
        if (currentVal === 0) {
          result = "Error: Division by zero";
        } else {
          result = prevVal / currentVal;
        }
        break;
      default:
        result = "Error";
    }
    setCurrentNumber(result.toString());
    setPreviousNumber(null);
    setOperation(null);
  }

  function resetInput(e) {
    e.preventDefault();
    setCurrentNumber("");
  }

  function resetResult(e) {
    e.preventDefault();
    setCurrentNumber("");
    setPreviousNumber(null);
    setOperation(null);
  }

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
      
        <p ref={resultRef} className='resultPara'> 
          {/* add the value of the current total */}   
          Display Total : {currentNumber}
        </p> 
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          value={currentNumber}
          onChange={(e) => setCurrentNumber(e.target.value)}
        />
        <div className='buttons'>
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>devide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
        </div>
        
      </form> 
    </div> 
  ); 
}


export default App;
