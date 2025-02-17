import { FooterContainer, FooterSection } from './style'
//import componnets
import FooterAdress from './footer-adress'
import FooterFollow from './footer-follow'
import FooterContact from './footer-contact'
//import images
import PIB from '../../../assets/img/logoPIB.png'


export default function Footer() {
    return (
       <FooterContainer>
         <FooterSection>
            <div>
                <FooterAdress/>
            </div>
            <div>
                <FooterContact/>
            </div>
            <div>
                <FooterFollow/>
                
            </div>  
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '5%'}}>
               <img src={PIB} alt="PIB" />
               
             </div> 
                   
        </FooterSection>

        <h6 style={{marginTop:'5px'}}>© Primeira Igreja Batista em Franca ® 2025. TODOS OS DIREITOS RESERVADOS.</h6>        
         
       </FooterContainer>
    )
}