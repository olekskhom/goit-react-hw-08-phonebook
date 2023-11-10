import { ThemeProvider } from '@mui/material';
import { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operations.js';
import authSelectors from 'redux/auth/auth-selectors.js';
import theme from 'theme/theme.js';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import CustomAppBar from './appBar/AppBar.jsx';

const Login = lazy(() => import('../components/pages/Login/Login.jsx'));
const Register = lazy(() =>
  import('../components/pages/Registration/Register.jsx')
);
const Home = lazy(() => import('../components/pages/Home/Home.jsx'));
const Contacts = lazy(() =>
  import('../components/pages/Contacts/Contacts.jsx')
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster />
        {!isFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<CustomAppBar />}>
              <Route index element={<Home />} />
              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts">
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts">
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        )}
      </ThemeProvider>
    </>
  );
};
