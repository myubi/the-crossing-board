import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
      <style jsx>
        {`        
          
          .answerOption {
            border-radius: 20px;
          }
          
          .answerOption:hover {
            background-color: #c88d5e;

          }
          
          .answerOption:hover .radioCustomLabel {
            color: #fef0d1;
          }

          .radioCustomButton {
            position: absolute;
            width: auto;
            opacity: 0;
          }

          .radioCustomButton,
          .radioCustomLabel {
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
          }

          .radioCustomLabel {
            position: relative;
            width: 100%;
            margin: 0;
            padding: 1.5rem 2.5rem 1.5rem 5rem;
            font-size: 16px;
            line-height: 1.5;
          }

          .radioCustomButton ~ .radioCustomLabel:before {
            position: absolute;
            top: 20px;
            left: 38px;
            width: 28px;
            height: 28px;
            content: '';
            display: inline-block;
            vertical-align: middle;
            background: #fff;
            border: 1px solid #bbb;
            border-radius: 50%;
            transition: all 0.3s;
          }

          .radioCustomButton:checked ~ .radioCustomLabel:before {
            content: '';
            background: #c88d5e;
            background-size: 27px;
            border-color: #FFFFFF;
          }
        `}
      </style>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;