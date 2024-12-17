import { Outlet } from "react-router-dom";
import { FooterComponent } from "../Footer";
import { NavbarComponent } from "../Navbar";
import Jumbotron from "../Jumbotron";
import GenresCarousel from "../GenresCarousel";
import PromotionalBanner from "../PromotionalBanner";


const HomeLayout = ()=>{
    return(
        <>
        <NavbarComponent/>
    
        <Outlet/>
        <FooterComponent/>
        </>
    )
}

export default HomeLayout;
