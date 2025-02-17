import {Image} from '../footer-follow/style'
import Whatsapp from '../../../../assets/img/whatsapp.png'
import Telefone from '../../../../assets/img/telefone.png'
import Email from '../../../../assets/img/email.png'
//import styled components 
import { Title,InfoText } from '../../../../assets/global-style/styled'

export default function FooterContact() {
    return (
        <div>
            <Title>Entre em Contato:</Title>
            <a href="">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={Whatsapp} alt="whatsapp" />
                <InfoText>Envie um WhatsApp</InfoText>
                </div>  
               
            </a>
            <a href="">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={Telefone} alt="whatsapp" />
                <InfoText>(16) 3403-4383</InfoText>
                </div>     
               
            </a>
            <a href="">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={Email} alt="whatsapp" />
                <InfoText>pibfranca@gmail.com</InfoText>
                </div>     
               
            </a>
            <a href="https://sis.sistemaprover.com.br/frontend/site/politica-privacidade?t=b58887875c337d7c4207d1d24b0128e7">
                <div >
                <span>Política de Privacidade</span>
                </div>     
               
            </a>


            
            
        </div>
    )
}