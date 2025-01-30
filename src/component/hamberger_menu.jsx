import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 m-5">

      <button className="z-50 p-4" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>

      <div className={`fixed top-0 left-0 w-64 mt-20 h-full bg-white text-black transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-2xl">Menu</h2>
          <ul>
            <li><a href="#" className="block py-2">Home</a></li>
            <li><a href="#" className="block py-2">About</a></li>
            <li><a href="#" className="block py-2">Services</a></li>
            <li><a href="#" className="block py-2">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
