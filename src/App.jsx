import { useDispatch } from 'react-redux';
import './App.css'
import AppRouter from './routes'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getSession } from './services/authService';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   getSession()
  //     .then(session => {
  //       console.log('Session is active:', session);
  //     })
  //     .catch(err => {
  //       if (err.message === "Session has expired") {
       
  //         console.log("Session expired, logging out...");
  //         dispatch(setUserLoggedOut()); 
  //         signOut(); 
  //         navigate("/login"); 
  //       } else {

  //         console.error("Error getting session:", err);
  //       }
  //     });;
  // }, [dispatch, navigate]);

  return (
   
    
        <AppRouter/>

  )
}

export default App
