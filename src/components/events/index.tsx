//import styled components
import { Container, ImageEvent, TitleEvent, TextEvent,CardEvent, NavigationButton } from './style'
//import images
import SextouPib from '../../assets/img/images-photos/sextouPib.png'
import Idem from '../../assets/img/images-photos/idem.png'
import { ButtonGeneral } from '../buttons/button/style'
//import react
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//Types
import { EventItem, EventsProps } from '../../types/type-events/index'




export default function Events({onEventClick}:EventsProps) {
    const EventsPib: EventItem[] = [
        { image: SextouPib, name: 'Sextou PIB',title: 'Sextou PIB', data: "Todas Sextas-Feiras" },
        { image: Idem, name: 'Idem', title: 'IDEM', data: "25/02/2023 - 27/02/2023" },
        { image: SextouPib, name: 'Sextou PIB', title: 'Sextou PIB', data: "Todas Sextas-Feiras" },
        { image: Idem, name: 'Idem',title: 'IDEM PIB', data: "25/02/2023 - 27/02/2023" },
        { image: SextouPib, name: 'Sextou PIB',title: 'Sextou PIB', data: "Todas Sextas-Feiras" },
        { image: Idem, name: 'Idem',title: 'IDEM PIB', data: "25/02/2023 - 27/02/2023" }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const navigate = useNavigate();
    const accessHappens = ()=>{
      navigate('/acontece-pib')
    }
    const handleNext = () => {
        setSlideIn(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 3) % EventsPib.length);
            setSlideIn(true);
        }, 300);
    };

    const handlePrev = () => {
        setSlideIn(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 3 + EventsPib.length) % EventsPib.length);
            setSlideIn(true);
        }, 300);
    };

    const displayedEvents = window.innerWidth <= 768 
    ? EventsPib.slice(currentIndex, currentIndex + 1)
    : EventsPib.slice(currentIndex, currentIndex + 3);
    return (
        <Container>
            <NavigationButton onClick={handlePrev}>{"<"}</NavigationButton>
            {displayedEvents.map((programming, index) => (
                
                <CardEvent key={index} slideIn={slideIn} onClick={() => onEventClick(programming)}>
                    <ImageEvent  src={programming.image} alt={`Imagem ${index}`} />
                    <TitleEvent>{programming.name}</TitleEvent>
                    
                    <TextEvent>{programming.data}</TextEvent>                    
                    <ButtonGeneral onClick={() => accessHappens()} >VER MAIS</ButtonGeneral>
                    
                </CardEvent>
            ))}
            <NavigationButton onClick={handleNext}>{">"}</NavigationButton>

        </Container>
    )
}