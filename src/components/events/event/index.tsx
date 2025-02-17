//import styled components
import {ContainerEvent, ContainerIformation, TitleEvent, DescriptionEvent, DateEvent} from "./style"
// import componnets
import SocialMediaShare from "../../social-media"
//import Types
import { EventItem } from "../../../types/type-events/index"





export default function SelectedEvent({image, name, data, title, description}: EventItem) {
    return (
        <ContainerEvent>
             
                 <img src={image} alt={name} />
                 <ContainerIformation>
                     <TitleEvent >{title}</TitleEvent>
                    <DateEvent>{data}</DateEvent>
                    <DescriptionEvent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim doloribus commodi est repellendus aut laborum, ut iusto quia quam eaque eius eveniet corrupti hic harum quas, molestiae natus! In.{description}</DescriptionEvent>                 
                    <hr />                 
                    <SocialMediaShare/>
                </ContainerIformation>                 
             
        </ContainerEvent>
    )
}