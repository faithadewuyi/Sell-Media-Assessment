"use client";
import Link from "next/link";
import { useState } from 'react';

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
return (
<>
<header className="flex items-center justify-between max-w-6xl mx-auto p-4 sticky top-0 z-50">
      <Link className="text-textcol font-bold text-2xl" href="">Hand</Link>
    {/* Hamburger Icon */}
    <div className="md:hidden">
          <button onClick={toggleMenu} className="text-secyellow focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
    {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 text-navcol font-bold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Services</Link>
        <Link href={""}>Blog</Link>
        <Link href={""}>Contact Us</Link>
        
      </nav>
      <Link href={""} className="hidden md:block bg-btnblack text-white px-6 py-2 rounded text-sm">Start a project</Link>
    </header>
    {/* Mobile Menu */}
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-center bg-secyellow  py-4 space-y-4 hover:text-textcol text-navcol font-bold ">
          <Link href="/"  >Home</Link>
          <Link href="" >About Us</Link>
          <Link href="" >Services</Link>
          <Link href="" >Blog</Link>
          <Link href="" >Contact Us</Link>
          <Link href=""  className="bg-btnblack text-white px-6 py-2 rounded text-sm">Start a project</Link>
        </nav>
      </div>
</>

)

}