import { List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { StyledLink } from '../AppBar.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <List
      component="nav"
      sx={{ display: 'flex', listStyle: 'none', padding: '0' }}
    >
      <ListItem sx={{ margin: '0 8px' }}>
        <StyledLink to="/">
          <ListItemText primary="Home" />
        </StyledLink>
      </ListItem>
      {isLoggedIn && (
        <ListItem sx={{ margin: '0 8px' }}>
          <StyledLink to="/contacts">
            <ListItemText primary="Phonebook" />
          </StyledLink>
        </ListItem>
      )}
    </List>
  );
};

export default Navigation;
