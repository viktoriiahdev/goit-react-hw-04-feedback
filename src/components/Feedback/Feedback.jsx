import React, { useState } from 'react';

// import css from 'components/Statistics/Statistics.module.css';
// import { StatItem } from 'components/StatItem/StatItem';

import { FeedbackWrapper } from './Feedback.styled';

import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedbackTypes = { good, neutral, bad };

  const addFeedback = type => {
    switch (type) {
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'good':
        setGood(state => state + 1);
        break;
      default:
        break;
    }
  };

  function countTotalFeedback() {
    return Object.values(feedbackTypes).reduce((total, value) => (total += value), 0);
  }

  const countPositiveFeedbackPercentage = () =>
    `${((feedbackTypes['good'] / countTotalFeedback()) * 100).toFixed()}%`;

  const countTotalValue = countTotalFeedback();
  const countPositiveValue = countPositiveFeedbackPercentage();

  return (
    <FeedbackWrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackTypes} onLeaveFeedback={addFeedback} />
      </Section>
      {countTotalValue ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveValue}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </FeedbackWrapper>
  );
};

// export class Feedback1 extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = key => {
//     this.setState(prevState => ({
//       ...prevState,
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce((total, value) => (total += value), 0);

//   countPositiveFeedbackPercentage = () =>
//     `${((this.state['good'] / this.countTotalFeedback()) * 100).toFixed()}%`;

//   render() {
//     const { state, addFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
//     const { good, bad, neutral } = state;
//     const countTotalValue = countTotalFeedback();
//     const countPositiveValue = countPositiveFeedbackPercentage();

//     return (
//       <FeedbackWrapper>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={state} onLeaveFeedback={addFeedback} />
//         </Section>
//         {countTotalValue ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalValue}
//               positivePercentage={countPositiveValue}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </FeedbackWrapper>
//     );
//   }
// }
