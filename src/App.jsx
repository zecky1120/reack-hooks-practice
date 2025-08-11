import "./App.css";
import useFullNameHook from "./hooks/useFullNameHook";

function App() {
  const { fullName, familyNameInputProps, lastNameInputProps } =
    useFullNameHook();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`あなたの名前は${fullName}です。`);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label className="form-label">
            <span>苗字</span>
            <input
              type="text"
              className="form-control"
              {...familyNameInputProps}
            ></input>
          </label>
        </div>
        <div>
          <label className="form-label">
            <span>名前</span>
            <input
              type="text"
              className="form-control"
              {...lastNameInputProps}
            ></input>
          </label>
        </div>
        <div>
          <label className="form-label">
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
