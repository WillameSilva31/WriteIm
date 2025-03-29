import { Button, Container, CustomLink, FormDiv, FormGroup, ImageLamp, Input, Label, LeftContainerImage, LoginContainer, LoginName, LoginNameContainer, Name, RegisterRedirect, RightContainerLogin } from "./style";
import Lamp from "../../assets/BlueLamp.png"
import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const handleRegister = (name: string, email: string, password: string) => {
        api.post('/user',{name,email,password}).then(()=>{
            alert('cadastro feito')
            navigate("/")
        }).catch((error)=> {
            alert('erro no cadastro')
            console.log("não foi possivel fazer cadastro ", error)
        })
    }
    
    return (
        <Container>
            <LeftContainerImage>
                <ImageLamp src={Lamp} />
            </LeftContainerImage>
            <RightContainerLogin>
                <Name>WRITEIM</Name>
                <LoginContainer>
                    <LoginNameContainer>
                        <LoginName>Registrar</LoginName>
                    </LoginNameContainer>
                    <FormDiv>
                        <FormGroup>
                            <Label htmlFor="name">Nome de Usuário</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Digite seu nome de usuário"
                                required
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">email</Label>
                            <Input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                required
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
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
                        <Button type="submit" onClick={()=> handleRegister(name,email,password)} >
                            <span className="button_top">Registrar</span>
                        </Button>
                        <RegisterRedirect>Já possui uma conta?
                            <CustomLink to={"/"}> clique aqui</CustomLink>
                        </RegisterRedirect>
                    </FormDiv>
                </LoginContainer>
            </RightContainerLogin>
        </Container>
    );
}

export default RegisterPage;