import { ReactNode } from "react"
//import styled components
import { BorderContainerDiv } from "./style"
interface BorderContainerProps {
    children: ReactNode
    backgroundColor?: string
    colorP?: string
    colorSpan?: string
    height?: string
}

export default function BorderContainer({children, backgroundColor, colorP, colorSpan, height}:BorderContainerProps) {
    return (
        <BorderContainerDiv 
        direction="column" 
        color={backgroundColor} 
        colorP={colorP}
        colorSpan={colorSpan}
        height={height}
        >
            {children}
        </BorderContainerDiv>
    )
}