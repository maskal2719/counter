import React, {FC} from 'react';
import {Display} from "../Display/Display";
import {SuperButton} from "../SuperButton/SuperButton";

type CounterPropsType = {
    count: number
    maxCount: number
    disabledDisplay: boolean
    error: boolean
    errMessage: string
    inc: ()=> void
    reset: () => void
    isDisableIcn: boolean
    isDisableReset: boolean
    minCount: number
}

const Counter:FC<CounterPropsType> = ({count,maxCount,disabledDisplay,errMessage,error,inc,reset,isDisableIcn,isDisableReset, minCount}) => {
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