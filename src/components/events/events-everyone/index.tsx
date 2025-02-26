import { useContext, useState } from "react";
import { Container, ImagemEvent, LoadMoreButton, TitleEvent } from "./styled";
import { EventsContext } from "../../../service/context";
import { useNavigate } from "react-router-dom";
import { ButtonGeneral } from "../../buttons/button/style";
import { TransitionGroup } from "react-transition-group";
import { EventItem } from "../../../types/type-events";

export default function EventsEveryone() {
    const context = useContext(EventsContext);
    const navigate = useNavigate();
    const [visibleEvents, setVisibleEvents] = useState(4); // Estado para controlar o número de eventos visíveis

    if (!context) {
        throw new Error('EventsContext must be used within an EventsProvider');
    }

    const { events } = context;

    const loadMoreEvents = () => {
        setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 4); 
    };

    const handleEventClick = (event: EventItem) => {
        console.log(event);
        navigate('/acontece-pib', { state: { event } });
      };

    return (
        <>
         <TitleEvent>Confira e Participe!</TitleEvent>
            <TransitionGroup>
                {events.slice(0, visibleEvents).map((event, index) => (
                    
                        <Container reverse={index % 2 !== 0}>
                            <ImagemEvent src={event.image} alt={event.name} />
                            <div style={{flex: 1, padding: '20px'}}>
                                <h2>{event.name}</h2>
                                <strong>{event.title}</strong>   
                                
                                <p>{event.data}</p>
                                <p style={{whiteSpace: 'pre-line'}}>{event.description}</p>
                                <ButtonGeneral onClick={() => handleEventClick(event)}>VER MAIS</ButtonGeneral>
                            </div>
                        </Container>
                    
                ))}
            </TransitionGroup>
            {visibleEvents < events.length && (
                <LoadMoreButton onClick={loadMoreEvents}>Carregar Mais +</LoadMoreButton>
            )}
        </>
    );
}