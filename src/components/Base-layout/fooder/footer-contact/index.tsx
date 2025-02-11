import {Image} from '../footer-follow/style'
import Whatsapp from '../../../../assets/img/whatsapp.png'
import Telefone from '../../../../assets/img/telefone.png'
import Email from '../../../../assets/img/email.png'

export default function FooterContact() {
    return (
        <div>
            <h1>Entre em Contato:</h1>
            <a href="">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={Whatsapp} alt="whatsapp" />
                <span>Envie um WhatsApp</span>
                </div>  
               
            </a>
            <a href="">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={Telefone} alt="whatsapp" />
                <span>(16) 3403-4383</span>
                </div>     
               
            </a>
            <a href="">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={Email} alt="whatsapp" />
                <span>pibfranca@gmail.com</span>
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