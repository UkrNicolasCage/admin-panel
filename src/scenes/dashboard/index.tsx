import { Box } from '@mui/material';
import { Header } from '../../components/Header';

export const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent='space-between' alignItems='center'></Box>
      <Header
        title="dashboard"
        subtitle="Welcome to you dashboard"
      />
      
    </Box>
  );
};
