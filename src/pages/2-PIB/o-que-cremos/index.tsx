import { Container, ContentWrapper, TitleSection, ImageWrapper, TextSection } from "./style";
import imagemMaior from "../../../assets/img/images-photos/pastor-claudinei.jpeg";
import imagemMenor1 from "../../../assets/img//images-photos/pib-franca.jpeg";
import imagemMenor2 from "../../../assets/img/images-photos/encontro.jpg";

export default function OQueCremos() {
  return (
    <Container>
      <ContentWrapper>
        <TitleSection>
          <h1>O Que Cremos</h1>
        </TitleSection>

        <ImageWrapper>
          <img src={imagemMaior} alt="Imagem Maior" className="maior" />
          <img src={imagemMenor1} alt="Imagem Menor 1" className="menor menor1" />
          <img src={imagemMenor2} alt="Imagem Menor 2" className="menor menor2" />
        </ImageWrapper>
      </ContentWrapper>

      <TextSection>
        <p>1. A Bíblia é a Palavra de Deus, inspirada e inerrante, e é a única regra de fé e prática.</p>
        <p>2. Há um só Deus, eterno, que existe em três pessoas: Pai, Filho e Espírito Santo.</p>
        <p>3. Jesus Cristo é o Filho de Deus, nascido da virgem Maria, que morreu pelos nossos pecados e ressuscitou ao terceiro dia.</p>
        <p>4. A salvação é pela graça, mediante a fé em Jesus Cristo, e não por obras.</p>
        <p>5. O Espírito Santo habita no crente e o capacita para viver uma vida cristã vitoriosa.</p>
        <p>6. A Igreja é o corpo de Cristo na Terra, chamada para pregar o evangelho e fazer discípulos.</p>
        <p>7. A volta de Jesus é iminente e será visível a todos.</p>
        <p>8. A vida eterna é o dom de Deus para aqueles que creem em Jesus Cristo.</p>
        <p>9. A igreja de Cristo tem a missão de pregar o evangelho de Cristo e fazer discípulos.</p>
        <p>10. A igreja de Cristo tem a missão de pregar o evangelho de Cristo e fazer discípulos.</p>
      </TextSection>
    </Container>
  );
}
