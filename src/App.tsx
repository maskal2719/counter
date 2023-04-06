import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Setting from "./components/Setting/Setting";

function App() {

    const errMessage = 'Error'

    const [count, setCount] = useState<number>(0)
    const [minCount, setMinCount] = useState<number>(0)
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
        setCount(0)
        setDisabledDisplay(true)
        newMinCount >= maxCount || newMinCount < 0 ? setError(true) : setError(false)
        setMinCount(newMinCount)
    }
    const setMaxInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxCount = (+e.currentTarget.value)
        setCount(0)
        setDisabledDisplay(true)
        newMaxCount <= minCount || newMaxCount <= 0 ? setError(true) : setError(false)
        setMaxCount(newMaxCount)
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
                     maxCount={maxCount}
                     minCount={minCount}
            />

            <Setting maxCount={maxCount}
                     minCount={minCount}
                     isDisableSet={isDisableSet}
                     setMaxInputCount={setMaxInputCount}
                     setMinInputCount={setMinInputCount}
                     setNewValues={setNewValues}/>
        </>
    );
}

export default App;
