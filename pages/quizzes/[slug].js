import Head from "next/head";
import React from "react";
import glob from "glob";
import Quiz from "../../components/Quiz/Quiz";
import Result from "../../components/Quiz/Result";
import Layout from "../../components/Layout";

export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = this.props.questions.map((question) =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      question: this.props.questions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < this.props.questions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.props.questions[counter].question,
      answerOptions: this.props.questions[counter].answers,
      answer: "",
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: result[(result.length * Math.random()) | 0] });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.props.questions.length}
        onAnswerSelected={this.handleAnswerSelected}
        counter={this.state.counter}
      />
    );
  }

  renderResult() {
    return (
      <div>
        <Result
          quizResult={this.state.result}
          quizResultText={this.props.results[this.state.result]}
          hasImages={this.props.hasImages}
        />
        <div className="quiz-reset-button" onClick={() => this.resetQuiz()}>
          Take the quiz again?
        </div>
      </div>
    );
  }

  resetQuiz() {
    const shuffledAnswerOptions = this.props.questions.map((question) =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      counter: 0,
      questionId: 1,
      question: this.props.questions[0].question,
      answerOptions: shuffledAnswerOptions[0],
      answer: "",
      answersCount: {},
      result: "",
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>The Crossing Board - Quiz</title>
        </Head>
        <Layout>
          <div className="quiz-wrapper">
            <div className="quiz-title">Quiz</div>
            <div className="quiz-name">{this.props.name}</div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div>
          <style jsx>{`
            .quiz-wrapper {
              background-color: #fdf8e3;
              max-width: 80%;
              margin: 20px auto;
              padding: 20px;
              border-radius: 10px;
              color: #667756;
            }
            .quiz-title {
              font-size: 2em;
              font-weight: bold;
              background: #c88d5e;
              width: fit-content;
              margin: 0 auto;
              padding: 10px 50px;
              border: 2px dashed #fef0d1;
              border-radius: 20px;
              margin-bottom: 20px;
              color: #fef0d1;
            }

            .quiz-name {
              font-size: 1.2em;
              color: #c88c5d;
              font-weight: bold;
            }

            :global(.quiz-reset-button) {
              border-radius: 20px;
              cursor: pointer;
              width: fit-content;
              padding: 10px 50px;
              margin: 0 auto;
              background-color: #c88d5e;
              color: #fef0d1;
              transition: all 0.5s ease-out;
            }

            :global(.quiz-reset-button:hover) {
              background-color: #667756;
            }
          `}</style>
        </Layout>
      </div>
    );
  }
}

export async function getStaticPaths() {
  const quizzes = glob.sync("quizzes/**/*.json");

  console.log(quizzes);

  const quizzesSlugs = quizzes.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -5).trim()
  );

  const paths = quizzesSlugs.map((slug) => `/quizzes/${slug}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../quizzes/${slug}.json`);

  return {
    props: {
      ...content,
    },
  };
}
