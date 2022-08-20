import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import gif from './img/js-animation.gif';

const questions = [
  {
    title: 'Inside which HTML element do we put the JavaScript?',
    variants: ['<script>', '<javascript>', '<scripting>', '<js>'],
    correctVariant: 0,
  },
  {
    title: 'Where is the correct place to insert a JavaScript?',
    variants: [
      'The <head> section',
      'The <body> section',
      'Both the <head> section and the <body> section are correct',
    ],
    correctVariant: 2,
  },
  {
    title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    variants: ['<script href="xxx.js">', '<script name="xxx.js">', '<script src="xxx.js">'],
    correctVariant: 2,
  },
];

const Home = () => {
  return (
    <div className="home">
      <Link to="/quiz" className="start-btn">
        Start Quiz
      </Link>
      <img src={gif} alt="js" className="js-gif" />
    </div>
  );
};

const Quiz = () => {

  const []

  return (
    <div className="quiz">
      <h1 className="quiz-title">Where is the correct place to insert a JavaScript?</h1>
      <ul className="quiz-list">
        {questions.map((item) => {
          <li>{}</li>
        })}
      </ul>
    </div>
  );
};

const Result = () => {
  return <div className='result'>
    <h2 className='result-title'>
      You answered 5 true is 5 questions
    </h2>
  </div>;
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default App;
