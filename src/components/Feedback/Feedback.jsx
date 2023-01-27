import { Component } from 'react';

import { FeedbackStatus } from './FeedbackStatus';
import { FeedbackStatistics } from './FeedbackStatistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <FeedbackStatus />
        <FeedbackStatistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
