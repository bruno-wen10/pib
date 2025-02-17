//import { ReactNode } from "react";

//import styled componenets
import { ButtonContainer, } from './style';


interface ButtonLinksProps {
    children: string;
    url?: string;
}

export default function ButtonLinks({ children, url }: ButtonLinksProps) {

    return(
        <>
        <a href={url} target="_blank" rel="noreferrer">
            <ButtonContainer>{children}</ButtonContainer>
        </a>
        </>
    )

}