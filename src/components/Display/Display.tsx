import React, {FC} from 'react';
type DisplayPropsType = {
    count: number
}
export const Display: FC<DisplayPropsType> = ({count}) => {
    return (
        <div className={`display ${count > 4 ? 'err' : ''}`}>
            {count}
        </div>
    );
};

