import HedearPages from "../../components/heder-pages";
import CultsTable from "../../components/tables/tables-cults";
import { HeaderContainer, PageContainer, TableBackground, TableContainer } from "../11-agendas/style";




export default function WorshipTime() {
    return (
        <div>
            <PageContainer>
            
                  <HeaderContainer>
                    <HedearPages title={"Culto"} description={"Acompanhe nossos cultos!"} />
                  </HeaderContainer>
            
                  <TableContainer>
            
                    <TableBackground>
                        <CultsTable />                               
                    </TableBackground>

                  </TableContainer>

                 
            
            </PageContainer>
        </div>
        
    )
}