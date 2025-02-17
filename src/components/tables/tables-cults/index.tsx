
import { TableContainer, Table, TableRow, TableCell, TableHeader } from './style';

export default function CultsTable() {
  return (
    <TableContainer>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader colSpan={3}>
              <strong>Assista aos nossos cultos Presenciais e Online</strong>
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableCell>Quarta-feira</TableCell>
            <TableCell>20h00</TableCell>
            <TableCell>Presencial e Online</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Domingo Manhã</TableCell>
            <TableCell>09h00</TableCell>
            <TableCell>Presencial e Online</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Domingo Noite</TableCell>
            <TableCell>19h00</TableCell>
            <TableCell>Presencial e Online</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
}