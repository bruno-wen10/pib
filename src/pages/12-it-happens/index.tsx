
import { useLocation } from 'react-router-dom';
import SelectedEvent from "../../components/events/event";
import { EventItem } from '../../types/type-events';

export default function ItHappens() {
  const location = useLocation();
  const { event } = location.state as { event: EventItem } || {};

  if (!event) {
    return <div>Nenhum evento selecionado.</div>;
  }

  return (
    <SelectedEvent
      id={0}
      image={event.image}
      name={event.name}
      data={event.data}
      title={event.title}
      description={event.description} 
       />
  );
}