import React, {useRef, useState } from 'react';
import './App.css';
import data from './assets/data';

function App() {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState(data[count]);
  const [score, setScrore] = useState(0);
  const [selectOption , setSelectOption] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  let option_array = [option1,option2,option3,option4];
   

  const handleOnChange = () => {
    if(selectOption){
      setCount(prev => prev + 1);
    setQuestions(data[count + 1]);
    setSelectOption(false)
    }
    else{
      alert("Plaese select one option")
    }
    option_array.map((item)=>{
      item.current.classList.remove('currect');
      item.current.classList.remove('wrong');
    });
  }

  const handleOnAgain = () => {
    setCount(0)
    setQuestions(data[0])
  }

  const handleOnCheck = (e,ansData) => {
    console.log(e.target)
    setSelectOption(true);
    if (ansData == questions.ans) {
      setScrore(prev => prev + 1);
      e.target.classList.add('currect');
    }
    else {
      e.target.classList.add('wrong');
      console.log(option_array[questions.ans-1])
      option_array[questions.ans-1].current.classList.add('currect');
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
            <p ref={option1} onClick={(e) => handleOnCheck(e,1)}>{questions.option1}</p>
            <p ref={option2} onClick={(e) => handleOnCheck(e,2)}>{questions.option2}</p>
            <p ref={option3} onClick={(e) => handleOnCheck(e,3)}>{questions.option3}</p>
            <p ref={option4} onClick={(e) => handleOnCheck(e,4)}>{questions.option4}</p>

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
