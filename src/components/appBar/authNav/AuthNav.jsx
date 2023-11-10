import { List, ListItem } from '@mui/material';
import { StyledLink } from '../AppBar.styled';

const AuthNav = () => {
  return (
    <List
      component="div"
      sx={{ display: 'flex', listStyle: 'none', padding: '0' }}
    >
      <ListItem>
        <StyledLink to="/register">Registration</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/login">Login</StyledLink>
      </ListItem>
    </List>
  );
};

export default AuthNav;
