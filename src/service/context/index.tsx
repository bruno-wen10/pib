//import images 
import SextouPib from '../../assets/img/images-photos/sextouPib.png'
import Idem from '../../assets/img/images-photos/idem.png'
import  { createContext, ReactNode, useContext, useState } from "react";
//import types
import { EventItem } from "../../types/type-events";




  export interface EventsContextProps {
    events: EventItem[];
    setEvents: React.Dispatch<React.SetStateAction<EventItem[]>>;
  }
  export interface EventsProviderProps {
    children: ReactNode;
}
export const  EventsContext = createContext<EventsContextProps | undefined>({
  events: [],
  setEvents: () => {}
})




export const EventsProvider = ({ children }: EventsProviderProps) =>{
    const [events, setEvents] = useState<EventItem[]>([
        {id:1, image: SextouPib, name: 'Sextou PIB', title: 'Sextou PIB', data: "Todas Sextas-Feiras", day:"15", month:"Janeiro" },
        {id:1, image: Idem, name: 'Idem', title: 'IDEM', data: "25/02/2023 - 27/02/2023", day:"15", month:"Janeiro"},
        {id:1, image: SextouPib, name: 'Sextou PIB', title: 'Sextou PIB', data: "Todas Sextas-Feiras", day:"15", month:"Janeiro" },
        {id:1, image: Idem, name: 'Idem', title: 'IDEM PIB', data: "25/02/2023 - 27/02/2023", day:"15", month:"Janeiro"  },
        {id:1, image: SextouPib, name: 'Sextou PIB', title: 'Sextou PIB', data: "Todas Sextas-Feiras", day:"15", month:"Janeiro"  },
        {id:1, image: Idem, name: 'Idem', title: 'IDEM PIB', data: "25/02/2023 - 27/02/2023" , day:"15", month:"Janeiro"  }
      ]);
    
    return(
        <EventsContext.Provider value={{ events, setEvents }}>
            {children}
        </EventsContext.Provider>
    )
}

export const useEvents = (): EventsContextProps => {
    const context = useContext(EventsContext);
    if (!context) {
      throw new Error('useEvents must be used within an EventsProvider');
    }
    return context;
  };