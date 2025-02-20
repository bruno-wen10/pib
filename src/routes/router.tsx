import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseLayout from "../components/Base-layout";
//import Comnponentes Pages
import Home from "../pages/1-HOME/home";
import PIB from "../pages/2-PIB/pib";
import Ministerios from "../pages/3-MINISTERIOS/ministerios";
import AgendaWeek from "../pages/11-agendas";
import WorshipTime from "../pages/10-worship-time";
import ItHappens from "../pages/12-it-happens";
import EveryoneEvents from "../pages/13-everyone-events";
import { EventsProvider } from "../service/context";

export default function Router() {
  return (
    <EventsProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          
          <Route path="/PIB" element={<PIB />} />
          <Route path="/ministerios" element={<Ministerios />}/>
          <Route path="/agenda-semanal" element={<AgendaWeek />} />
          <Route path="/horario-dos-cultos" element={<WorshipTime />} />
          <Route path="/acontece-pib" element={<ItHappens />} />
          <Route path="/todos-os-eventos" element={<EveryoneEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </EventsProvider>
  );
}
