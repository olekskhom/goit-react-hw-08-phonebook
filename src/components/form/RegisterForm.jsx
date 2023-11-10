import { Box, TextField } from '@mui/material';
import PasswordInput from 'components/helpers/PasswordInput';
import StyledButton from 'components/helpers/StyledButton';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    try {
      await dispatch(register({ name, email, password })).unwrap();
      toast.success('Your registration was successful!', {
        duration: 3000,
        position: 'top-center',
      });
      form.reset();
    } catch (error) {
      toast.error(
        'Something is wrong. Try entering a different email or password.',
        {
          duration: 3000,
          position: 'top-center',
        }
      );
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          type="text"
          autoComplete="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <PasswordInput />
        <StyledButton>Sign up</StyledButton>
        <Link variant="body2" to="/login">
          Already have an account? Log in
        </Link>
      </Box>
    </>
  );
};

export default RegisterForm;
