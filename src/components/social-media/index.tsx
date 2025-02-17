import { SocialMediaContainer, Icon, TitleH3 } from './style';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMediaShare = () => {
  const currentUrl = window.location.href;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${currentUrl}`
  };

  return (
    <SocialMediaContainer>
        <TitleH3>Compartilhe em suas redes Sociais</TitleH3>
      <div>
      <Icon href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" color="#3b5998">
        <FaFacebook />
      </Icon>
      <Icon href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" color="#1da1f2">
        <FaTwitter />
      </Icon>
     
      <Icon href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" color="#25d366">
        <FaWhatsapp />
      </Icon>
      </div>
    </SocialMediaContainer>
  );
};

export default SocialMediaShare;