import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../Navbar"
import { FooterComponent } from "../Footer"
import SidebarComponent from "../SidebarComponent"



const DashboardLayout = ()=>{
    return(
        <div className="flex flex-col min-h-screen">
        {/* Navbar - Fixed at top */}
        <div className="sticky top-0 z-50">
          <NavbarComponent />
        </div>
  
        {/* Main content area with sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Fixed at left */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="h-full">
              <SidebarComponent />
            </div>
          </div>
  
          {/* Main content - Scrollable */}
          <div className="flex-1 overflow-auto p-4 ">
            <main className="container mx-auto">
              <Outlet />
            </main>
          </div>
        </div>
  
        {/* Footer - Fixed at bottom */}
        <div className="mt-auto">
          <FooterComponent />
        </div>
      </div>
    )
}

export default DashboardLayout;
