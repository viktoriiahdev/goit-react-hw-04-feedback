import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(button => (
    <Button
      key={button}
      className={button}
      type="button"
      onClick={() => onLeaveFeedback(button)}
      value={button}
    >
      {button.charAt(0).toUpperCase() + button.slice(1)}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
