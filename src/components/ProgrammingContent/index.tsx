//import React
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
//import components
import Button from '../buttons/button';
import { ButtonContainer } from './style';

interface PropsProgramming {
  optionChosen: 'cult' | 'agenda' | null;
  setOptionChosen: (option: 'cult' | 'agenda' | null) => void;
}

export default function ProgrammingContent({
  //optionChosen,
  setOptionChosen,
}: PropsProgramming) {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleButtonClick = (option: 'cult' | 'agenda') => {
    setOptionChosen(option);
    if (option === 'agenda') {
      navigate('/agenda-semanal');
    } else if (option === 'cult') {
      navigate('/horario-dos-cultos');
    }
  };

  return (
    <>
      <ButtonContainer ref={ref} isVisible={inView} >
        <Button onClick={() => handleButtonClick('agenda')}>Agenda Semanal</Button>
        <Button onClick={() => handleButtonClick('cult')}>Horário dos cultos</Button>
      </ButtonContainer>
    </>
  );
}