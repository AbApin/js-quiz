import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [step,setStep] = React.useState(0);
  const question = questions[step];
  

  return (
    <div className="quiz">
      <h1 className="quiz-title">{question.title}</h1>
      <ul className="quiz-list">
        {question.variants.map((item) => {
          return <li className='quiz-answer' key={item} onClick={() => {
            setStep(step + 1)
            if(step === questions.length - 1){
              navigate("/result")
            }
          }}>{item}</li>
        })}
      </ul>
    </div>
  );
};

const Result = () => {
  return <div className='result'>
    <h2 className='result-title'>
      You answered 5 true is {questions.length} questions
    </h2>
    <Link to="/" className='again-btn'>Start Again</Link>
  </div>;
};

const App = () => {
  const [correct,setCorrect] = React.useState(0)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />}/>
      </Routes>
      
    </div>
  );
};

export default App;
