import styled from 'styled-components';

export const FooterContainer = styled.footer`
     background: linear-gradient(90deg, #4465FF, #B2C9E4);
    color:rgb(26, 26, 26);
    padding: 20px;
    text-align: center;
    
    bottom: 0;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: bold;
     box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
    
    
`;
export const FooterSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const FooterText = styled.span`
    margin: 0;
    font-size: 14px;
    color: #131E5B;
`;