import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChange = evt => dispatch(filterContact(evt.target.value));

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <TextField
        value={value}
        fullWidth
        type="text"
        name="filter"
        onChange={onChange}
        label="Find contacts by Name"
        variant="standard"
      />
    </Box>
  );
};

export default Filter;
