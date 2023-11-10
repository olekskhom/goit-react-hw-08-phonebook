import { Box, Container, CssBaseline, Typography } from '@mui/material';
import LoginForm from 'components/form/LoginForm';

const Login = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        margin: '20px auto',
      }}
    >
      <CssBaseline />
      <Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Log in
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;
