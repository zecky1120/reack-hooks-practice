import "./App.css";
import useCustomHook from "./hooks/useCustomHook";

function App() {
  const [fName, setFname] = useCustomHook("");
  const [lName, setLname] = useCustomHook("");
  const fullName = fName + " " + lName;

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
            <input type="text" {...setFname}></input>
          </label>
        </div>
        <div className="">
          <label>
            名前
            <input type="text" {...setLname}></input>
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
