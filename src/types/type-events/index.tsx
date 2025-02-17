


export interface EventItem {
    image: string;
    name: string;
    title: string;
    data: string;
    description?: string;
   
  }


 export  interface EventsProps {
    onEventClick: (event: EventItem) => void;
  }

