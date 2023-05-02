import React, { useState, useEffect } from 'react';
import './StartQuiz.css';
import Timer from "./Timer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StartQuiz(props) {
  const { questions } = props;
  const quizId = props.quizId;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timerActive, setTimerActive] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const userId = user._id;
  const navigate = useNavigate();
  const question = questions[currentQuestion];

  const saveTrialData = async (userAnswersParam) => {
    console.log(window.location.href);
    window.location.href = "http://localhost:3000/trial";
    console.log(window.location.href);
    try {
      await axios.post('http://localhost:3001/trial/saveTrial', {
        "userId": userId,
        "quizId": quizId,
        "startDate": startDate,
        "endDate": new Date(),
        "score": score,
        "answers": userAnswersParam.map(answerItem => {
          return {
            "questionId": answerItem.questionId,
            "selectedChoice": answerItem.selectedChoice
          }
        })        
      })
        .then((response) => {
          if (showScore === true) {
            navigate('http://localhost:3000/trial');
          }
        });
    } catch (error) {
      console.error(error);
    }
  };


  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };


  const handleAnswerOptionClick = (response, choiceId) => {
    const userAnswer = {
      questionId: question._id,
      selectedChoice: choiceId
    };
    setUserAnswers([...userAnswers, userAnswer]);
    setShowScore(currentQuestion >= questions.length - 1);
    setScore(prevScore => (response ? prevScore + 1 : prevScore));
    setCurrentQuestion(prevQuestion =>
      prevQuestion < questions.length - 1 ? prevQuestion + 1 : prevQuestion
    );

    if (currentQuestion >= questions.length-1) {
      setTimerActive(false);
      setStartDate(startDate);
      const updatedAnswers = [...userAnswers, userAnswer];
      setUserAnswers(updatedAnswers);
      console.log(updatedAnswers.length);
      saveTrialData(updatedAnswers);
    }
    
  };

  return (
    <>
      {showScore ? (
        <div>
          {/* You scored {score} out of {questions.length} */}
          {/* <Trial idUser={userId} /> */}
        </div>
      ) : (
        <>
          <div className="card text-center">
            <div key={question._id}>
              <div className="card-header">
                <span style={{ marginRight: '71rem', fontSize: '17px', color: 'black', fontWeight: 'bold', display: 'inline-block', marginRight: '61rem' }}>
                  <Timer />
                </span>
                <span style={{ marginRight: '71rem', fontSize: '17px', color: 'black', fontWeight: 'bold', display: 'inline-block', marginRight: '9px', color: 'black', marginLeft: '4rem' }}>
                  <b>{currentQuestion + 1}</b> of <b>{questions.length}</b>
                </span>
                <span style={{ backgroundColor: ' #F7FAFD' }}>
                  Score: {score}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title"><span style={{ fontFamily: 'serif', fontSize: '2.5rem' }}>{question.title}</span></h5>
                <p className="card-text">{question.response}</p>

                <div className="row">
                  {question.choices.map((choice, index) => (
                    <div key={index} className="col-sm-6 my-2">
                      <button className="btn btn-outline-primary btn-block" onClick={() => handleAnswerOptionClick(choice.response, choice._id)} >
                        <span style={{ color: 'black', fontSize: '16px', fontFamily: 'sans-serif' }}>{choice.text}</span>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" onClick={handleNextClick} style={{ marginTop: '2rem', width: '8rem', height: '5rem', backgroundColor: '#0E3F70' }}>
                    <span style={{ fontSize: '19px', fontFamily: 'cursive' }}>Next</span>
                  </button>
                </div>
              </div>
              <div className="card-footer text-muted">
                <FontAwesomeIcon icon={faLightbulb} /><span style={{ fontSize: '21px', fontFamily: 'sans-serif' }}>{question.feedback}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default StartQuiz;

