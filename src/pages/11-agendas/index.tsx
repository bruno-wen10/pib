//import componenets
import BackgroudVideoPage from "../../components/backgroud-page/backgroud-video";
//import BorderContainer from "../../components/border-container";
//import images-videos
import VideoBackgaund from "../../assets/gif/videobackgraud-two.mp4";
import TitlePages from "../../components/Font/title";
//import styled componenets
import { BorderContainerStyled } from "../10-worship-time/styled";
import { AgendaWeekStyled } from "./style";
//import Hooks react
import { useContext } from "react";
//import context
import { ScheduleWeekContext } from "../../service/context-scheduleWeek";



export default function AgendaWeek() {
    const context = useContext(ScheduleWeekContext)
    if (!context) {
      throw new Error("ScheduleWeekContext deve ser usado dentro de um ScheduleWeekProvider");
    }
    const { agendaWeek } = context;
    return (
      <div>
        <BackgroudVideoPage videoUrl={VideoBackgaund} />
        <TitlePages color="#FFFFFF">Agenda Semanal</TitlePages>
        <BorderContainerStyled direction="column">
          {agendaWeek?.map((agenda) => (
            <AgendaWeekStyled key={agenda.id}>
              <h1>{agenda.day}</h1>
  
              <div>
                <h2>Programações:</h2>
                {agenda.programming.map((item, index) => (
                  <div key={index}>
                    <strong>{item.time} - {item.description}</strong>
                    {item.observation && <p><em>Obs: {item.observation}</em></p>}
                    {item["imageMinisterio"] || item["imageMinisterio"] ? (
                      <p>Ministério: {item["imageMinisterio"] || item["imageMinisterio"]}</p>
                    ) : null}
                  </div>
                ))}
              </div>
  
              {agenda.extra && (
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h4>Extras:</h4>
                  {agenda.extra.map((extra, index) => (
                    <div key={`extra-${index}`}>
                      <p style={{ fontWeight: "bold" }}>{extra.time} - {extra.description}</p>
                      {extra.observation && <p style={{ fontSize: "12px" }}><em>Obs: {extra.observation}</em></p>}
                      {extra["imageMinisterio"] ? (
                        <p style={{ fontSize: "12px" }}>Ministério: {extra["imageMinisterio"]}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </AgendaWeekStyled>
          ))}
        </BorderContainerStyled>
      </div>
    );
}