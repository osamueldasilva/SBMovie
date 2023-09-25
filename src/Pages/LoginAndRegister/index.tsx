import { useState } from "react";
import { InputText } from "../../Components/InputText";
import * as S from "./styles";
import { Button } from "../../Components/Buttom";
import { toast } from "react-toastify";

export function LoginAndRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [openRegister, setRegister] = useState(false);

  function handleOpenRegister() {
    setRegister(true);
  }

  function handleCloseRegister() {
    setRegister(false);
  }

  function handleLogin() {
    const storedEmail = localStorage.getItem("@SBMovie:Email");
    const storedPassword = localStorage.getItem("@SBMovie:Password");

    if (storedEmail === email && storedPassword === password) {
      toast.success("Login realizado com sucesso");
    } else {
      toast.error("Email ou senha incorreto");
      setRegister(true);
    }
  }

  function handleRegister() {
    localStorage.setItem("@SBMovie:Name", name);
    localStorage.setItem("@SBMovie:Email", emailRegister);
    localStorage.setItem("@SBMovie:Password", passwordRegister);

    toast.success("Conta criada com sucesso");

    setRegister(false);
  }

  return (
    <S.Content>
      <>
        <S.ContainerImage>
          <ul className="background">
            <div className="greetings">
              <h1>Seja bem-vindo ao SBMovie</h1>
              <p>
                O seu destino definitivo para filmes e séries, onde você
                encontrará uma ampla seleção para assistir a qualquer momento.
              </p>
            </div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </S.ContainerImage>
        {!openRegister ? (
          <S.ContainerLogin>
            <h1>Login Account</h1>

            <InputText
              type="text"
              placeholder="Digite seu e-mail"
              width={25}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Digite sua senha"
              width={25}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              backgroundColor="#0284C7"
              text="Entrar"
              width={25}
              onClick={handleLogin}
            />

            <h3 onClick={handleOpenRegister}>Criar Conta</h3>
          </S.ContainerLogin>
        ) : (
          <S.ContainerLogin>
            <h1>Register Account</h1>

            <InputText
              type="text"
              placeholder="Digite seu nome"
              width={25}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              type="text"
              placeholder="Digite seu e-mail"
              width={25}
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Digite sua senha"
              width={25}
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />

            <Button
              backgroundColor="#0284C7"
              text="Registrar"
              width={25}
              onClick={handleRegister}
            />
            <h3 onClick={handleCloseRegister}>Fazer Login</h3>
          </S.ContainerLogin>
        )}
      </>
    </S.Content>
  );
}
