import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  return (
    <div className="result">
      <div className="result-title">
        <strong>{props.quizResult}</strong>!
      </div>
      {props.hasImages && (
        <div>
          <img src={`/images/quiz/${props.quizResult}.png`} alt="Quiz Result" />
        </div>
      )}
      <div>{props.quizResultText}</div>

      <style jsx>
        {`
          .result {
            padding: 1.5rem 2.5rem;
          }
          .result-title {
            font-size: 2em;
          }
          img {
            max-width: 100%;
          }
        `}
      </style>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
