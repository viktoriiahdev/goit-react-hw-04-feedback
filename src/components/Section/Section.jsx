import PropTypes from 'prop-types';

import { SectionTitle } from 'components/Section/Section.styled';
import { Box } from 'components/Box';

export const Section = ({ title, children }) => {
  return (
    <Box as="section" display="flex" flexDirection="column">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
