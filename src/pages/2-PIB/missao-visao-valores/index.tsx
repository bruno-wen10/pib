import {
  ContentWrapper,
  ImageWrapper,
  TitleSection,
} from "../o-que-cremos/style";
import { Container, Section, Title, Paragraph, SubTitle, List } from "./style";
import imagemMaior from "../../../assets/img/images-photos/pastor-claudinei.jpeg";
import imagemMenor1 from "../../../assets/img//images-photos/pib-franca.jpeg";
import imagemMenor2 from "../../../assets/img/images-photos/encontro.jpg";

export default function MissaoVisaoValores() {
  return (
    <Container>
      <ContentWrapper>
        <TitleSection>
          <h1>
            Missão, Visão <br /> e Valores
          </h1>
        </TitleSection>

        <ImageWrapper>
          <img src={imagemMaior} alt="Imagem Maior" className="maior" />
          <img
            src={imagemMenor1}
            alt="Imagem Menor 1"
            className="menor menor1"
          />
          <img
            src={imagemMenor2}
            alt="Imagem Menor 2"
            className="menor menor2"
          />
        </ImageWrapper>
      </ContentWrapper>
      <Section>
        <Title>Missão</Title>

        <Paragraph>
          Levar o evangelho a todos, acolher famílias no Corpo de Cristo,
          discipulando-as <br /> para que adorem a Deus e sirvam com fidelidade
          ao Seu Reino. Assim como Jesus preparou seus discípulos (Mt 5:7;{" "}
          <br /> Lc 6:20-23), proclamamos que o Reino de Deus chegou (Mt 10:7) e
          ensinamos as verdades de Cristo àqueles que <br /> O seguem (At 5:42).
        </Paragraph>
      </Section>
      <hr />
      <Section>
        <Title>Visão</Title>
        <Paragraph>
          Ser uma igreja que reflete o amor de Deus e fortalece famílias
          conforme os princípios das Escrituras, edificando vidas para a glória
          de Deus.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Amor</SubTitle>
        <Paragraph>
          O amor que praticamos é o amor ágape — um amor que se expressa em
          ações e não apenas em palavras. “Agora, pois, permanecem a fé, a
          esperança e o amor, estes três; porém o maior destes é o amor.” (1Co
          13:13)
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Bíblia como Regra de Fé e Conduta</SubTitle>
        <Paragraph>
          Cremos que as Escrituras Sagradas, compreendendo o Antigo e o Novo
          Testamento, são inteiramente inspiradas por Deus, infalíveis na sua
          composição original e plenamente dignas de confiança em todas as áreas
          que venham se expressar sendo também a autoridade final e suprema como
          regra de fé, conduta e vida. Deus inspirou divinamente os autores
          humanos para que compusessem e registrassem Sua revelação nas palavras
          dos manuscritos originais. É a base para transformação do indivíduo e
          da comunidade II Timóteo 3:16-17; II Pedro 1:20-21. A Bíblia como
          revelação inspirada da vontade divina, cumprida e completada na vida e
          nos ensinamentos de Jesus Cristo é a nossa regra autorizada de fé e
          prática.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Família</SubTitle>
        <Paragraph>
          A maior e mais duradoura contribuição. O mais profundo e duradouro
          impacto que nós podemos deixar no meio que vivemos e sociedade de
          forma geral será oriunda do fortalecimento de nossas próprias
          famílias. Portanto as famílias precisam ser amparadas, aconselhadas,
          acompanhadas para que sejam sólidas estáveis e equilibradas e a única
          maneira duradoura e efetiva de fazermos isso é dar à Palavra de Deus,
          seu lugar de direito no centro da família. “Se o SENHOR não edificar a
          casa, em vão trabalham os que a edificam… Herança do SENHOR são os
          filhos, o fruto do ventre, seu galardão. Feliz o homem que enche deles
          a sua aljava…” (Salmos 127:1a, 3, 5a).
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Dons Espirituais para o Serviço</SubTitle>
        <Paragraph>
          Deus concede dons por meio do Espírito Santo, com o propósito de
          edificar o Corpo de Cristo e servir com excelência (1Co 12:4-7).
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Comunhão</SubTitle>
        <Paragraph>
          I Jo 1:5:7 “E esta é a mensagem que dele ouvimos, e vos anunciamos:
          que Deus é luz, e nele não há trevas nenhumas. Se dissermos que temos
          comunhão com ele, e andarmos nas trevas, mentimos, e não praticamos a
          verdade; mas, se andarmos na luz, como ele na luz está, temos comunhão
          uns com os outros, e o sangue de Jesus seu Filho nos purifica de todo
          pecado.” “Porque nenhum de nós vive para si, e nenhum morre para si”
          (Rm 14:7). Dependemos uns dos outros. A necessidade da prática da
          verdadeira comunhão é tão importante que, o Senhor Jesus se preocupou
          em deixar com seus discípulos uma das mensagens mais importantes nesse
          sentido. Em Sua oração sacerdotal, Ele se dirige ao Pai dizendo: “E eu
          lhes dei a glória que a mim me deste, para que sejam um, como nós
          somos um” (Jo 17:17).
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Testemunho</SubTitle>
        <Paragraph>
          Uma pessoa com atitudes e consciência não aprovadas diante de DEUS
          trás consigo sentimentos de culpa que a impedirá de realizar um
          testemunho eficaz. Muitos crentes se calam porque não podem falar da
          justiça de Deus no contexto de suas vidas injustas e vis. II Timóteo
          2:15 “Procura apresentar-te a Deus aprovado, como obreiro que não tem
          de que se envergonhar, que maneja bem a palavra da verdade. Assim
          estaremos confirmando o que Jesus diz sobre nós: Mateus 5:13-14. “Vós
          sois o sal da terra”; mas se o sal se tornar insípido, com que se há
          de restaurar-lhe o sabor? Para nada mais presta, senão para ser
          lançado fora, e ser pisado pelos homens. Vós sois a luz do mundo. Não
          se pode esconder uma cidade situada sobre um monte;”
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Vida Devocional</SubTitle>
        <Paragraph>
          Evangelizar no poder do Espírito Santo utilizando a Bíblia como regra
          na integração e ensino das pessoas e famílias através de todas as
          atividades proporcionando vida com Deus, individual e coletiva por
          meio da adoração servindo a Deus com maturidade, fé e comunhão.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Valorização das Pessoas</SubTitle>
        <Paragraph>
          Cada pessoa é criada à imagem de Deus e possui um valor eterno.
          Valorizamos o ser humano acima de estruturas ou instituições.
        </Paragraph>
      </Section>
      <hr />
      <Section>
        <Title>Valores</Title>
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
        <br />
        <br />
        <SubTitle>Família:</SubTitle>
        <br />
        <Paragraph>
          <ul>
            <List>Restauração Familiar;</List>          
            <List>Fortalecimento;</List>
            <List>Vida de Oração;</List>
            <List>Amparo, acolhimento;</List>
            <List>Acompanhamento para que sejam solidas, estáveis e equilibradas.</List>
          </ul>
        </Paragraph>

        <br />
        <br />
        <SubTitle>Honra:</SubTitle>
        <br />
        <Paragraph>
          <ul>
            <List>Honrar a Deus;</List>          
            <List>Honrar a Melhor Idade;</List>
            <List>Honrar Pastores e Líderes;</List>
            <List>Honrar o corpo de Cristo;</List>
           
          </ul>
        </Paragraph>
        <br />
        <br />
        <SubTitle>Relacionamento:</SubTitle>
        <br />
        <Paragraph>
          <ul>
            <List>Relacionamento com Deus;</List>          
            <List>Relacionamento com os irmãos;</List>
            <List>Relacionamento com a Família;</List>
            
          </ul>
        </Paragraph>
        <br />
        <br />
        <SubTitle>Amor:</SubTitle>
        <br />
        <Paragraph>
          <ul>
            <List>Amar a Deus;</List>          
            <List>Amar e Respeitar os pastores e Líderes;</List>
            <List>Amar as Pessoas;</List>
            <List>Amar fazer o bem aos outros;</List>
            <List>Amar a Família;</List>            
          </ul>
        </Paragraph>
        <div></div>
        <div></div>
        <br />
        <br />
        <SubTitle>Generosidade:</SubTitle>
        <br />
        <Paragraph>
          <ul>
            <List>Generosidade em nossos serviços;</List>          
            <List>Generosidade em nosso Atendimento;</List>
            <List>Generosidade em nosso Comportamento;</List>
            
            
          </ul>
        </Paragraph>
        <br />
        <br />
        <SubTitle>Serviço:</SubTitle>
        <br />
        <Paragraph>
          <ul>
            <List>Servir uns aos Outros;</List>          
            <List>Servir a Igreja Local;</List>
            <List>Servir as Pessoas Necessitadas;</List>
            <List>Servir a Nossa Comunidade</List>
            
            
          </ul>
        </Paragraph>
        </div>
      </Section>
    </Container>
  );
}
