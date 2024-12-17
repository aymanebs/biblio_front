import { CardComponent } from "../components/CardComponent";
import GenresCarousel from "../components/GenresCarousel";
import Jumbotron from "../components/Jumbotron";
import PromotionalBanner from "../components/PromotionalBanner";


const Home= ()=>{
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