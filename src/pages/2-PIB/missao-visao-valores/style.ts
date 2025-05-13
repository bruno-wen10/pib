import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  padding: 2rem;
  background-color: #f0f4ff;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 0.6s ease;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  margin-top: 50px;
  
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #131e5b;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #131e5b;
  padding-left: 2rem;
  
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #3a3437;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  padding-left: 1.2rem;
  li {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #3a3437;
    margin-bottom: 0.8rem;
  }
`;
