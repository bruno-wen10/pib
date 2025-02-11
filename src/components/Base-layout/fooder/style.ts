import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #B2C9E4;
    color: #131E5B;
    padding: 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    
    
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
`;