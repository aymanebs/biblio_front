import { Outlet } from "react-router-dom";

const AuthLayout = ()=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
            <Outlet/>
            </div>
        </div>
    )
}
export default AuthLayout;