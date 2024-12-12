import { signOut } from "../services/authService"


const Home= ()=>{
    return(
        <>
        <button  onClick={signOut}>Click me</button>
        </>
    )
}

export default Home;