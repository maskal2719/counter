import TextField from '@mui/material/TextField';
import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & {
    error?: boolean
}

const SuperInput:FC<DefaultInputPropsType> = ({type,title,onChange,value,className, error}) => {
    return (
        <div>
            <TextField type={type} label={title} variant="outlined" value={value} onChange={onChange} error={error}/>
            {/*<input type={type} className={className} onChange={onChange} value={value}/>*/}
        </div>
    );
};

export default SuperInput;