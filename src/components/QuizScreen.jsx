import React, { useState } from 'react';
import styled from 'styled-components';
import { quizData } from '../DummyData';
import ResultScreen from './ResultScreen';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [selectAnswer, setSelectAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) { 
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true)
    }
  };

  const CountCorrectAnswer = (ans) => {

    if (quizData[currentQuestion]?.answer === ans) {
      setCorrectAnswer(correctAnswer + 1)
    }
    setSelectAnswer(ans)
  }

  return (
    <QuizContainer>
      {
        showResult ? <ResultScreen correctAnswer={correctAnswer} /> : <> <p className='PagesCount'>{`Question ${currentQuestion + 1} of ${quizData.length}`}</p>

          <div className="QuestionsContainer">
            <p>Question:</p>
            <p>{quizData[currentQuestion]?.question}</p>
          </div>

          <div className="AnswerMainContainer">
            {quizData[currentQuestion]?.options.map((ans, index) => (
              <p className={`AnswerContainer ${selectAnswer === ans ? "active" : null} `} key={index} onClick={() => CountCorrectAnswer(ans)}>
                {ans}
              </p>
            ))}
          </div>

          <button className='NextBtn' onClick={nextQuestion} >
            Next
          </button> 
        </>
      }

    </QuizContainer>
  );
};

export default QuizScreen;



const QuizContainer = styled.div`
  width: 50%; 
 margin: auto;
 margin-top: 10rem;
 border: 1px solid #fff;
 background: #ffffff;
 display: flex;
 flex-direction: column; 
 padding:  2rem;
 box-shadow: 5px 5px 10px #494949;
 font-size: 1.2rem; 

 .QuestionsContainer{
  padding-left: 1rem;
 }

 .PagesCount{ 
  margin:  auto; 
 }
 
 .AnswerMainContainer{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 0; 
 }

 .AnswerContainer{
  width: 45%;
  padding: 0.5rem;
  display: flex;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
 }

 .active{
  background: #5656ac;
  color: #fff;
 }

  
 .NextBtn{
  width: 15%;
  float: left;
  padding: 0.8rem 1.5rem;
  background: #000;
  color: #ffffff;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
 }

`