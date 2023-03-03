import React, {ChangeEvent, FC} from 'react';
import SuperInput from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";

type SettingPropsType = {
    minCount: number
    maxCount: number
    setMinInputCount: (e: ChangeEvent<HTMLInputElement>) => void
    setMaxInputCount: (e: ChangeEvent<HTMLInputElement>) => void
    setNewValues: () => void
    isDisableSet: boolean
}

const Setting: FC<SettingPropsType> = ({minCount,maxCount,setMinInputCount,setMaxInputCount, isDisableSet, setNewValues}) => {
    const inputStartError = minCount < 0 || minCount === maxCount ? 'input_error' : ''
    const inputMaxError = maxCount <= 0 || maxCount <= minCount ? 'input_error' : ''

    return (
        <div className={'setting'}>
            <h2>Settings</h2>
            <SuperInput title={'Start count:'} value={minCount} onChange={setMinInputCount} className={`input ${inputStartError}`} type={"number"}/>
            <SuperInput title={'Max count:'} value={maxCount} onChange={setMaxInputCount} className={`input ${inputMaxError}`} type={"number"}/>

            <div className={'btn-container'}>
                <SuperButton name={'Set'} callBack={setNewValues} isDisable={isDisableSet}/>
            </div>
        </div>
    );
};

export default Setting;