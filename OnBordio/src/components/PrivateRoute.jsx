import {useUserStore} from "../Store/userStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ()=>{
    const {isAuth} = useUserStore();
    return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute;