import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {SuperButton} from "./components/SuperButton/SuperButton";


function App() {


    const minCount = 0

    const [count, setCount] = useState(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const isDisableIcn = count >= maxCount
    const isDisableReset = count === minCount


    const inc = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    const setMaxCounter = (maxCount: number) => {
        setMaxCount(maxCount)
    }
    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCounter(+e.currentTarget.value)
    }

    return (
        <>
            <div className="container">
                <Display count={count}/>
                {/*{count >= 5 && <div className={'err'}>Error</div> }*/}
                <div className={'btn-container'}>
                    <SuperButton name={'Inc'} callBack={inc} isDisable={isDisableIcn}/>
                    <SuperButton name={'Reset'} callBack={reset} isDisable={isDisableReset}/>
                </div>
            </div>
            <div className={'setting'}>
                <h2>Settings</h2>
                <div>
                    Start count:<input onChange={onChangeMaxCountHandler} className={'input'} type="number"/>
                </div>
                <div>
                    Max count:<input onChange={(e) => console.log(e.currentTarget.value)} className={'input'} type="number"/>
                </div>
                <div className={'btn-container'}>
                    <SuperButton name={'Set'} callBack={() => {}} isDisable={false}/>
                </div>
            </div>
        </>
    );
}

export default App;
