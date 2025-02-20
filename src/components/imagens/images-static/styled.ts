
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    fonte-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 20px;
`;
export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Content = styled.div`
    
    fonte-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 20px;    
    z-index: 1;
    
`;