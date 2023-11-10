import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const refreshing = useSelector(authSelectors.getFetchingCurrentUser);
  const shouldRedirect = !refreshing && !isLoggedIn;

  return <>{shouldRedirect ? <Navigate to="/login" /> : children}</>;
};

export default PrivateRoute;
