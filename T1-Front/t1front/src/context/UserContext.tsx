import { Children, createContext, useEffect, useState } from "react";
import api from "../api";
import { data, useNavigate } from "react-router-dom";


export const userContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<object | null>({});
  const [token, setToken] = useState<string | null>(localStorage.getItem('token') as string);

  const getUser = (token: string) => {
    api.get('/user/get', { headers: { Authorization: token } }).then(({ data }) => {
      setUser(data)
      setLogin(true);
    }).catch((error) => {
      console.log('Usuario não autenticado', error);
    })
  }

  useEffect(() => {
    if (token) getUser(token);
  }, [token])

  const handleLogin = (email: string, password: string) => {
    api.post('/user/login', { email, password }).then(({ data }) => {
      alert('Login feito com sucesso');
      setLogin(true);
      localStorage.setItem('token', data.token);
      setToken(data.token)
      getUser(data.token);
      navigate("/chat");
    }).catch((error) => {
      alert('erro no Login')
      console.log('não foi possível fazer o login', error)
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setLogin(false);
    navigate("/login");
  };

  const handleDelete = (data: { user: { id: string, name: string } }) => {
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir o usuário: ${data.user.name}?`);
    if (!confirmDelete) return;

    api.delete(`/user/${data.user.id}`, { headers: { Authorization: token } })
      .then(() => {
        alert("Usuário deletado com sucesso!");
        handleLogout();
      })
      .catch((error) => {
        console.error("Erro ao deletar usuário:", error);
        alert("Não foi possível excluir o usuário.");
      });
  }

  const handleUpdate = (data : { user: { id : string } }, name: string, email: string, password: string) => {
    const id = data.user.id;
    api.put("/user", { id, name, email, password } , { headers: { Authorization: token }}).then(()=> {
      alert("edição concluída!");
    }).catch((error)=> {
      console.log("Erro ao alterar perfil", error);
      alert("Não foi possível alterar o usuário.")
    })
  }

  return (
    <userContext.Provider value={{ login, user, handleLogin, handleLogout, handleDelete, handleUpdate}}>
      {children}
    </userContext.Provider>
  )
}