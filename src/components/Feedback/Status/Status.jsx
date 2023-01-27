import { Component } from 'react';
import { FeedbackList } from './Status.styled';

export class FeedbackStatus extends Component {
  render() {
    const { increment } = this.props;

    return (
      <FeedbackList>
        <li>
          <button type="button" name="good" onClick={increment}>
            Good
          </button>
        </li>
        <li>
          <button type="button" name="neutral" onClick={increment}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad" onClick={increment}>
            Bad
          </button>
        </li>
      </FeedbackList>
    );
  }
}
