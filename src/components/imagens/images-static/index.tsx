import { ReactNode } from "react";
//import styled components
import { Container,  Content } from "./styled";

interface BackgroundSectionProps {
    children: ReactNode;
    imageUrl: string;
    videoUrl?: string
}

const BackgroundSection = ({ children, imageUrl }: BackgroundSectionProps) => {
    return (
        <Container style={{ backgroundImage: `url(${imageUrl})` }}>
            <Content>{children}</Content>
        </Container>
    );
};

export default BackgroundSection;