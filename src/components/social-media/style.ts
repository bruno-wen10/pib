import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: 15px;
  margin-left: 30px;
`;

export const Icon = styled.a<{ color: string }>`
  color: #000;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color:${({ color }) => color}; 
  }
`;
export const TitleH3 = styled.h3`
   font-family: 'Poppins', sans-serif;
   font-weight: 500 !important;
    color: #4465FF   ;
`