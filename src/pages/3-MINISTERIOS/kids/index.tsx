import {
    Container,
    MissionSection,
    StrategySection,
    ScheduleSection,
    LeadershipSection,
  } from "./style";
  import MinistryHeader from "../../../components/ministry-header";
  import imagem1 from "../../../assets/img/images-photos/kids1.jpg";
  import image2 from "../../../assets/img/images-photos/kids2.jpg";
  import image3 from "../../../assets/img/images-photos/kids3.jpg";
  import penseLaranja from "../../../assets/img/images-photos/penseLaranja.png";
  
  export default function Kids() {
    return (
      <Container>
        <MinistryHeader
          title={"Kids"}
          img1={imagem1}
          img2={image2}
          img3={image3}
          description={"Crianças de 0 a 12 anos"}
        />
  
        <MissionSection>
          <strong>
            Nossa missão é conduzir crianças a Cristo, ajudá-las a crescer como
            verdadeiros discípulos de Jesus e apoiar os pais, como seus principais
            parceiros, na missão de educar seus filhos para que se tornem plenos
            em Cristo.
          </strong>
        </MissionSection>
  
        <StrategySection>
          <p>
            Para isso usamos a estratégia do <strong>PENSE LARANJA</strong> que
            une a Igreja e a família para serem parceiras na educação e formação
            espiritual da próxima geração, em obediência à ordenação divina de
            Deuteronômio 6.
          </p>
          <img className="penseLaranja" src={penseLaranja} alt="Pense Laranja" />
          <p>
            O nome <strong>PENSE LARANJA</strong> é uma analogia da união de duas
            cores, o amarelo e o vermelho, que juntas formam a cor LARANJA! Essas
            duas forças unidas, trabalhando em parceria, têm um maior impacto
            quando se trata de ensino bíblico cristão.
          </p>
        </StrategySection>
  
        <ScheduleSection>
          <h3>CONFIRA NOSSA PROGRAMAÇÃO SEMANAL</h3>
          <h4>Domingo: 9h e 19h</h4>
          <ul>
            <li>Berçário (0 a 2 anos)</li>
            <li>First Look (3 a 5 anos)</li>
            <li>252 Kids (6 a 12 anos)</li>
            <li>252 Preteens (10 a 12 anos)</li>
          </ul>
          <hr />
          <h4>Quarta-feira: 20h</h4>
          <ul>
            <li>Berçário (0 a 2 anos)</li>
            <li>First Look (3 a 5 anos)</li>
            <li>252 Kids (6 a 12 anos)</li>
            <li>252 Preteens (10 a 12 anos)</li>
          </ul>
        </ScheduleSection>
  
        <LeadershipSection>
          <strong>
            Liderança: <strong>Isac, Shaiane e Ana Carolina</strong>
          </strong>
        </LeadershipSection>
      </Container>
    );
  }