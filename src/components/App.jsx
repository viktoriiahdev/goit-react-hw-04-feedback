import { Box } from './Box';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" as="main">
      <Feedback />
    </Box>
  );
};
