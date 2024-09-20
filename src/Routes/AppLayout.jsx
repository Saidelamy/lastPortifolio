import { Outlet } from 'react-router-dom';
import Navbar from '../componants/Navbar';
import Footer from '../Ui/Footer';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
