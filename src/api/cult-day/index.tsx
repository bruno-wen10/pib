import axios from "axios";
import { CultDay } from "../../types/type-cult-day";

export const api = axios.create({
  baseURL: 'http://localhost:3001' // Porta do json-server
});

export const getCultDays = async (): Promise<CultDay[]> => {
  try {
    const response = await api.get('/cultDays');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o horário de culto', error);
    throw new Error("Erro ao buscar o horário de culto: " + error);
  }
};

