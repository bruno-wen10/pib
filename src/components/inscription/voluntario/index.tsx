import React, { useState } from "react";
import axios from "axios";
import {
  FormContainer,
  FormTitle,
  SectionTitle,
  InputField,
  SelectField,
  TextAreaField,
  CheckboxField,
  SubmitButton,
  InfoText,
} from "./style";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    isMember: false,
    area: "",
    talents: "",
    observations: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("https://sua-api.com/voluntarios", formData);
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Inscrição enviada com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          isMember: false,
          area: "",
          talents: "",
          observations: "",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      setErrorMessage("Ocorreu um erro ao enviar sua inscrição. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Inscreva-se como Voluntário</FormTitle>
      <InfoText>
        "Cada um exerça o dom que recebeu para servir aos outros, administrando fielmente
        a graça de Deus em suas múltiplas formas." <strong>1 Pedro 4:10-11</strong>
      </InfoText>
      <SectionTitle>ÁREAS EXECUTIVAS</SectionTitle>
      <p>
        Se você sente o chamado do serviço em seu coração, nós o convidamos para se unir à nossa família.
        Sua presença é fundamental para o crescimento da Igreja de Cristo.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="tel"
          name="phone"
          placeholder="WhatsApp"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <CheckboxField>
          <label>
            <input
              type="checkbox"
              name="isMember"
              checked={formData.isMember}
              onChange={handleChange}
            />
            Você é membro da IBMJ?
          </label>
        </CheckboxField>
        <SelectField
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Escolha uma área para servir
          </option>
          <option value="operacoes">Operações</option>
          <option value="comunicacao">Comunicação</option>
          <option value="apoioGeral">Apoio Geral</option>
        </SelectField>
        <TextAreaField
          name="talents"
          placeholder="Resuma seus talentos nessa área"
          value={formData.talents}
          onChange={handleChange}
          rows={4}
        />
        <TextAreaField
          name="observations"
          placeholder="Observações (Opcional)"
          value={formData.observations}
          onChange={handleChange}
          rows={4}
        />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </SubmitButton>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </FormContainer>
  );
}