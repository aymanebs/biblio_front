import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { signUp } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register =()=>{

    const [formData, setFormData] = useState({name:'',password:'',confirm_password:'',email:''});
    const navigate =useNavigate();

    const handleSubmit =async (e)=>{
            e.preventDefault();
        try{
            await signUp(formData.name,formData.email,formData.password);
            navigate('/register/confirm');
        }
        catch(error){
            console.error(error);
        }
        
    }
    return(
        <form onSubmit={handleSubmit}  className="flex max-w-md flex-col gap-4">      
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Your name" />
          </div>
          <TextInput name="name" id="name1" type="name" placeholder="Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}  />
        </div>
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput name="email" id="email1" type="email" placeholder="name@flowbite.com" onChange={(e)=>setFormData({...formData,email:e.target.value})}  />
        </div>
        <div>
        <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput name="password" id="password1" type="password" placeholder="Password" onChange={(e)=>setFormData({...formData,password:e.target.value})}  />
        </div>

        <div>
        <div className="mb-2 block">
            <Label htmlFor="confirm_password1" value="Rewrite password" />
          </div>
          <TextInput name="confirm_password" id="confirm_password1" type="password" placeholder="Confirm password" onChange={(e)=>setFormData({...formData,confirm_password:e.target.value})}  />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    )
}

export default Register;