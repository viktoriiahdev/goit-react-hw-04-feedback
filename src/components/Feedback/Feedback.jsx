import React from 'react';

// import css from 'components/Statistics/Statistics.module.css';
// import { StatItem } from 'components/StatItem/StatItem';

import { FeedbackWrapper } from './Feedback.styled';

import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = key => {
    this.setState(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => (total += value), 0);

  countPositiveFeedbackPercentage = () =>
    `${((this.state['good'] / this.countTotalFeedback()) * 100).toFixed()}%`;

  render() {
    const { state, addFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const { good, bad, neutral } = state;
    const countTotalValue = countTotalFeedback();
    const countPositiveValue = countPositiveFeedbackPercentage();

    return (
      <FeedbackWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={addFeedback} />
        </Section>
        {countTotalValue ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalValue}
              positivePercentage={countPositiveValue}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackWrapper>
    );
  }
}
