import {  Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ConfirmRegister from "../pages/Auth/ConfirmRegister";
import AuthLayout from "../components/layouts/AuthLayout";
import Home from "../pages/Home";
import HomeLayout from "../components/layouts/HomeLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Books from "../pages/Dashboard/books";
import { Genres } from "../pages/Dashboard/Genres";
import { Users } from "../pages/Dashboard/Users";
import { DashIndex } from "../pages/Dashboard/DashIndex";
import { Collections } from "../pages/Collections";
import { BookDetails } from "../pages/BookDetails";
import { BookCollectionPage } from "../pages/BookCollectionPage";


const AppRouter = ()=>{

    return(
        <Routes>
        <Route element={<AuthLayout Title="Authentication"/>}>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register/confirm" element={<ConfirmRegister/>} />
        </Route>    
        <Route element={<HomeLayout/>}>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/collections" element={<Collections/>} /> */}
            <Route path="/bookDetails" element={<BookDetails/>}/>
            <Route path="/BookCollectionPage" element={<BookCollectionPage/>}/>
        </Route>

        <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<DashIndex/>}/>
            <Route path="/dashboard/books" element={<Books/>}/> 
            <Route path="/dashboard/genres" element={<Genres/>}/>
            <Route path="/dashboard/users" element={<Users/>}/>
        </Route>
        
        </Routes>
    )
    
}

export default AppRouter;