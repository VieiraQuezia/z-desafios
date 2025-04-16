import React, { useState } from "react";

function FormaPagamento() {
  const [inputType, setInputType] = useState("");

  const InputChange = (event) => {
    setInputType(event.target.value); // Atualiza o tipo de input com base na seleção
  };

  return (
    <div>
      <h2>Selecione o método de pagamento:</h2>

      <select value={inputType} onChange={InputChange}>
        <option value="">Selecione um método</option>
        <option value="CartaodeCredito">Cartão de Crédito</option>
        <option value="Pix">Pix</option>
        <option value="Boleto">Boleto</option>
      </select>

      {inputType === "Boleto" && (
        <p>O boleto será gerado após a confirmação do pagamento.</p>
      )}

      {inputType === "CartaodeCredito" && (
        <div>
          <input type="text" placeholder="Nome do titular" />
          <input type="text" placeholder="Número do cartão" />
          <input type="text" placeholder="Validade do cartão" />
        </div>
      )}

      {inputType === "Pix" && <p>Qr Code: (imagem simulada)</p>}
    </div>
  );
}

export default FormaPagamento;
