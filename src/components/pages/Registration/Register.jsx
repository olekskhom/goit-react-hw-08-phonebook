import { Box, Container, CssBaseline, Typography } from '@mui/material';
import RegisterForm from 'components/form/RegisterForm';

const Register = () => {
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
          Registration
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default Register;
