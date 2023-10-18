import { useState } from "react";
import "./styles.css";

export default function App() {
  let [text, setText] = useState("");
  const [list, setlist] = useState([]);

  const handleChange = (el) => {
    setText(el.target.value);
  };

  const handleSubmit = (el) => {
    setlist([...list, text]);
    setText("");
  };

  const handledelete = (val) => {
    console.log(val);
    const updatedlist = list.filter((value) => value != val);
    setlist(updatedlist);
  };

  return (
    <div className="App">
      <label>Enter text</label>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {list.map((value, index) => {
          return (
            <li>
              {" "}
              {value} <div onClick={() => handledelete(value)}>delete</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
