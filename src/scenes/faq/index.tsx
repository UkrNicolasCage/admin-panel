import { Box, Typography, useTheme } from '@mui/material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { tokens } from '../../theme';
import { Header } from '../../components/Header';

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="FAQ"
        subtitle="Frequently Asked Questions Page"
      />
      <Accordion sx={{ mt: '30px' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Placeat perspiciatis eaque
            magnam officia? Quisquam saepe, earum nulla
            veritatis a magni.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: '30px' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Placeat perspiciatis eaque
            magnam officia? Quisquam saepe, earum nulla
            veritatis a magni.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: '30px' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Placeat perspiciatis eaque
            magnam officia? Quisquam saepe, earum nulla
            veritatis a magni.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: '30px' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Placeat perspiciatis eaque
            magnam officia? Quisquam saepe, earum nulla
            veritatis a magni.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mt: '30px' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
          >
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Placeat perspiciatis eaque
            magnam officia? Quisquam saepe, earum nulla
            veritatis a magni.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
