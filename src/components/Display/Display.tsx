import React, {FC} from 'react';
type DisplayPropsType = {
    count: number
    maxCount: number
    disabledDisplay: boolean
    error: boolean
    errMessage: string
    minCount: number
}
export const Display: FC<DisplayPropsType> = ({count, maxCount, disabledDisplay,error,errMessage, minCount}) => {
    const errorClassName = error || count === maxCount ? 'err' :  ''
    const display = minCount >= maxCount || minCount < 0 ? errMessage : disabledDisplay ? 'Press set btn' : count

    return (
        <div className={`display ${errorClassName}`}>
            {display}
        </div>
    );
};

