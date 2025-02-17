import { useNavigate } from 'react-router-dom';
import Button from '../buttons/button';

interface PropsProgramming {
  optionChosen: 'cult' | 'agenda' | null;
  setOptionChosen: (option: 'cult' | 'agenda' | null) => void;
}

export default function ProgrammingContent({
  optionChosen,
  setOptionChosen,
}: PropsProgramming) {
  const navigate = useNavigate();

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
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        <Button onClick={() => handleButtonClick('agenda')}>Agenda Semanal</Button>
        <Button onClick={() => handleButtonClick('cult')}>Horário dos cultos</Button>
      </div>
    </>
  );
}