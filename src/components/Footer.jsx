
"use client";

import { Footer} from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
         <div className="flex items-end">
          <img src="/book_logo1.png" className=" h-12 sm:h-12 transform scale-150"  alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bookindro</span>
          </div>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Bookindro™" year={2024} />
      </div>
    </Footer>
  );
}
