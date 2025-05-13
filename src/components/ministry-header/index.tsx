import { ContentWrapper, TitleSection, ImageWrapper } from "./styled"




export default function MinistryHeader({ title, img1, img2, img3, description}: { title: string, img1: string, img2: string, img3: string, description: string }) {
    return (
        
            <ContentWrapper>
                <TitleSection>
                    <h1 style={{marginLeft: "50px" }}>
                        {title}
                    </h1>
                    <strong>{description}</strong>
                </TitleSection>

                <ImageWrapper>
                    <img src={img1} alt="Imagem Maior" className="maior" />
                    <img
                        src={img2}
                        alt="Imagem Menor 1"
                        className="menor menor1"
                    />
                    <img
                        src={img3}
                        alt="Imagem Menor 2"
                        className="menor menor2"
                    />
                </ImageWrapper>
            </ContentWrapper>
        
    );
}