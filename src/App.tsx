import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {SuperButton} from "./components/SuperButton/SuperButton";


function App() {

    const errMessage = 'Error'

    const [count, setCount] = useState<number>(0)
    const [minCount, setMinCountCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)
    const [disabledDisplay, setDisabledDisplay] = useState<boolean>(false)

    const isDisableIcn = count >= maxCount || disabledDisplay
    const isDisableReset = count === minCount || disabledDisplay
    const isDisableSet = !disabledDisplay || error


    const inc = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(minCount)
    }

    const setMinInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinCount = (+e.currentTarget.value)
        setDisabledDisplay(true)
        newMinCount >= maxCount ? setError(true) : setError(false)
        setMinCountCount(+e.currentTarget.value)
    }

    const setMaxInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxCount = (+e.currentTarget.value)
        setDisabledDisplay(true)
        newMaxCount <= minCount || newMaxCount <= 0 ? setError(true) : setError(false)
        setMaxCount(+e.currentTarget.value)
    }


    const onClickHandler = () => {
        setCount(minCount)
        setDisabledDisplay(false)
    }


    return (
        <>
            <div className="container">
                <Display count={count} maxCount={maxCount} disabledDisplay={disabledDisplay} error={error} errMessage={errMessage}/>
                {/*{count >= 5 && <div className={'err'}>Error</div> }*/}
                <div className={'btn-container'}>
                    <SuperButton name={'Inc'} callBack={inc} isDisable={isDisableIcn}/>
                    <SuperButton name={'Reset'} callBack={reset} isDisable={isDisableReset}/>
                </div>
            </div>
            <div className={'setting'}>
                <h2>Settings</h2>
                {error ? <div className={'err'}>{errMessage}</div> : ''}
                <div>
                    Start count:<input value={minCount} onChange={setMinInputCount}  className={`input ${error ? 'input_error' : ''}`} type="number"/>
                </div>
                <div>
                    Max count:<input value={maxCount} onChange={setMaxInputCount} className={`input ${error ? 'input_error' : ''}`} type="number"/>
                </div>
                <div className={'btn-container'}>
                    <SuperButton name={'Set'} callBack={onClickHandler} isDisable={isDisableSet}/>
                </div>
            </div>
        </>
    );
}

export default App;
