import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setting from "./components/Setting/Setting";

function App() {

    const errMessage = 'Error'
    const [error, setError] = useState<boolean>(false)

    return (
        <>
            <Counter error={error}
                     errMessage={errMessage}
            />

            <Setting error={error} setError={setError}/>
        </>
    );
}

export default App;
