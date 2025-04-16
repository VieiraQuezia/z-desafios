import React, { useState } from "react";

function TipoReserva() {
  const [quantHospedes, setQuantHospedes] = useState("");

  const InputChange = (event) => {
    setQuantHospedes(event.target.value); // Atualiza o tipo de input com base na seleção
  };

  return (
    <div>
      <h2>Escolha a quantidade de hospedes:</h2>

      <select value={quantHospedes} onChange={InputChange}>
        <option value="">Selecione um método</option>
        <option value="1-hospede">1 Hospedes</option>
        <option value="2-hospedes">2 Hospedes</option>
        <option value="familia">Família</option>
      </select>

      {quantHospedes === "1-hospede" && (
        <div>
          <input type="text" placeholder="Nome do hospede" />
        </div>
      )}

      {quantHospedes === "2-hospedes" && (
        <div>
          <input type="text" placeholder="Nome do 1º hospede" />
          <input type="text" placeholder="Nome do 2º hospede" />
        </div>
      )}

      {quantHospedes === "familia" && (
        <div>
          <input type="text" placeholder="Nome do 1º adulto" />
          <input type="text" placeholder="Nome do 2º adulto" />
          <input type="text" placeholder="Nome da criança" />
        </div>
      )}
    </div>
  );
}

export default TipoReserva;
