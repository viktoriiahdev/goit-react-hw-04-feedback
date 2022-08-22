import { Box } from './Box';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Box
      display="flex"
      // alignItems="flex-start"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      // pt={60}
      as="main"
    >
      <Feedback />
    </Box>
  );
};
