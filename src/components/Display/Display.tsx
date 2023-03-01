import React, {FC} from 'react';
type DisplayPropsType = {
    count: number
    maxCount: number
}
export const Display: FC<DisplayPropsType> = ({count, maxCount}) => {
    return (
        <div className={`display ${count == maxCount ? 'err' : ''}`}>
            {count}
        </div>
    );
};

