import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/icon.png"
import { PiHandbagSimpleBold } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useContext, useState } from 'react';
import { ImCross } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";
import { AuthContext } from '../ContexApi/AuthProvider';
import { CartContext } from '../ContexApi/CartProvider';
function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Toggle to open/close the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle  to open/close the profile dropdown
    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);

    };
    // call auth context 
    const { user, logout } = useContext(AuthContext)

    const {cart}  = useContext(CartContext)
    // console.log(cart);
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <h1 className="text-center text-[20px] font-bold">
                        Furni<span className="text-[#1E99F5]">Flex</span>
                    </h1>
                </div>

                {/* Links Section (Hidden on mobile) */}
                <div className="hidden md:flex space-x-8 text-gray-600">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/products" className="hover:text-blue-600">Products</Link>
                    <Link to="/categories" className="hover:text-blue-600">Categories</Link>
                    <Link to="/custom" className="hover:text-blue-600">Custom</Link>
                    <Link to="/blog" className="hover:text-blue-600">Blog</Link>
                </div>

                {/* Icons Section */}
                <div className="flex  items-center space-x-4  text-2xl">
                    {/* Hamburger icon for mobile */}
                    <button className="text-gray-600 md:hidden" onClick={toggleMenu}>
                        {
                            !isMenuOpen ? <MdMenu /> : <ImCross />
                        }
                    </button>
                    <button>
                        <div className='relative'>
                            <p>
                                <PiHandbagSimpleBold />
                            </p>
                            {/* Absolute positioning should be relative to this div */}
                            <p className='absolute top-0 right-0'>
                                <span className='text-[10px] rounded-full px-[6px] py-[3px] bg-[#323232] text-white'>{cart?.length}</span>
                            </p>
                        </div>
                    </button>


                    {/* Profile Icon */}
                    <div className="relative">
                        <button onClick={toggleProfile}>
                            {
                                !isProfileOpen ? <RxAvatar /> : <IoMdCloseCircle />
                            }
                        </button>

                        {/* Dropdown for user profile */}
                        {isProfileOpen && (
                            user ?
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                                    <div className="px-4 py-2">
                                        <p className="font-semibold">{user?.firstName}</p>
                                        <p className="text-sm text-gray-500">{user?.email}</p>
                                    </div>
                                    <div className="border-t border-gray-200"></div>
                                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Logout
                                    </button>
                                </div>
                                :
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">

                                    <Link to={'/login'}>
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Login
                                        </button>
                                    </Link>
                                </div>
                        )}
                    </div>
                </div>
            </div>

           {/* mobile view  */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="flex flex-col space-y-4 text-gray-600 p-4">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <Link to="/products" className="hover:text-blue-600">Products</Link>
                        <Link to="/categories" className="hover:text-blue-600">Categories</Link>
                        <Link to="/custom" className="hover:text-blue-600">Custom</Link>
                        <Link to="/blog" className="hover:text-blue-600">Blog</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
