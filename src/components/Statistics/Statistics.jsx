import PropTypes from 'prop-types';

import { StatisticList, StatisticItem } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <StatisticItem>
        <span className="label">Good: </span>
        <span className="value">{good}</span>
      </StatisticItem>
      <StatisticItem>
        <span className="label">Neutral: </span>
        <span className="value">{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <span className="label">Bad: </span>
        <span className="value">{bad}</span>
      </StatisticItem>
      <StatisticItem className="total">
        <span className="label total">Total: </span>
        <span className="value">{total}</span>
      </StatisticItem>
      <StatisticItem className="total">
        <span className="label">Positive feedback: </span>
        <span className="value">{positivePercentage}</span>
      </StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
