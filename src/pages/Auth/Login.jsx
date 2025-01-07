import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { signIn } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../store/userSlice";


const Login = () =>{

  const [email,setEmail] = useState(null);
  const [password, setPassword] =useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      console.log('before sign in');
      const response = await signIn(email,password);
      dispatch(setUserLoggedIn());
      const cognitoGroups = response?.accessToken?.payload['cognito:groups'];
      if(cognitoGroups && cognitoGroups.includes('Admin')){
        navigate('/dashboard');
      }
      else{
        navigate('/');
      }

    }
    catch(error){
      console.error(error);
    }
  }

    return(
     
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput name="email" id="email1" type="email" placeholder="name@flowbite.com" onChange={(e)=> setEmail(e.target.value)}  />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput name="password" id="password1" type="password" onChange={(e)=>setPassword(e.target.value)}  />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      
    )
}

export default Login;