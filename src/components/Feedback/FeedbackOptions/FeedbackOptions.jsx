import { Component } from 'react';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';

const icons = [
  <BsFillEmojiSmileFill size={25} color="green" />,
  <BsFillEmojiNeutralFill size={25} color="grey" />,
  <BsFillEmojiAngryFill size={25} color="orangered" />,
];

export class FeedbackOptions extends Component {
  render() {
    const { options, increment } = this.props;

    return (
      <FeedbackList>
        {options.map((label, index) => (
          <FeedbackItem key={label}>
            <FeedbackBtn type="button" name={label} onClick={increment}>
              {icons[index]}
              {label[0].toUpperCase() + label.slice(1)}
            </FeedbackBtn>
          </FeedbackItem>
        ))}
      </FeedbackList>
    );
  }
}
