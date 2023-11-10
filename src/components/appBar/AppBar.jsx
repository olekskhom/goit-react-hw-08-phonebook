import { AppBar, Toolbar } from '@mui/material';
import Fallback from 'components/helpers/Fallback';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import AuthNav from './authNav/AuthNav';
import Navigation from './navigation/Navigation';
import UserMenu from './userMenu/UserMenu';

const CustomAppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CustomAppBar;
