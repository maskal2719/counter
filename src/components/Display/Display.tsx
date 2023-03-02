import React, {FC} from 'react';
type DisplayPropsType = {
    count: number
    maxCount: number
    disabledDisplay: boolean
    error: boolean
    errMessage: string
}
export const Display: FC<DisplayPropsType> = ({count, maxCount, disabledDisplay,error,errMessage}) => {

    // const finalClassName = `${s.button} + ${xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`;
    return (
        <div className={`display ${count === maxCount ? 'err' : ''}`}>
            {disabledDisplay ? 'Press set value' : error ? 'errMessage' : count}
        </div>
    );
};

