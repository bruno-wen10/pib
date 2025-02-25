//import components
import HomeImages from "../../components/imagens/images-home";
import BackgroundSection from "../../components/imagens/images-static";
import ProgrammingContent from "../../components/ProgrammingContent";
import Events from "../../components/events";
//import images
import Louvor from "../../assets/img/images-photos/louvor.jpg";
import WatchLive from '../../assets/img/Assista-ao-vivo.png'
//import styled components
import { H1, BackgroundColorDiv, AcontecePib, EventContener, AssistaAoVivo, BackdrodLive } from "./style";
import { ButtonGeneral } from "../../components/buttons/button/style";
//import react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
//import types
import { EventItem } from "../../types/type-events/index";
import VideoBackgaund from "../../components/videos-components/video-backgaund";


type ChoiceOption = "cult" | "agenda";

export default function Home() {
  const [optionChosen, setOptionChosen] = useState<ChoiceOption | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refBackgroundColorDiv, inView: inViewBackgroundColorDiv } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const navigate = useNavigate();
  const accessEveryoneEvents = ()=>{
    navigate('/todos-os-eventos')
  }
  const handleEventClick = (event: EventItem) => {
    console.log(event);
    navigate('/acontece-pib', { state: { event } });
  };
  return (
    <div>
      <HomeImages />
      <BackgroundSection imageUrl={Louvor}>
      <H1 ref={ref} isVisible={inView}>Confira nossa Programação!</H1>
        <ProgrammingContent
          optionChosen={optionChosen}
          setOptionChosen={setOptionChosen}
        />
      </BackgroundSection>
      <BackgroundColorDiv ref={refBackgroundColorDiv} isVisible={inViewBackgroundColorDiv} >
        
        <div style={{ paddingBottom: "20px" }}>
          <AcontecePib>ACONTECE PIB</AcontecePib>
          <ButtonGeneral onClick={() => accessEveryoneEvents()}>
            Acesse
          </ButtonGeneral>
        </div>
        <EventContener >
          <Events onEventClick={handleEventClick} />       
          
        </EventContener>
        
      </BackgroundColorDiv>
      <BackdrodLive backgroundImage={WatchLive}>
          <AssistaAoVivo>ASSISTA AO VIVO</AssistaAoVivo>
          <VideoBackgaund videoUrl={""} />
          
        </BackdrodLive>
    </div>
  );
}
