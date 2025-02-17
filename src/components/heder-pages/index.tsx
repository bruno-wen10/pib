import { ContainerOne, H1, H3, StyledHr, StyledHrTwo } from "./style";

interface AgendaHeaderProps {
    title: string;
    description: string;
  }

export default function HedearPages({title, description}: AgendaHeaderProps) {
    return (
        <>
        <ContainerOne>
                <StyledHr />
                <StyledHrTwo />
                  <H1>{title}</H1>
                  <H3>{description}</H3>
                  <StyledHr />
                  <StyledHrTwo />
        </ContainerOne>
                <StyledHr />
                <StyledHrTwo />
        </>
    )
}