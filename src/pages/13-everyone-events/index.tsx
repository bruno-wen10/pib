
import { BackgroundContainer, BackgroundVideo, ContentContainer } from './style';
import VideoBackgaund from '../../assets/gif/louvor-gif.mp4';
import EventsEveryone from '../../components/events/events-everyone';
const EveryoneEvents = () => {
  return (
    <div>
      <BackgroundContainer>
        <BackgroundVideo autoPlay loop muted>
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