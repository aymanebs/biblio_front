
"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";


export function NavbarComponent() {
  return (
  
    <Navbar fluid rounded>
      
      <Link to="/" className="flex items-center">
        <img src="/book_logo1.png" className=" h-12 sm:h-12 transform scale-150"  alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bookindro</span>
      </Link> 
     
      <div className="flex md:order-2">
      <Button gradientDuoTone="pinkToOrange">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
   
  );
}
