import './App.css';

const questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    variants: ["<script>","<javascript>","<scripting>","<js>"],
    correctVariant: 0
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    variants: ["The <head> section","The <body> section","Both the <head> section and the <body> section are correct"],
    correctVariant: 2
  },
  {
    title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    variants: ["<script href="xxx.js">","<javascript>","<scripting>","<js>"],
    correctVariant: 0
  }
]



function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
