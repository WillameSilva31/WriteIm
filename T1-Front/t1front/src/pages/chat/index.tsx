import { useContext, useState } from "react";
import { Buttons, Chat, Container, ContentContainer, DivButtonSendMessage, FormGroup, FormUpdate, Header, HeaderLeft, HeaderRight, ImgIcon, Input, Label, Messages, Name, NameUser, OthersUsers, SendImg, SendMessageInput, UpdateButton, WriteInput } from "./style";
import { userContext } from "../../context/UserContext";
import Picon from "../../assets/PIcon.png";
import SendIcon from "../../assets/SendIcon.png";

function ChatPage() {
    const { handleLogout, handleDelete, handleUpdate , user } = useContext(userContext);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            {showForm &&
                <FormUpdate>
                    <Name> Editar Perfil </Name>
                    <FormGroup>
                        <Label htmlFor="name">Nome de Usuário</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite caso queira alterar seu nome de usuário"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">email</Label>
                        <Input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Digite caso queira alterar seu email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite caso queira alterar sua senha"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Buttons>
                        <UpdateButton onClick={()=> setShowForm(false)}> <span className="button_top"> Cancelar</span> </UpdateButton>
                        <UpdateButton onClick={()=> 
                            {handleUpdate(user, name, email, password);
                             setShowForm(false);
                             setName("");
                             setEmail("");
                             setPassword("")}}> <span className="button_top"> Salvar </span> </UpdateButton>
                    </Buttons>
                </FormUpdate>
            }
            <Header>
                <HeaderLeft>
                    <ImgIcon src={Picon} alt="Picon" />
                    <NameUser>{user.user.name}</NameUser>
                </HeaderLeft>
                <HeaderRight>
                    <UpdateButton bgColor="#4facfe" textColor="white" onClick={() => handleLogout()}>
                        <span className="button_top"> sair </span>
                    </UpdateButton>
                    <UpdateButton bgColor="gray" textColor="white" onClick={() => setShowForm(!showForm)}>
                        <span className="button_top"> editar perfil </span>
                    </UpdateButton>
                    <UpdateButton bgColor="red" textColor="white" onClick={() => handleDelete(user)}> 
                        <span className="button_top"> deletar usuário </span>
                     </UpdateButton>
                </HeaderRight>
            </Header>
            <ContentContainer>
                <OthersUsers></OthersUsers>
                <Chat>
                    <Messages></Messages>
                    <WriteInput>
                        <SendMessageInput placeholder="digite aqui..."></SendMessageInput>
                        <DivButtonSendMessage>
                            <UpdateButton bgColor="#4facfe" >
                                <span className="button_top"> 
                                    <SendImg src={SendIcon} alt="" />
                                </span>
                            </UpdateButton>
                        </DivButtonSendMessage>
                    </WriteInput>
                </Chat>
            </ContentContainer>
        </Container>
    );
}

export default ChatPage;