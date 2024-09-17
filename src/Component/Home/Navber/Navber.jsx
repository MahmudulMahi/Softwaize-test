import  { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="hidden lg:flex space-x-4">
          <a href="#new" className="text-gray-700 hover:text-gray-900">New</a>
          <a href="#sort-by" className="text-gray-700 hover:text-gray-900">Sort By</a>
          <a href="#best-seller" className="text-gray-700 hover:text-gray-900">Best Seller</a>
          <a href="#bridal" className="text-gray-700 hover:text-gray-900">Bridal</a>
        </div>

        
        <div className="text-2xl font-bold text-gray-800">
          James Michelle
        </div>


        <div className="hidden lg:flex space-x-4">
          <FaSearch className="text-gray-700 hover:text-gray-900 cursor-pointer" />
          <FaUser className="text-gray-700 hover:text-gray-900 cursor-pointer" />
          <FaShoppingCart className="text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>


        <div className="lg:hidden">
          <FaBars onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4 ">
          <a href="#new" className="block text-gray-700 hover:text-gray-900">New</a>
          <a href="#sort-by" className="block text-gray-700 hover:text-gray-900">Sort By</a>
          <a href="#best-seller" className="block text-gray-700 hover:text-gray-900">Best Seller</a>
          <a href="#bridal" className="block text-gray-700 hover:text-gray-900">Bridal</a>
          <div className="flex space-x-4">
            <FaSearch className="text-gray-700 hover:text-gray-900 cursor-pointer" />
            <FaUser className="text-gray-700 hover:text-gray-900 cursor-pointer" />
            <FaShoppingCart className="text-gray-700 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
