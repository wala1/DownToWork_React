import React, { useState, useEffect } from 'react';
import './quizzes.css';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Quizzes() {

  const { id } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [showTest, setShowTest] = useState(false);
  const [QtsId, setQtsId] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axios.get(`http://localhost:3001/quiz/getQuizzesByIdTest?id=${id}`);
        setQuizzes(response.data.quizzes);
        console.log("quizzes : " + quizzes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuizzes();
  }, [id]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get(`http://localhost:3001/question/getQuestionsByIdQuiz?id=${QtsId}`);
        setQuestions(response.data.questions);
        console.log("questions : " + questions);
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuestions();
  }, [id]);

  // rest of the component code

  return (<>

    {/* Body */}

    <div className="body_wrap" hidden={showTest}>
      <div className="page_wrap">
        <div className="top_panel_fixed_wrap" />
        {/* Content */}
        <div className="page_content_wrap">
          {/* Course info section */}
          <div className="content">
            <article className="post_item post_item_single_courses courses">
              <section className="post_featured bg_tint_dark">
                <img alt="" src="https://thumbs.dreamstime.com/z/diagnostic-test-1448933.jpg" style={{ width: '100%', height: '400px' }} />

                <div className="post_thumb_hover d-flex flex-column justify-content-center align-items-center">
                  <div className="post_icon icon-book-2" />

                  <div className="post_categories">
                    <a className="courses_group_link" href="#">
                      Diagnostic Test
                    </a>
                  </div>
                  <h1 className="post_title entry-title">
                    Comprehensive Diagnostic Testing
                  </h1>
                  <div className="post_button">
                    <a
                      href="free-lesson.html"
                      className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_medium"
                    >
                      View Tests
                    </a>
                  </div>
                </div>
              </section>
            </article>
          </div>

          <div className="row" >
            {quizzes.map((quiz) => (
              <div key={quiz._id} className=" itemCourse cardCourse">
                <img src={quiz.picture} alt="" className="card-img-course" />
                <div className="card-body-course">
                  <h1 className="card-title-course"> {quiz.name} </h1>
                  <p className="card-sub-title-course"> Type: {quiz.type} </p>
                  <p className="card-sub-title-course">{quiz.nbrQuestion} Questions</p>
                  <p className="card-sub-title-course">{quiz.description.slice(0, 143)}...</p>
                  <div style={{ display: "inline-block" }}>
                    <button className="card-btn-color" style={{ display: "inline-block" }}>TUTO</button>
                    <button onClick={() => { setShowTest(!showTest); setQtsId(quiz._id) }} className="card-btn-color" style={{ display: "inline-block" }}>START</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* /Content */}
      </div>
    </div>
    {/* /Body */}


    {/* /Test Body */}
    {showTest && (
      <div>
        {questions.map((question) => (
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <h3>{question.title}</h3>
                <span>Score: {score}</span>
              </div>
            </Card.Header>
            <Card.Body>
              {question.choices.map((choice, i) => (
                <Button key={i} className="mb-3">
                  {choice}
                </Button>
              ))}
            </Card.Body>
          </Card>
        ))}
      </div>
    )}


    <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
    <div className="custom_html_section" />

    {/*
   */}
  </>
  );
}

export default Quizzes;


