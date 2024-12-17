import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = ({Title}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl my-8 p-3 rounded-lg">
          <h2 className="text-xl font-bold text-white text-center">{Title}</h2>
        </div>
        <div className="bg-white shadow-lg rounded-b-lg p-6 space-y-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;