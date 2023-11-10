import { Button, List, ListItem } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  const handleLogOut = () => dispatch(logOut());

  return (
    <List
      component="div"
      sx={{ display: 'flex', listStyle: 'none', padding: '0' }}
    >
      <ListItem component="div">
        <span>Welcome, {user.name}</span>
      </ListItem>
      <Button color="primary" variant="filled" onClick={handleLogOut}>
        Logout
      </Button>
    </List>
  );
};

export default UserMenu;
