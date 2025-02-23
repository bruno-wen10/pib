import { ReactNode } from "react";



export interface EventItem {
    id: number;
    image: string;
    name: string;
    title: string;
    data: string ;
    day?: string;
    month?: string;
    description?: string;
   
  }


 export  interface EventsProps {
    onEventClick: (event: EventItem) => void;
  }

  export interface EventsContextProps {
    events: EventItem[];
    setEvents: React.Dispatch<React.SetStateAction<EventItem[]>>;
  }
  export interface EventsProviderProps {
    children: ReactNode;
}