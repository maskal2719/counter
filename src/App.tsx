import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setting from "./components/Setting/Setting";

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
    const errorInputClass = error ? 'input_error' : '';

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

    const setNewValues = () => {
        setCount(minCount)
        setDisabledDisplay(false)
    }

    return (
        <>
            <Counter error={error}
                     count={count}
                     disabledDisplay={disabledDisplay}
                     reset={reset}
                     errMessage={errMessage}
                     inc={inc}
                     isDisableIcn={isDisableIcn}
                     isDisableReset={isDisableReset}
                     maxCount={maxCount}/>
            <Setting maxCount={maxCount}
                     minCount={minCount}
                     isDisableSet={isDisableSet}
                     setMaxInputCount={setMaxInputCount}
                     setMinInputCount={setMinInputCount}
                     errorInputClass={errorInputClass}
                     setNewValues={setNewValues}/>
        </>
    );
}

export default App;
