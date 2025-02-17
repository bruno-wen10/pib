import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 70%;
  background-color:rgb(255, 255, 255);
  margin-left: auto;
  margin-right: auto;
`;

export const TableRow = styled.tr`
  border: 1px solid #131E5B ;
`;

interface TableCellProps {
  bgColor?: string;
  width?: string;
}

export const TableCell = styled.td<TableCellProps>`
  padding: 7px;
  color: #3A3437  ;
  background-color: ${({ bgColor }) => bgColor || '#CEDAEC  '};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => width || 'auto'};
`;

interface TableHeaderProps {
  width?: string;
}

export const TableHeader = styled.th<TableHeaderProps>`
  padding: 7px;
  color: #3A3437 ;
  background-color: #ECEFF4 ;
  width: ${({ width }) => width || 'auto'};
`;