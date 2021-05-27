import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (!email) {
      alert("Please type your e-mail");
      return;
    }

    history.push("/dashboard");
  }

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
