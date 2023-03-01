import React, {FC} from 'react';

export type SuperButtonPropsType = {
    name: string
    callBack: () => void
    isDisable: boolean
}
export const SuperButton: FC<SuperButtonPropsType> = ({name, callBack, isDisable}) => {
    const onclickHandler = () => {
        callBack()
    }

    return (
        <button className={'btn'} disabled={isDisable} onClick={onclickHandler}>{name}</button>
    );
};