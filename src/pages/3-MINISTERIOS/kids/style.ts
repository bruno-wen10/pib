import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: #f9f9f9;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const MissionSection = styled.div`
  margin: 50px 0;
  text-align: center;
  padding-top: 200px;

  strong {
    font-size: 1.5rem;
    color: #131e5b;
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 768px) {
    padding-top: 100px;
    strong {
      font-size: 1.2rem;
    }
  }
`;

export const StrategySection = styled.div`
  margin: 2rem 0;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #3a3437;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  strong {
    color: #ff6600; /* Destaque para "PENSE LARANJA" */
    font-weight: bold;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const ScheduleSection = styled.div`
  margin: 2rem 0;
  text-align: center;

  h3 {
    font-size: 2rem;
    color: #131e5b;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.5rem;
    color: #3a3437;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 1.2rem;
      color: #3a3437;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 0.5rem;
    }
  }

  hr {
    border: 1px solid #ccc;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    ul li {
      font-size: 1rem;
    }
  }
`;


export const LeadershipSection = styled.div`
  margin: 2rem 0;
  text-align: center;

  strong {
    font-size: 1.2rem;
    color: #131e5b;
    font-family: 'Poppins', sans-serif;

    strong {
      color: #ff6600; /* Destaque para os nomes */
    }
  }

  @media (max-width: 768px) {
    strong {
      font-size: 1rem;
    }
  }
`;