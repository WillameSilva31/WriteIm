import { Button, Container, CustomLink, FormDiv, FormGroup, ImageLamp, Input, Label, LeftContainerLogin, LoginContainer, LoginName, LoginNameContainer, Name, RegisterRedirect, RightContainerImage } from "./style";
import Lamp from "../../assets/BlueLamp.png"
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {handleLogin, login} = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  useEffect(()=> {
    if(login) navigate ("/chat");
  }, [login, navigate])

  return (
    <Container>
      <LeftContainerLogin>
        <Name>WRITEIM</Name>
        <LoginContainer>
          <LoginNameContainer>
            <LoginName>Login</LoginName>
          </LoginNameContainer>
          <FormDiv>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu email"
                required
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" onClick={()=> handleLogin(email,password)}>
              <span className="button_top">Entrar</span>
            </Button>
            <RegisterRedirect>Não possui uma conta? 
              <CustomLink to={"/user"}> clique aqui</CustomLink>
            </RegisterRedirect>
          </FormDiv>
        </LoginContainer>
      </LeftContainerLogin>
      <RightContainerImage>
        <ImageLamp src={Lamp} />
      </RightContainerImage>
    </Container>
  );
}

export default LoginPage;
