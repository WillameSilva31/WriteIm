import { useContext } from "react";
import { userContext } from "../../context/UserContext"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { login } = useContext(userContext);

    return login? <Outlet /> : <Navigate to={"/"}/>
}

export default PrivateRoute;