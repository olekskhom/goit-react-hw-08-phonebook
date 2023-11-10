import { Box, TextField } from '@mui/material';
import StyledButton from 'components/helpers/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const normalizeName = name.toLowerCase();

    const usedName = contacts.some(
      contact => contact.name.toLowerCase() === normalizeName
    );
    if (usedName) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <StyledButton>Add contact</StyledButton>
    </Box>
  );
};

export default ContactForm;
