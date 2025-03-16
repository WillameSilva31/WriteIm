import { useContext, useEffect, useState } from "react";
import { Buttons, Chat, Container, ContentContainer, FormGroup, FormUpdate, Header, Input, Label, Messages, Name, OthersUsers, UpdateButton, WriteInput } from "./style";
import { userContext } from "../../context/UserContext";
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
                        <UpdateButton onClick={()=> setShowForm(false)}> cancelar </UpdateButton>
                        <UpdateButton onClick={()=> 
                            {handleUpdate(user, name, email, password);
                             setShowForm(false);
                             setName("");
                             setEmail("");
                             setPassword("")}}> salvar </UpdateButton>
                    </Buttons>
                </FormUpdate>
            }
            <Header>
                <button onClick={() => handleLogout()}>po</button>
                <button onClick={() => handleDelete(user)}> DU </button>
                <button onClick={() => setShowForm(!showForm)}> EU </button>
            </Header>
            <ContentContainer>
                <OthersUsers></OthersUsers>
                <Chat>
                    <Messages>oi</Messages>
                    <WriteInput></WriteInput>
                </Chat>
            </ContentContainer>
        </Container>
    );
}

export default ChatPage;