import { Component } from 'react';

import { Title } from './Title';
import { FeedbackStatus } from './Status';
import { FeedbackStatistics } from './Statistics';
import { Notification } from './Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statisticsCounter = e => {
    const name = e.currentTarget.name;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : 0;
  };

  render() {
    const totalValue = this.countTotalFeedback();

    return (
      <>
        <Title title="Please leave feedback">
          <FeedbackStatus increment={this.statisticsCounter} />
        </Title>

        <Title title="Statistics">
          {totalValue ? (
            <FeedbackStatistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              percentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Title>
      </>
    );
  }
}
