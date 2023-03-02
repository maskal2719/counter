import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

const SuperInput:FC<DefaultInputPropsType> = ({type,title,onChange,value,className}) => {
    return (
        <div>
            {title}<input type={type} className={className} onChange={onChange} value={value}/>
        </div>
    );
};

export default SuperInput;