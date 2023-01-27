import { Component } from 'react';
import { Title } from '../Common/Common.styled';
import { StatisticsList } from './FeedbackStatistics.styled';

export class FeedbackStatistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;

    return (
      <section>
        <Title>Statistics</Title>
        <StatisticsList>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
        </StatisticsList>
      </section>
    );
  }
}
