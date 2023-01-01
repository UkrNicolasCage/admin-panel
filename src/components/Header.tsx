import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

type Props = {
  title: String;
  subtitle: String;
};

export const Header = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
        textTransform="uppercase"
      >
        {props.title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
      >
        {props.subtitle}
      </Typography>
    </Box>
  );
};
