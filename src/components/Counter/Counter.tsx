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
}

const Counter:FC<CounterPropsType> = ({count,maxCount,disabledDisplay,errMessage,error,inc,reset,isDisableIcn,isDisableReset}) => {
    return (
        <div className="counter">
            <Display count={count} maxCount={maxCount} disabledDisplay={disabledDisplay} error={error} errMessage={errMessage}/>
            <div className={'btn-container'}>
                <SuperButton name={'Inc'} callBack={inc} isDisable={isDisableIcn}/>
                <SuperButton name={'Reset'} callBack={reset} isDisable={isDisableReset}/>
            </div>
        </div>
    );
};

export default Counter;