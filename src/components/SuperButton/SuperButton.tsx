import Button from '@mui/material/Button';
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
        <Button size={"large"} variant={!isDisable ? "contained" : "outlined"} disabled={isDisable} onClick={onclickHandler}>{name}</Button>
    );
};