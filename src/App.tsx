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
        newMinCount >= maxCount || newMinCount < 0 ? setError(true) : setError(false)
        setMinCount(+e.currentTarget.value)
    }
    const setMaxInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxCount = (+e.currentTarget.value)
        setDisabledDisplay(true)
        newMaxCount <= minCount || newMaxCount <= 0 ? setError(true) : setError(false)
        setMaxCount(+e.currentTarget.value)
    }

    const setNewValues = () => {
        setCount(minCount)
        localStorage.setItem('minCount',JSON.stringify(minCount))
        localStorage.setItem('maxCount',JSON.stringify(maxCount))
        setDisabledDisplay(false)
    }

    useEffect(() => {
        let minCountLS = localStorage.getItem('minCount')
        let maxCountLS = localStorage.getItem('maxCount')
        if(minCountLS && maxCountLS) {
            setMinCount(JSON.parse(minCountLS))
            setCount(JSON.parse(minCountLS))
            setMaxCount(JSON.parse(maxCountLS))
        }
    },[])

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
