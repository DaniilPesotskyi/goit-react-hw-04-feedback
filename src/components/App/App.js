// import css from './App.module.css'
import {React, Component } from 'react'

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100
  }

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
  }

  render() {
    return (
      <>
        <Section title={'Feedback'}>
          <FeedbackOptions options={Object.keys(this.state)} onFeedback={this.onLeaveFeedback}/>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}>
            <Notification message="There is no feedback" />
          </Statistics>
        </Section>
      </>
    );
  }
}

export default App;
