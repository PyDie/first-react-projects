import {useState} from "react";


function App() {
    const [count, setCount] = useState(0)
    const onClickPluse = () => {
        setCount(count+1)
    }
    const onClickMinus = () => {
        setCount(count-1)
    }
  return (
    <div className="App">
        <div className="app">
            <div className="counter">
                {count}
            </div>
            <div className="appButtons">
                <button onClick={onClickMinus} className="appButtons_minus">Минус</button>
                <button onClick={onClickPluse} className="appButtons_plus">Плюс</button>
            </div>
        </div>
    </div>
  );
}

export default App;
