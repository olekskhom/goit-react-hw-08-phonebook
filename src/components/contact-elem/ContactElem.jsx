import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {number}
            </Typography>
          }
        />
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteContact(id))}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
