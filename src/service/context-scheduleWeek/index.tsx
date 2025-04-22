
import { ReactNode, createContext, useEffect, useState } from "react";
import { ScheduleWeek } from "../../types/type-schendule";
import { getWeekSchedule } from "../../api/week-schedule";


interface ScheduleWeekContextType {
   children?: ReactNode;
   agendaWeek?: ScheduleWeek[];
   loading?: boolean;
   error?: string | null;
}
export const ScheduleWeekContext = createContext<ScheduleWeekContextType | undefined>(
  undefined);

  export const ScheduleWeekProvider = ({ children }: ScheduleWeekContextType) => {
   const [agendaWeek, setAgendaWeek] = useState<ScheduleWeek[]>([]);

   useEffect(()=>{
      const getApiAgendaWeek = async() => {
         try {
            const data = await getWeekSchedule();
            setAgendaWeek(data);
         } catch (error) {
            console.error("Erro ao buscar a agenda da semana", error);
            throw new Error("Erro ao buscar a agenda da semana" + error);            
         }
      }
      getApiAgendaWeek();
   },[])
    return (
      <ScheduleWeekContext.Provider value={{ agendaWeek }}>
        {children}
      </ScheduleWeekContext.Provider>
    );
  };

  