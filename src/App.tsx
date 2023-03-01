import React, {ChangeEvent, RefObject, useRef, useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {SuperButton} from "./components/SuperButton/SuperButton";


function App() {



    const [count, setCount] = useState<number>(0)
    const [min, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const isDisableIcn = count >= maxCount
    const isDisableReset = count === min


    const inc = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(min)
    }

    const setMinInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCount(+e.currentTarget.value)
    }

    const setMaxInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(+e.currentTarget.value)
    }

    const onClickHandler = () => {
        setCount(min)
    }


    return (
        <>
            <div className="container">
                <Display count={count} maxCount={maxCount}/>
                {/*{count >= 5 && <div className={'err'}>Error</div> }*/}
                <div className={'btn-container'}>
                    <SuperButton name={'Inc'} callBack={inc} isDisable={isDisableIcn}/>
                    <SuperButton name={'Reset'} callBack={reset} isDisable={isDisableReset}/>
                </div>
            </div>
            <div className={'setting'}>
                <h2>Settings</h2>
                <div>
                    Start count:<input value={min} onChange={setMinInputCount} className={'input'} type="number"/>
                </div>
                <div>
                    Max count:<input value={maxCount} onChange={setMaxInputCount} className={'input'} type="number"/>
                </div>
                <div className={'btn-container'}>
                    <SuperButton name={'Set'} callBack={onClickHandler} isDisable={false}/>
                </div>
            </div>
        </>
    );
}

export default App;
