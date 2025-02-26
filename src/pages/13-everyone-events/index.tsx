import {
  BackgroundContainer,
  BackgroundVideo,
  ContentContainer,
} from "./style";
import VideoBackgaund from "../../assets/gif/videobackgraud-two.mp4";
import EventsEveryone from "../../components/events/events-everyone";
const EveryoneEvents = () => {
  return (
    <div>
      <BackgroundContainer>
        <BackgroundVideo filterBlue="10px" autoPlay loop muted>
          <source src={VideoBackgaund} type="video/mp4" />
        </BackgroundVideo>
      </BackgroundContainer>
      <ContentContainer>
        <EventsEveryone />
      </ContentContainer>
    </div>
  );
};

export default EveryoneEvents;
