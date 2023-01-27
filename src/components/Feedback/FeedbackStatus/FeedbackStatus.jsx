import { Component } from 'react';
import { Title } from '../Common/Common.styled';
import { FeedbackList } from './FeedbackStatus.styled';

export class FeedbackStatus extends Component {
  render() {
    return (
      <section>
        <Title>Please leave feedback</Title>
        <FeedbackList>
          <li>
            <button type="button" name="good">
              Good
            </button>
          </li>
          <li>
            <button type="button" name="neutral">
              Neutral
            </button>
          </li>
          <li>
            <button type="button" name="bad">
              Bad
            </button>
          </li>
        </FeedbackList>
      </section>
    );
  }
}
