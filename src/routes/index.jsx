import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ConfirmRegister from "../pages/Auth/ConfirmRegister";
import AuthLayout from "../components/layouts/AuthLayout";



const AppRouter = ()=>{

    return(
        <Routes>
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register/confirm" element={<ConfirmRegister/>} />
        </Route>
        </Routes>
    )
    
}

export default AppRouter;