import ButtonLinks from "../../../buttons/button-maps/button-maps";
import { FooterText } from "../style";




export default function FooterAdress() {
    return(
        <div>
                       <div>
                       <h1>Endereço:</h1>
                          <FooterText>
                          R. José de Alencar, 2601 - Estacao, Franca - SP, 14405-208
                        </FooterText>
                       </div>
        
                       <div style={{marginTop: '20px'}}>
                        <ButtonLinks children={'Ver Mapa'}/>
                       </div>
       </div>
    )
}