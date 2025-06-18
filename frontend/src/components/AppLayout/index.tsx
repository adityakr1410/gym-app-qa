import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar';
import UserDropdown from '../UserDropdown';
import { MobileNav } from '../Navbar/MobileNav';

const AppLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <UserDropdown />
      <MobileNav />
      <>
        <Outlet />
      </>
    </>
  );
};

export default AppLayout;
