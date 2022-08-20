import { Link } from 'react-router-dom';
import './App.css';

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
  return <div>
    <Link>Start Quiz</Link>
  </div>
}

const Quiz = () => {
  return <div className='quiz'>
    <h1 className='quiz-title'>Where is the correct place to insert a JavaScript</h1>
    <ul>
      <li className='quiz-answer'>The {"<head>"} section</li>
      <li className='quiz-answer'>The {"<body>"} section</li>
      <li className='quiz-answer'>Both the {"<head>"} section and the {"<body>"} section are correct</li>
    </ul>
  </div>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
