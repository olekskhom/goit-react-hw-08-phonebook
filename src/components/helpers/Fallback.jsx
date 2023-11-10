import { Box, Container, Skeleton } from '@mui/material';

const sizes = { xs: 200, sm: 300, md: 400, lg: 600 };
const Fallback = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Box
        sx={{
          mx: 'auto',
          width: sizes,
          height: sizes,
        }}
      >
        <Skeleton animation="wave" variant="rectangular" height={200} />
      </Box>
    </Container>
  );
};

export default Fallback;
