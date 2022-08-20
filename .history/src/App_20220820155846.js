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
    title: `If you type the following code in the console window, what result will you get?
    3 > 2 > 1 === false;`,
    variants: ['true', 'false'],
    correctVariant: 0,
  },
  {
    title: `If the value of x is 40, then what is the output of the following program?
    (x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);`,
    variants: [
      'ReferenceError',
      'Divisible by 10',
      'Not divisible by 10',
      'None of the above'
    ],
    correctVariant: 1,
  },
  {
    title: 'JavaScript is a ___ -side programming language.',
    variants: ['Client', 'Server', 'Both', 'None'],
    correctVariant: 2,
  },
  {
    title: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
    variants: [
      'alertBox(“Hello DataFlair!”);',
      ' alert(Hello DataFlair!);',
      ' msgAlert(“Hello DataFlair!”);',
      'alert(“Hello DataFlair!”);',
    ],
    correctVariant: 3,
  },
  {
    title: 'How do you find the minimum of x and y using JavaScript?',
    variants: ['min(x,y);', 'Math.min(x,y)', 'Math.min(xy)', 'min(xy);'],
    correctVariant: 1,
  },
  {
    title: 'Which JavaScript label catches all the values, except for the ones specified?',
    variants: ['catch', 'label', 'try', 'default'],
    correctVariant: 3,
  },
  {
    title: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
    variants: ['if(x 2)', 'if(x = 2)', ' if(x == 2)', 'if(x != 2 )'],
    correctVariant: 2,
  },
  {
    title: `Which is the correct JavaScript syntax to change the HTML content given below?
    <p id=”test”>Hello World!</p>`,
    variants: [
      'document.getElementById(“test”).innerHTML = “Hello DataFlair!”;',
      'document.getElementsById(“test”).innerHTML = “Hello DataFlair!”;',
      'document.getElementById(test).innerHTML = “Hello DataFlair!”;',
      'document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;',
    ],
    correctVariant: 0,
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

const Quiz = ({ correct, setCorrect }) => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const procent = Math.round((step / questions.length) * 100);

  return (
    <div className="quiz">
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress-box"></div>
      </div>
      <h1 className="quiz-title">{question.title}</h1>
      <ul className="quiz-list">
        {question.variants.map((item, index) => {
          return (
            <li
              className="quiz-answer"
              key={item}
              onClick={() => {
                if (index === question.correctVariant) {
                  setCorrect(correct + 1);
                }
                setStep(step + 1);
                if (step === questions.length - 1) {
                  navigate('/result');
                }
              }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Result = ({ correct, setCorrect }) => {
  return (
    <div className="result">
      <h2 className="result-title">
      You answered {correct} questions out of 10 correctly
        You answered  true is {questions.length} questions
      </h2>
      <Link to="/" className="again-btn" onClick={() => setCorrect(0)}>
        Start Again
      </Link>
    </div>
  );
};

const App = () => {
  const [correct, setCorrect] = React.useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz correct={correct} setCorrect={setCorrect} />} />
        <Route path="/result" element={<Result correct={correct} setCorrect={setCorrect} />} />
      </Routes>
    </div>
  );
};

export default App;
