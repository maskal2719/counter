import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {SuperButton} from "./components/SuperButton/SuperButton";


function App() {

    const maxCount = 5;
    const minCount = 0

    const [count, setCount] = useState(0)
    const isDisableIcn = count >= maxCount
    const isDisableReset = count === minCount
    // const [maxCount, setMaxCount] = useState(5)

    const inc = () => {
        if(count < maxCount) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className="container">
            <Display count={count}/>
            {/*{count >= 5 && <div className={'err'}>Error</div> }*/}
            <div className={'btn-container'}>
                <SuperButton name={'Inc'} callBack={inc} isDisable={isDisableIcn}/>
                <SuperButton name={'Reset'} callBack={reset} isDisable={isDisableReset}/>
            </div>
        </div>
    );
}

export default App;
