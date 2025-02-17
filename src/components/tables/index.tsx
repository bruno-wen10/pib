import { TableContainer, Table, TableRow, TableCell } from './style';

export default function TablesWeek() {
    return (
        <TableContainer>
          <Table>
            <tbody>
              <TableRow>
                <TableCell width="35.0781%"><strong>Segunda-Feira<br />19h30</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>VIVA+</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%"><strong>Terça-Feira<br />19h30</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Musicalização</strong></TableCell>                
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%"><strong>Terça-Feira<br />20h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Discipulado 1.0</strong><br />
                (Fazer Inscrição)
                </TableCell>                
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%"><strong>Quarta-Feira<br />20h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%">
                  <strong>Culto | Presencial e Online</strong><br />
                  Berçario | 0 a 2 anos<br />
                  Ensino Bíblico | 3 a 6 anos<br />                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%"><strong>Quinta<br />20h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Discipulado 2.0</strong> <br />
                (Fazer Inscrição)
                </TableCell>
                
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%"><strong>Sexta<br />20h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%">
                  <strong>Sextou Pib | 9 e 12 anos</strong><br />                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%"><strong>Sexta<br />20h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%">
                  <strong>Pequenos Grupos nas Casas</strong><br /> 
                  Procure os Lideres dos pequenos grupos para saber mais                 
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell width="35.0781%"><strong>Sábado<br />20h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Estação Jovem | Presencial</strong><br />
                De quinze em quinze dias. (intercala com os Teens)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="35.0781%" rowSpan={7}><strong>Domingo<br />09h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Culto | Presencial e Online</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Culto Kids </strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Escola Bíblica Dominical Kids </strong></TableCell>
              </TableRow>
              <TableRow>
                
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Berçário | 0 a 2 anos</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Crianças | 3 a 5 anos</strong></TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Juniores | 6 a 10 anos</strong></TableCell>
              </TableRow>
             
              <TableRow>
                <TableCell width="35.0781%" rowSpan={6}><strong>Domingo<br />19h00</strong></TableCell>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Culto | Presencial e Online</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Culto Kids</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Berçário | 0 a 2 anos</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Crianças | 3 a 5 anos</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Crianças | 6 a 10 anos</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell bgColor="#ECEFF4 " width="69.1475%"><strong>Cantina após o culto</strong></TableCell>
              </TableRow>
            </tbody>
          </Table>
        </TableContainer>
    )
}