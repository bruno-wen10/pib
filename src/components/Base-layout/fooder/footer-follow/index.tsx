import Facebook from '../../../../assets/img/facebook.png'
import Instagram from '../../../../assets/img/instagram.png'
import Youtube from '../../../../assets/img/youtube.png'
import Spotyfi from '../../../../assets/img/spotify.png'
import GooglePlay from '../../../../assets/img/google-play.png'
//import styled components
import { Image } from './style'
import { Title } from '../../../../assets/global-style/styled'


export default function FooterFollow() {
    return(
        <div>
            <Title>Siga-nos:</Title>
            <div>
                <a href="https://www.facebook.com/pib.franca" target="_blank" rel="noreferrer">
                    <Image src={Facebook} alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/pibfranca/" target="_blank" rel="noreferrer">
                    <Image src={Instagram} alt="instagram"/>
                </a>
                <a href="https://open.spotify.com/show/2ZmI5xCVE5lx1jEulpICiU" target="_blank" rel="noreferrer">
                    <Image src={Spotyfi} alt="spotyfi" />
                </a>
                <a href="https://www.youtube.com/@PIBFranca" target="_blank" rel="noreferrer">
                    <Image src={Youtube} alt="youtube"/>
                </a>

                
            </div>
            <div>
               <a href="">
               <img src={GooglePlay} alt="facebook"/>
               </a>
            </div>
        </div>
    )
}