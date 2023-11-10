import { List } from '@mui/material';
import { ContactElem } from 'components/contact-elem/ContactElem';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/filter/filter-selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <List fullWidth>
      {contacts.map(({ id, name, number }) => (
        <ContactElem key={id} id={id} name={name} number={number}></ContactElem>
      ))}
    </List>
  );
};
