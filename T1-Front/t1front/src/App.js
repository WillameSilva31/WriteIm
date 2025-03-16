import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/register";
import ChatPage from "./pages/chat";
import { UserStorage } from "./context/UserContext";
import PrivateRoute from "./components/privateRoute/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <div className="App">
          <Routes>
            <Route path="/" element = {<LoginPage/>}/>
            <Route path="/user" element = {<RegisterPage/>}/>
            <Route element = {<PrivateRoute/>}>
              <Route path="/chat" element = {<ChatPage/>}/>
            </Route>
          </Routes>
        </div>
      </UserStorage>
    </BrowserRouter>  
  );
}

export default App;
