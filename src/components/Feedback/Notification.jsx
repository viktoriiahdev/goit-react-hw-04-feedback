import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  flex: 1;
  align-self: center;
  color: red;
  font-size: 24px;
`;

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
