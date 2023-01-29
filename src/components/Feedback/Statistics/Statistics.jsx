import { Component } from 'react';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsContainer,
  StatisticsSum,
} from './Statistics.styled';
import { FaChartLine, FaUser } from 'react-icons/fa';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const totalValue = total();
    const percentageValue = positivePercentage();

    return (
      <>
        <StatisticsList>
          <StatisticsItem review="good">
            <p>Good: {good}</p>
          </StatisticsItem>
          <StatisticsItem review="neutral">
            <p>Neutral: {neutral}</p>
          </StatisticsItem>
          <StatisticsItem review="bad">
            <p>Bad: {bad}</p>
          </StatisticsItem>
        </StatisticsList>
        <StatisticsContainer>
          <StatisticsSum>
            <FaUser size={15} />
            Total: {totalValue}
          </StatisticsSum>
          <StatisticsSum>
            <FaChartLine size={20} />
            Positive feedback: {percentageValue}%
          </StatisticsSum>
        </StatisticsContainer>
      </>
    );
  }
}
