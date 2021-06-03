import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  async function handleLogin() {
    if (!email) {
      alert("please type your e-mail");
      return;
    }

    try {
      const response = await axios.get(
        "https://dummyapi.io/data/api/user?limit=10",
        {
          headers: {
            "app-id": process.env.REACT_APP_DUMMY_API_KEY,
          },
        }
      );

      if (response.data.data.some((user) => user.email === email)) {
        alert("welcome!");
        history.push("/dashboard");
      } else {
        alert("invalid e-mail!");
      }
    } catch (error) {
      alert("there was an error!");
    }
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
