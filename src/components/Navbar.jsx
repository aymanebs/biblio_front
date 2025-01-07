import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../services/authService";
import { setUserLoggedOut } from "../store/userSlice";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const isConnected = useSelector((state) => state.user.isConnected);
  const dispatch = useDispatch();

  console.log("inside navbar isConnected",isConnected);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () =>{
    signOut();
    dispatch(setUserLoggedOut()); 

  }

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/" className="text-orange-600 flex items-center gap-2">
              <img
                src="/book_logo1.png"
                className="h-12 sm:h-12 transform scale-150"
                alt="Flowbite React Logo"
              />
              <span className="text-xl font-bold text-gray-700">Bookindro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/collections" className="text-gray-500 transition hover:text-orange-500/75">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-500 transition hover:text-orange-500/75">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-500 transition hover:text-orange-500/75">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-500 transition hover:text-orange-500/75">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* User Actions */}
          {isConnected ? (
            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                onClick={toggleMenu}
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User avatar"
                  className="w-10 h-10 object-cover"
                />
              </button>
              {isMenuOpen && (
                <div className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
                  <div className="p-2">
                    <Link to="/profile" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      My profile
                    </Link>
                    <Link to="/billing" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      Billing summary
                    </Link>
                    <Link to="/settings" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      Team settings
                    </Link>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                Login
              </Link>
              <Link to="/register" className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-600">
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-50 bg-white shadow-md">
          <nav>
            <ul className="flex flex-col items-start gap-4 p-4">
              {
                !isConnected &&(
                  <>
                  <li>
                  <Link to="/login" className="text-gray-700 hover:text-orange-500">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-gray-700 hover:text-orange-500">
                    Register
                  </Link>
                </li>
                </>
                )

              }
  
              <li>
                <Link to="/collections" className="text-gray-700 hover:text-orange-500">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-700 hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-orange-500">
                  Services
                </Link>
              </li>
              {isConnected && (
                <>
                  <li>
                    <Link to="/profile" className="text-gray-700 hover:text-orange-500">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={ handleLogout}
                      className="text-red-600 hover:text-red-800"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
