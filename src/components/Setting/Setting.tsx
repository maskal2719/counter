import React, {ChangeEvent, FC} from 'react';
import SuperInput from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {
    disabledDisplayAC,
    maxCounterValueAC,
    minCounterValueAC,
    newSettingAC,
    StateType
} from "../../state/counter-reducer";

type SettingPropsType = {
    error: boolean
    setError: (value: boolean) => void
}

const Setting: FC<SettingPropsType> = ({error, setError}) => {

    const state = useSelector<AppRootState, StateType>(state => state.counter)
    const dispatch = useDispatch()

    let maxCount = state.maxCount
    let disabledDisplay = state.disabledDisplay
    let minCount = state.minCount

    const isDisableSet = !disabledDisplay || error
    const setMinInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinCount = (+e.currentTarget.value)
        dispatch(newSettingAC(0))
        dispatch(disabledDisplayAC(true))
        newMinCount >= maxCount || newMinCount < 0 ? setError(true) : setError(false)
        dispatch(minCounterValueAC(newMinCount))
    }

    const setMaxInputCount = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxCount = (+e.currentTarget.value)
        dispatch(newSettingAC(0))
        dispatch(disabledDisplayAC(true))
        newMaxCount <= minCount || newMaxCount <= 0 ? setError(true) : setError(false)
        dispatch(maxCounterValueAC(newMaxCount))
    }
    const setNewValues = () => {
        dispatch(newSettingAC(minCount))
        dispatch(disabledDisplayAC(false))
    }


    const inputStartError = minCount < 0 || minCount === maxCount
    const inputMaxError = maxCount <= 0 || maxCount <= minCount

    return (
        <div className={'setting'}>
            <h2>Settings</h2>
            <div className={'setting-inputs'}>
                <SuperInput title={'Start count:'} value={minCount} onChange={setMinInputCount} error={inputStartError}
                            type={"number"}/>
                <SuperInput title={'Max count:'} value={maxCount} onChange={setMaxInputCount} error={inputMaxError}
                            type={"number"}/>
            </div>

            <div className={'btn-container'}>
                <SuperButton name={'Set'} callBack={setNewValues} isDisable={isDisableSet}/>
            </div>
        </div>
    );
};

export default Setting;