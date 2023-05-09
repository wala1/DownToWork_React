import React, { useState, useEffect } from 'react';
import './quizzes.css';
import StartQuiz from './startQuiz';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Quizzes() {

  const { id } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [showTest, setShowTest] = useState(false);
  const [quizId, setQuizId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");

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
        const response = await axios.get(`http://localhost:3001/question/getQuestionsByIdQuiz?id=${quizId}`)
          .then((response) => {
            if (response) {
              const fetchedQuestions = response.data.questions;
              setQuestions(fetchedQuestions);
              console.log("questions : " + fetchedQuestions);
              console.log("length question :" + fetchedQuestions.length);

            }
          })

      } catch (error) {
        console.error(error);
      }
    }

    if (quizId) {
      fetchQuestions();
    }
  }, [quizId]);


  const handleStart = (quizId) => {
    setQuizId(quizId);
    console.log("quiz id :" + quizId);
    console.log("length question :" + questions.length);
    axios.get('http://localhost:5000/name')
      .then(response => {
        console.log('response: ', response);
        console.log('name: ', response.data.name);
        setName(response.data.name);
        console.log("name: " + name);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
    if (name == 'down-syndrom') {
      setShowTest(true);
    }else{
      alert("Sorry you can't pass the test");
    }
  }


  return (<>

    {/* Body */}

    {showTest ? (
      <StartQuiz questions={questions} quizId={quizId} />
    ) : (
      <>
        <div className="body_wrap">
          <div className="page_wrap">
            <div className="top_panel_fixed_wrap" />
            {/* Content */}
            <div className="page_content_wrap" style={{ marginTop: '-173px' }}>
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

              <div className="row">
                {quizzes.map((quiz) => (
                  <div key={quiz._id} className=" itemCourse cardCourse">
                    <img src={`http://localhost:3001/${quiz.picture.imgUrl}`} alt="" className="card-img-course" />
                    <div className="card-body-course">
                      <h1 className="card-title-course"> {quiz.name} </h1>
                      <p className="card-sub-title-course"> Type: {quiz.type} </p>
                      <p className="card-sub-title-course">{quiz.nbrQuestion} Questions</p>
                      <p className="card-sub-title-course">{quiz.description.slice(0, 143)}...</p>
                      <div style={{ display: "inline-block" }}>
                        <button className="card-btn-color" style={{ display: "inline-block" }}>TUTO</button>
                        <button onClick={() => handleStart(quiz._id)} className="card-btn-color" style={{ display: "inline-block" }}>START</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
              </div>

            </div>

            {/* /Content */}
          </div>
        </div>
        {/* /Body */}


        <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
        <div className="custom_html_section" />

      </>

    )}
  </>
  );
}

export default Quizzes;


