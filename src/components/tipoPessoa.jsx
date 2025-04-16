import { useState } from "react";

function TipoPessoa() {
  const [tipoPessoa, setTipoPessoa] = useState();

  return (
    <div>
      <h3>oiii</h3>
      <label>
        <input
          type="radio"
          value="Pessoa Física"
          checked={tipoPessoa === "Pessoa Física"}
          onChange={(e) => setTipoPessoa(e.target.value)}
        /> Pessoa Física (PF)
      </label>
      <label>
        <input
          type="radio"
          value="Pessoa Jurídica"
          checked={tipoPessoa === "Pessoa Jurídica"}
          onChange={(e) => setTipoPessoa(e.target.value)}
        /> Pessoa Jurídia (PJ)
      </label>

      {tipoPessoa === "Pessoa Jurídica" && (
        <div>
          <input type="text" placeholder="CNPJ" />
          <br />
          <input type="text" placeholder="Razão social" />
        </div>
      )}

      {tipoPessoa === "Pessoa Física" && (
        <div>
          <input type="text" placeholder="CPF" />
        </div>
      )}

      <br />
      <br />
    </div>
  );
}

export default TipoPessoa;