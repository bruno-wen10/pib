import { DropdownContainer, Option } from "./styled";

interface Props {
    options: { label: string; to: string }[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
  
  export default function DropdownMenu({ options, onMouseEnter, onMouseLeave }: Props) {
    return (
      <DropdownContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {options.map((opt, i) => (
          <Option key={i} to={opt.to}>{opt.label}</Option>
        ))}
      </DropdownContainer>
    );
  }