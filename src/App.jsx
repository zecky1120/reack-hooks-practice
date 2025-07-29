import { useState } from "react";
import "./App.css";

function App() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const fullName = fName + lName;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`あなたの名前は${fullName}です。`);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>
            苗字
            <input
              type="text"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="">
          <label>
            名前
            <input
              type="text"
              value={lName}
              onChange={(e) => setLname(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="">
          <label>
            フルネーム
            <p>{fullName}</p>
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
