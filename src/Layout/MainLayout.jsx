
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {

    const location = useLocation();
    const hideNavbarAndFooter = ['/signup', '/login'].includes(location.pathname);
    return (
        <div>
      
        {!hideNavbarAndFooter && <Navbar/>}
        <Outlet/>
        {!hideNavbarAndFooter &&   <Footer/>}
     </div>
    );
};

export default MainLayout;