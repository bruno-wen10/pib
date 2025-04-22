import { createContext, ReactNode, useEffect, useState } from "react";
import { CultDay } from "../../types/type-cult-day";
import { getCultDays } from "../../api/cult-day";


interface CultDayContextType {
  // children?: ReactNode;
  agendaCultDays: CultDay[];
  loading?: boolean;
  error?: string | null;
}

export const CultDaysContext = createContext<CultDayContextType | undefined>(
  undefined
);

 export const CultDayProvider = ({ children }: { children: ReactNode }) => {
  const [agendaCultDays, setAgendaCultDays] = useState<CultDay[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAgendaDoCulto = async () => {
      try {
        const data = await getCultDays();
        setAgendaCultDays(data);
      } catch (error) {
        console.error("Erro ao buscar o horário de culto", error);
        setError("Erro ao buscar o horário de culto" + error);
        throw new Error("Erro ao buscar o horário de culto" + error);
      } finally {
        setLoading(false);
      }
    };

    getAgendaDoCulto();
  }, []);

  return (
    <CultDaysContext.Provider value={{ agendaCultDays, error, loading }}>
      {children}
    </CultDaysContext.Provider>
  );
};




