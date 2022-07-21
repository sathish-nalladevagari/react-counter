import React ,{ useState } from 'react';

import './App.css';

function App() {
  const [count,setCount] = useState(0);
  document.addEventListener('keydown',function(e){
    if (e.key === 'Enter'){
      Incre(); 
    } 
  })

  const Incre = () =>{
    setCount(count+1)
  }
  const Decre = () =>{
    setCount(count-1)
  }

  return (
    
    <div className="App">
        <h1>Counter App</h1>
        <div className='main'>
            <h2>{count}</h2>
            <button onClick={Incre} type="">+</button>
            <button onClick={Decre} type="">-</button>
        </div>
    </div>
  );
}

export default App;
