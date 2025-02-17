import React from 'react';

import { ButtonGeneral } from './style';

interface ButtonProps {
    onClick: ()=>void
    children: React.ReactNode;
    
}

const Button = ({ children, onClick }: ButtonProps) => {
   

    

    return (
        <ButtonGeneral onClick={onClick} >
            {children}
        </ButtonGeneral>
    );
};

export default Button;