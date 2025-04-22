
import { ScheduleWeek } from "../../types/type-schendule";
import { api } from "../cult-day";


export const  getWeekSchedule = async(): Promise<ScheduleWeek[]> => {
    try {
        const response = await api.get('/scheduleWeek')
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar o horário de culto', error);
        throw new Error("Erro ao buscar o horário de culto: " + error);
        
    }
}