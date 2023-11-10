import { Box, TextField } from '@mui/material';
import PasswordInput from 'components/helpers/PasswordInput';
import StyledButton from 'components/helpers/StyledButton';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    try {
      await dispatch(logIn({ email, password })).unwrap();
      toast.success('Welcome!', {
        duration: 3000,
        position: 'top-center',
      });
      form.reset();
    } catch (error) {
      toast.error('Please enter your correct email and login!', {
        duration: 3000,
        position: 'top-center',
      });
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="text"
          autoFocus
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <PasswordInput />
        <StyledButton>Log in</StyledButton>

        <Link variant="body2" to="/register">
          Don't have an account? To register
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
