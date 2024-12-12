import OTPInput from "../../components/OtpInput";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { confirmSignUp, resendConfirmationCode } from "../../services/authService";


const ConfirmRegister = ()=>{

    const [otp,setOtp] = useState(null);
    const [email,setEmail] =useState(null);

    const handleChange = (otpValue)=>{
        setOtp(otpValue);
        console.log('otp inside parent',otpValue);
    }
    
    const handleSubmit =(e)=>{
        
        e.preventDefault();
        try{
            confirmSignUp(email,otp.join(''));
            console.log('otp.toString()',otp.join(''))
        }
        catch(error){
            console.error(error);
        }
    }

    const handleResend = ()=>{
        console.log("email",email);
        resendConfirmationCode(email);
    }

    return(
        <>
        <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
        <p className="text-sm text-gray-500 mt-2">Enter the 6-digit code sent to your phone</p>
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com"
        onChange={(e)=>setEmail(e.target.value) }
      />
      </div>
        <OTPInput
         onSubmit ={(e)=>handleSubmit(e)}
         onChange ={handleChange}
        />
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Didn't receive the code? 
            <button type="submit" onClick={handleResend} className="ml-1 text-primary-700 hover:underline">
              Resend
            </button>
          </p>
        </div>
        </>
    )
}

export default ConfirmRegister;