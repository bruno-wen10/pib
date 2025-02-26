//import componenets
import BackgroudVideoPage from "../../components/backgroud-page/backgroud-video";
import BorderContainer from "../../components/border-container";
// import images-videos
import VideoBackgaund from "../../assets/gif/backgraud-three.mp4";
//impor styled componenets
import TitlePages from "../../components/Font/title";
import { BorderContainerStyled} from "./styled";


export default function WorshipTime() {
  return (
    <div>
      <BackgroudVideoPage videoUrl={VideoBackgaund} />
        <TitlePages color="#FFFFFF" >Horário de Culto</TitlePages>
      <BorderContainerStyled >
        <BorderContainer height='40vh'  >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TitlePages fonteSize="2rem">Domingo</TitlePages>
                <strong style={{ marginTop: "20px", fontSize: "20px"}}>9h | 19h</strong>
                <p >Culto de Adoração e Celebração</p>
                <strong style={{ marginTop: "20px", fontSize: "20px"}} >10h</strong>
                <p >EBD</p>
            </div>
        </BorderContainer>
        <BorderContainer height='40vh' >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TitlePages fonteSize="2rem" >Quarta-Feira</TitlePages>
                <span style={{ marginTop: "20px", fontSize: "20px" }} >20h</span>
                <p >Culto de Oração</p>
            </div>
        </BorderContainer>
        <BorderContainer height='40vh' >
             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TitlePages fonteSize="2rem">Sábado</TitlePages>
                <span  style={{ marginTop: "20px", fontSize: "20px"}}>20h</span>
                <p >Estação Jovem (Realizado de quinze em quinze dias. )</p>
                <p >Teens PIB (Realizado de quinze em quinze dias. )</p>
                <p>Intercalados</p>
            </div>
        </BorderContainer>
        


      </BorderContainerStyled>
    </div>
  );
}
