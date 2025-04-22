import {
  BackgroundContainer,
  BackgroundVideo,
} from "../../../pages/13-everyone-events/style";

interface BackgroudVideoPageProps {
  videoUrl: string;
}
export default function BackgroudVideoPage({
  videoUrl,
}: BackgroudVideoPageProps) {
  return (
    
      <BackgroundContainer>
        <BackgroundVideo filterBlue="10px" autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </BackgroundVideo>
      </BackgroundContainer>
    
  );
}
