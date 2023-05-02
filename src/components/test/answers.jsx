import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Answers(props) {
  const { trial } = props;
  const [questions, setQuestions] = useState([]);
  const [yourChoice, setYourChoice] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(`http://localhost:3001/question/getQuestionsByQuizId/${trial.quizId}`);
        setQuestions(response.data.questions);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuestions();
  }, [trial]);

  useEffect(() => {
    const tempYourChoice = [];
    const tempCorrectAnswer = [];
    questions.forEach((question, index) => {
      trial.answers.forEach((answer) => {
        if (answer.questionId === question._id) {
          question.choices.forEach((choice) => {
            if (answer.selectedChoice === choice._id) {
              tempYourChoice[index] = choice.text;
            }
            if (choice.response) {
              tempCorrectAnswer[index] = choice.text;
            }
          })
        }
      })
    });
    setYourChoice(tempYourChoice);
    setCorrectAnswer(tempCorrectAnswer);
  }, [questions, trial.answers]);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '25% 75%',
  };

  const columnStyle = {
    marginLeft: '1em',
  };

  return (
    <div style={gridStyle}>
      {questions.map((question, index) => (
        <React.Fragment key={index}>
          <div style={{ fontSize: '4.2rem', color: 'black', fontWeight: 'bold' }}>{index + 1}</div>
          <div style={columnStyle}>
            <div style={{textAlign: 'left', fontSize: '1.9rem', color: 'black', fontFamily: 'cursive', marginBottom: '10px'}}>{question.title}</div>
            <div style={{textAlign: 'left',fontSize: '1.4rem', fontFamily: 'cursive', color: yourChoice[index] === correctAnswer[index] ? 'green' : 'red'}}>Your Answer: {yourChoice[index]}</div>
            <div style={{textAlign: 'left',fontSize: '1.4rem', fontFamily: 'cursive', marginBottom: '8px'}} hidden={yourChoice[index] === correctAnswer[index]}>Correct Answer: {correctAnswer[index]}</div>
            <div style={{textAlign: 'left',fontSize: '1.4rem', fontFamily: 'Arial', marginBottom: '20px'}}>{question.feedback}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Answers;
