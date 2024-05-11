import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const ENDPOINT = "http://192.168.49.2:31716/api/v1/note1/";

function App() {
  const [i, setI] = useState("");
  const [r, setR] = useState("");

  const handleClick = async () => {
    let res = await axios.post(ENDPOINT, {cmd: i});
    console.log("a", res.data.output);
    setI("");
    setR(res.data.output);
  }

  const handleChange = (e) => {
    setI(e.target.value);
  }
  return (
    <div className="App">
      <h1>Linux Learner</h1>

      <p>
        This is a linux command teting web App. In order to do so you should sign in get KYC.Don't try to hack us this is highly unwanted!!! Since only authenticated users get to execute code we will know your identity !!
      </p>
      <h2>write your commands here</h2>
      <input value={i} onChange={e => handleChange(e)}/>
      <button onClick={() => handleClick()}>Run</button>
      <h2>Here is the output</h2>
      <div style={{width: "500px", height: "500px", margin:"auto", border:"1px solid blue"}}>{r}</div>
    </div>
  );
}

export default App;
