
import HedearPages from "../../components/heder-pages";
import TablesWeek from "../../components/tables";
import { PageContainer, HeaderContainer, TableContainer, TableBackground } from './style';

export default function AgendaWeek() {
  return (
    <PageContainer>

      <HeaderContainer>
        <HedearPages title={"Agenda Semanal"} description={"Acompanhe nossa programação e participe!"} />
      </HeaderContainer>

      <TableContainer>

        <TableBackground>
                   <TablesWeek />
        </TableBackground>

      </TableContainer>

    </PageContainer>
  );
}