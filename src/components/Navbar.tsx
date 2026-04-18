'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['home', 'tech', 'about', 'contact'];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
      flex justify-between items-center px-6 py-4
      bg-[#7C3AED]/10 backdrop-blur-md border-b border-white/20
      text-neutral-dark"
    >
      {/* Logo */}
      <div className="flex items-center gap-1 text-xl font-bold">
        <span className="text-primary">Akash.</span>
        <span className="text-sm">dev</span>
      </div>

      {/* Desktop */}
      <ul className="hidden md:flex gap-6">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="relative group capitalize hover:text-primary-dark"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-[80]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`absolute w-6 h-[2px] bg-neutral-dark/80 transition-all duration-300
          ${isOpen ? 'rotate-45' : '-translate-y-2'}`}
        />
        <span
          className={`absolute w-6 h-[2px] bg-neutral-dark/80 transition-all duration-300
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`absolute w-6 h-[2px] bg-neutral-dark/80 transition-all duration-300
          ${isOpen ? '-rotate-45' : 'translate-y-2'}`}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] z-[70]
        bg-white/70 backdrop-blur-lg shadow-lg
        flex flex-col items-center justify-center gap-8 text-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setIsOpen(false)}
            className="capitalize hover:text-primary-dark transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
