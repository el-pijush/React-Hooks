
import './App.css';
import {useState} from "react"
function App() {

  const [count,setCount]=useState(0)

  const handlechange = ()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <h1>count {count}</h1>
      <button onClick={handlechange} >Click Me</button>
    </div>
  );
}

export default App;
