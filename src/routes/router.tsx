import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseLayout from "../components/Base-layout";
//import Comnponentes Pages
import Home from "../pages/1-HOME/home";

import QuemSomos from "../pages/2-PIB/quem-somos";
import Ministerios from "../pages/3-MINISTERIOS/ministerios";
import AgendaWeek from "../pages/11-agendas";
import WorshipTime from "../pages/10-worship-time";
import ItHappens from "../pages/12-it-happens";
import EveryoneEvents from "../pages/13-everyone-events";
import OQueCremos from "../pages/2-PIB/o-que-cremos";
import { EventsProvider } from "../service/context";
import { CultDayProvider } from "../service/context-cult-day/index";
import { ScheduleWeekProvider } from "../service/context-scheduleWeek";
import MissaoVisaoValores from "../pages/2-PIB/missao-visao-valores";
import Kids from "../pages/3-MINISTERIOS/kids";
import VolunteerForm from "../components/inscription/voluntario";

export default function Router() {
  return (
    <EventsProvider>
      <CultDayProvider>
        <ScheduleWeekProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BaseLayout />}>
                <Route path="/" element={<Home />} />                
                <Route path="/pib/quem-somos" element={<QuemSomos />} />
                <Route path="/pib/o-que-cremos" element={<OQueCremos />} />
                <Route path="/pib/missao-visao-valores" element={<MissaoVisaoValores />} />                
                <Route path="/ministerios" element={<Ministerios />} />
                <Route path="/ministerios/kids" element={<Kids />} />
                <Route path="/agenda-semanal" element={<AgendaWeek />} />
                <Route path="/horario-dos-cultos" element={<WorshipTime />} />
                <Route path="/acontece-pib" element={<ItHappens />} />
                <Route path="/todos-os-eventos" element={<EveryoneEvents />} />
                <Route path="/incriçoes-voluntarios" element={<VolunteerForm />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ScheduleWeekProvider>
      </CultDayProvider>
    </EventsProvider>
  );
}
