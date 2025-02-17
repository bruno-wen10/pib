import ButtonLinks from "../../../buttons/button-maps/button-maps";
//import styled from "styled-components";
//import { FooterText } from "../style";
import { Title, InfoText } from "../../../../assets/global-style/styled";




export default function FooterAdress() {
    return(
        <div>
                       <div>
                       <Title>Endereço:</Title>
                          <InfoText>
                          R. José de Alencar, 2601 - Estacao, Franca - SP, 14405-208
                        </InfoText>
                       </div>
        
                       <div style={{marginTop: '20px'}}>
                        <ButtonLinks children={'Ver Mapa'} url="https://surl.li/dzurkq"/>
                       </div>
       </div>
    )
}