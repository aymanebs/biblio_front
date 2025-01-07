import { useEffect } from "react";
import { CardComponent } from "../components/CardComponent";
import GenresCarousel from "../components/GenresCarousel";
import Jumbotron from "../components/Jumbotron";
import PromotionalBanner from "../components/PromotionalBanner";
import { getAllBooks } from "../api/bookApi";
import { getCurrentUser, getSession } from "../services/authService";
import {  jwtDecode } from 'jwt-decode';


// const session = await  getSession();
// console.log('session: ',session);
// console.log('getCurrentUser()', await getCurrentUser());

// const currentUser= await getCurrentUser();
// console.log("currentUser",currentUser);
// const accessToken = session.accessToken.jwtToken;
// const decodedToken =  jwtDecode(accessToken);
// console.log('decodedToken',decodedToken["cognito:groups"]);
// console.log("*******************************************",decodedToken["cognito:groups"].includes('Client'))

const Home= ()=>{

    useEffect(()=>{
        const fetchBooks = async()=>{
            try{
                const response = await getAllBooks();
                console.log("books",response);
            }
            catch(error){
                console.log("Error fetching books", error);
            }
        }
        fetchBooks();
    
    },[]);




    
    return(
        <>
        <Jumbotron/>
        <div className="bg-white py-10">
        <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Genres</h2>
          <GenresCarousel />
        </div>
        </div>
        <PromotionalBanner/>
        <div className="bg-white py-8">
        <div className="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Books</h2>
            <div className="flex flex-wrap justify-around gap-4 mx-auto py-8">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            </div>
        </div>
        </div>

       
        </>
    )
}

export default Home;