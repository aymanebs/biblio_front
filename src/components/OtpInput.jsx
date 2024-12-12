import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const OTPInput = ({onSubmit,onChange}) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);
  const [error, setError] = useState('');

  console.log('otp',otp);

  const handleChange = (index, e) => {
    const value = e.target.value;
    
    if (isNaN(value)) return;

    const newOtp = [...otp];
    
    newOtp[index] = value;
    
    setOtp(newOtp);
    onChange(newOtp);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    
    const pastedOtp = pastedText.slice(0, 6).split('').filter(char => !isNaN(char));
    
    const newOtp = new Array(6).fill('');
    pastedOtp.forEach((digit, index) => {
      if (index < 6) newOtp[index] = digit;
    });

    setOtp(newOtp);
    setError('');

    if (pastedOtp.length > 0) {
      inputRefs.current[Math.min(pastedOtp.length - 1, 5)].focus();
    }
  };


  return (
  
        <>
       

        <div 
          className="flex justify-center space-x-2"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => inputRefs.current[index] = el}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-2xl 
                border-2 rounded-lg 
                focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                transition-all duration-300
                text-gray-900 
                border-gray-300 
                hover:border-gray-400"
            />
          ))}
        </div>

        {error && (
          <div className="text-center">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        )}

        <button 
          onClick={onSubmit}
          className="w-full flex items-center justify-center 
            bg-blue-700  py-3 rounded-lg 
            hover:bg-primary-800 
            focus:ring-4 focus:ring-primary-300 
            transition-colors duration-300
            disabled:opacity-50 disabled:cursor-not-allowed"
          
        >
          Verify OTP
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>

        
     </>

   
  );
};

export default OTPInput;