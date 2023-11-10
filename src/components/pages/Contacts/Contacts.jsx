import { Container, Typography } from '@mui/material';
import { ContactList } from 'components/contact-list/ContactList';
import Filter from 'components/filter/Filter';
import ContactForm from 'components/form/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="sm">
      <ContactForm></ContactForm>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Typography align="center" variant="h3" component="h2">
          Your contact list is empty!
        </Typography>
      )}
    </Container>
  );
};

export default Contacts;
