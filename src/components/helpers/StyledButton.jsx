import { Button } from '@mui/material';
import React from 'react';

const StyledButton = ({ children }) => {
  return (
    <Button sx={{ mt: 3, mb: 2 }} fullWidth variant="contained" type="submit">
      {children}
    </Button>
  );
};

export default StyledButton;
