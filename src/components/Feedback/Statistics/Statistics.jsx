import { Component } from 'react';
import { StatisticsList } from './Statistics.styled';

export class FeedbackStatistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;
    const totalValue = total();
    const percentageValue = percentage();

    return (
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
        <li>
          <p>Total: {totalValue}</p>
        </li>
        <li>
          <p>Positive feedback: {percentageValue} %</p>
        </li>
      </StatisticsList>
    );
  }
}
