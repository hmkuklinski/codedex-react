import { useState, useEffect } from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Question from './components/Question';
import Results from './components/Results';
import UserForm from './components/UserForm';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex]= useState(0);
  const [answers, setAnswers]= useState([]);
  const [userName, setUserName]= useState("");
  const [element, setElement]= useState("");
  const [dogPic, setDogPic]= useState(null);

  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
    {
      question: "What is your favorite animal?",
      options: ["Lion 🦁", "Dolphin 🐬", "Frog 🐸", "Duck 🦆"]
    },
    {
      question: "What is your favorite coding language?",
      options: ["HTML", "CSS", "JavaScript", "Python"]
    },
    {
      question: "How do you prefer to get around?",
      options: ["Bus 🚌", "Taxi 🚕", "Bicycle 🚲", "Car 🚗"]
    }
  ];
  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air"
  };
  const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
    "Lion 🦁": "Fire",
    "Dolphin 🐬": "Water",
    "Frog 🐸": "Earth",
    "Duck 🦆": "Air",
    "HTML": "Fire",
    "CSS": "Water",
    "JS": "Air",
    "Python": "Earth",
    "Bus 🚌": "Air",
    "Taxi 🚕": "Fire",
    "Bicycle 🚲":"Earth",
    "Car 🚗": "Water",
  };

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  function handleUserFormSubmit(name) {
    setUserName(name);
  };

  function determineElement(answers) {
    const counts = {};
    answers.forEach(function(answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function(a, b) {
      return counts[a] > counts[b] ? a : b
    });
  };

  useEffect(
    function () {
      if (currentQuestionIndex === questions.length) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        fetchDog();
      }
    },
    [currentQuestionIndex]
  );

  async function fetchDog(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (response.ok===false){
      throw new Error("fetch failed");
    }
    const data= await response.json();
    setDogPic(data.message);
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm onSubmit={handleUserFormSubmit} />} />
        <Route
          path="/quiz"
          element={
            currentQuestionIndex < questions.length ? (
              <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} onAnswer={handleAnswer} />
            ) : (
              <Results element={element} dogPic={dogPic} />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
