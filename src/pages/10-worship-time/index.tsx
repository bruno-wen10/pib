//import componenets
import BackgroudVideoPage from "../../components/backgroud-page/backgroud-video";

// import images-videos
import VideoBackgaund from "../../assets/gif/videobackgraud-two.mp4";
//import VideoBackground1 from '../../assets/gif/louvor-gif.mp4'
//impor styled componenets
import TitlePages from "../../components/Font/title";
import { BorderContainerStyled, ContainerButton} from "./styled";
import { BorderContainer } from "./styled";
//import Hooks react
import { useContext } from "react";
import { CultDaysContext } from "../../service/context-cult-day";
import { ButtonGeneral } from "../../components/buttons/button/style";
import { useNavigate } from "react-router-dom";

export default function WorshipTime() {
  const context = useContext(CultDaysContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("CultDaysList deve ser usado dentro de um CultDaysProvider");
  }

  const { agendaCultDays, loading, error } = context;

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const handleEventClick = () => {
    
    navigate("/acontece-pib");
  }

  return (
    <div>
      <BackgroudVideoPage videoUrl={VideoBackgaund} />
        <TitlePages color="#FFFFFF" >Horário de Culto</TitlePages>
        <BorderContainerStyled >
        
      {agendaCultDays.map((cultDay) => (
        <BorderContainer key={cultDay.id} style={{   }}>
          <h2>{cultDay.day}</h2>
          <strong>{cultDay.times.join(", ")}</strong>
          <p>{cultDay.description}</p>

          {/* Verifica se o campo extra é um objeto */}
          {cultDay.extra && typeof cultDay.extra === "object" && (
            <div>
              <strong>{cultDay.extra.time}</strong>
              <p>{cultDay.extra.description}</p>
            </div>
          )}

          {/* Verifica se o campo extra é uma string */}
          {cultDay.extra && typeof cultDay.extra === "string" && (
            <p>{cultDay.extra}</p>
          )}
        </BorderContainer>
      ))}
          
      </BorderContainerStyled>

      <ContainerButton> 
                            {/* Colocar acesso a pagina ao vivo que falta ser criada */}
      <ButtonGeneral onClick={() => handleEventClick()}>VER CULTO AO VIVO</ButtonGeneral>
      
      </ContainerButton>      
      
    </div>
  );
}
