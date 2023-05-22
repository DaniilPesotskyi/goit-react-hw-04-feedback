import { React, useState } from 'react';

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / (good + neutral + bad)) * 100;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(good + 1);
        break;
      case 'bad':
        setBad(good + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title={'Feedback'}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onFeedback={onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        >
          <Notification message="There is no feedback" />
        </Statistics>
      </Section>
    </>
  );
};

export default App;
