import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  //let counter = 6;

  const addValue = () => {
    //console.log("clicked", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }

    //setCounter(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }

    //setCounter(counter);
  };

  return (
    <>
      <h1>Beauty of react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value : {counter}</button>

      <footer>final value: {counter}</footer>
    </>
  );
}

export default App;
