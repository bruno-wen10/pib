//import { ReactNode } from "react";

//import styled componenets
import { ButtonContainer } from './style';


interface ButtonLinksProps {
    children: string;
}

export default function ButtonLinks({ children }: ButtonLinksProps) {

    return(
        <>
        <a href="https://surl.li/dzurkq" target="_blank" rel="noreferrer">
            <ButtonContainer>{children}</ButtonContainer>
        </a>
        </>
    )

}