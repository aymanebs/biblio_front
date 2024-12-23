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
        <main>
            <Outlet/>
        </main>  
        <FooterComponent/>
        </>
    )
}

export default HomeLayout;
