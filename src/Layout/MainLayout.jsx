
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    const location = useLocation();
    const hideNavbarAndFooter = ['/signup', '/login'].includes(location.pathname);
    return (
        <div >
      
        {!hideNavbarAndFooter && <Navbar/>}
        <div className='max-w-6xl mx-auto'>
        <Outlet/>
        </div>
        {!hideNavbarAndFooter &&   <Footer/>}
        <Toaster/>
     </div>
    );
};

export default MainLayout;