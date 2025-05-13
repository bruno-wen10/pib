import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  color: #131e5b;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #4465ff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: #3a3437;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.5rem;
  text-align: center;

  strong {
    color: #131e5b;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #4465ff;
    outline: none;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #4465ff;
    outline: none;
  }
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #4465ff;
    outline: none;
  }
`;

export const CheckboxField = styled.div`
  margin-bottom: 1rem;

  label {
    font-size: 1rem;
    color: #3a3437;
    font-family: 'Poppins', sans-serif;
  }

  input {
    margin-right: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4465ff;
  color: #fff;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e4bb8;
  }
`;