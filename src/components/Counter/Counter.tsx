import React, {FC} from 'react';
import {Display} from "../Display/Display";
import {SuperButton} from "../SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {incrementCounterAC, resetCounterAC, StateType} from "../../state/counter-reducer";

type CounterPropsType = {
    error: boolean
    errMessage: string
}

const Counter:FC<CounterPropsType> = ({error, errMessage}) => {

    const state = useSelector<AppRootState, StateType>(state => state.counter)
    const dispatch = useDispatch()

    let count = state.count
    let maxCount = state.maxCount
    let disabledDisplay = state.disabledDisplay
    let minCount = state.minCount

    const isDisableIcn = count >= maxCount || disabledDisplay
    const isDisableReset = count === minCount || disabledDisplay

    const inc = () => {
        if (count < maxCount) {
            dispatch(incrementCounterAC())
        }
    }
    const reset = () => {
        dispatch(resetCounterAC())
    }


    return (
        <div className="counter">
            <Display count={count} maxCount={maxCount} disabledDisplay={disabledDisplay} error={error} errMessage={errMessage} minCount={minCount}/>
            <div className={'btn-container'}>
                <SuperButton name={'Inc'} callBack={inc} isDisable={isDisableIcn}/>
                <SuperButton name={'Reset'} callBack={reset} isDisable={isDisableReset}/>
            </div>
        </div>
    );
};

export default Counter;