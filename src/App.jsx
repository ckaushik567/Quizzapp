import React, { useRef, useState } from 'react';
import './App.css';
import data from './assets/data';

function App() {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState(data[count]);
  const [score, setScrore] = useState(0);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const option4 = useRef();

  console.log(data.length)


  const handleOnChange = () => {
    setCount(prev => prev + 1);
    setQuestions(data[count + 1]);
    option1.current.classList.remove('currect');
    option2.current.classList.remove('currect');
    option3.current.classList.remove('currect');
    option4.current.classList.remove('currect');
    option1.current.classList.remove('wrong');
    option2.current.classList.remove('wrong');
    option3.current.classList.remove('wrong');
    option4.current.classList.remove('wrong');
  }

  const handleOnAgain = () => {
    setCount(0)
    setQuestions(data[0])
  }

  const handleOnCheck = (ansData) => {
    if (ansData == questions.ans) {
      setScrore(prev => prev + 1);
      if (ansData == 1) {
        option1.current.classList.add('currect');
      }
      if (ansData == 2) {
        option2.current.classList.add('currect');
      }
      if (ansData == 3) {
        option3.current.classList.add('currect');
      }
      if (ansData == 4) {
        option4.current.classList.add('currect');
      }
      // option1 .current.classList.add('currect');
    }
    else {
      if (ansData == 1) {
        option1.current.classList.add('wrong')
      }
      if (ansData == 2) {
        option2.current.classList.add('wrong')
      }
      if (ansData == 3) {
        option3.current.classList.add('wrong')
      }
      if (ansData == 4) {
        option4.current.classList.add('wrong')
      }
    }
  }

  return (
    <div className="containers">
      <div className="main-container">
        <h1>Quizz App</h1>
        <hr />
        {questions ?
          <>
            <h2>{count + 1}.{questions.question}</h2>
            <p ref={option1} onClick={() => handleOnCheck(1)}>{questions.option1}</p>
            <p ref={option2} onClick={() => handleOnCheck(2)}>{questions.option2}</p>
            <p ref={option3} onClick={() => handleOnCheck(3)}>{questions.option3}</p>
            <p ref={option4} onClick={() => handleOnCheck(4)}>{questions.option4}</p>

            <button onClick={handleOnChange}>Next</button>

            <span>{count+1} of {data.length}</span>
          </>

          :
          <>
            <hr />
            <div className="score-section">
              <h1>Your Score</h1>
              <h3 >{score}</h3>
              {score >= 3 ? <h1 id='passed'>Passed</h1> :
                <>
                  <h1 id='fail'>Fail</h1>
                  <button onClick={handleOnAgain}>Try again</button>
                </>
              }
            </div>
          </>}
      </div>
    </div>
  )
}

export default App
