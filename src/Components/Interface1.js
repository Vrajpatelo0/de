import React, { useState } from 'react';
import './styles/Interface1.css';
import MCQdisplay from './MCQdisplay';
import { nanoid } from 'nanoid'
import {Link} from 'react-router-dom'

// function chooseRandomQuestions(arrLength, numberOfQuestions){
//   const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

//   var arr = [];
//   while(arr.length < numberOfQuestions){
//       var r = random(0, arrLength)
//       if(arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr
// }

function Interface1(props) {
  const [paper, setPaper] = useState([]);
  const [question, setQuestion] = useState({
    Question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: ''
  })
  const [done, setDone] = useState(false)
  const [numberOfQuestion, setNumberOfQuestions] = useState(paper.length)

  const removeQuestion = (questionId) => {
    setPaper(prePapers => {
      return prePapers.filter(paper => {
        return paper.id !== questionId
      })
    })
  }

  const handleChange = (event) => {
    const {name, value} = event.target

    setQuestion(preState => {
      return {
        ...preState,
        [name]: value
      }
    })
  }

  const handleDoneClick = () => {
    if(window.confirm('Are you sure you want to submit questions?')){
      setDone(true)
    } else {
      setDone(false)
    }

    if(done){
      const numberOfQuestion = prompt('Enter number of questions you want to include(None for all)', paper.length)
      setNumberOfQuestions(numberOfQuestion)
    }
  }

  const handleSubmit = (event) => {
    setPaper(preQuestions => [...preQuestions, {
        ...question,
        id: nanoid()
      }]
    )

    event.preventDefault()

    setQuestion({
      Question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: ''
    })
  }

  return (
    <div id='interface1'>
       <div className='leftdiv'>
        <form onSubmit={handleSubmit} id="myform">
          <h3 className='heading'>Add Question here</h3>
          <div className='labels'>
            <small className='inputLable content'>Question</small>
            <input name="Question" type="text" id='question' value={question.Question} data-index="1" className='inputs' onChange={handleChange} required /><br />
          </div>
          <div className='labels'>
            <small className='inputLable content'>Option A</small>
            <input name="optionA" type="text" id='optionA' className='inputs content' data-index="2" value={question.optionA} onChange={handleChange} required />
          </div>
          <div className='labels'>
            <small className='inputLable content'>Option B</small>
            <input name="optionB" type="text" id='optionB' className='inputs content' data-index="3" value={question.optionB} onChange={handleChange} required />
          </div>
          <div className='labels'>
            <small className='inputLable content'>Option C</small>
            <input name="optionC" type="text" id='optionC' className='inputs content' data-index="4" value={question.optionC} onChange={handleChange} required />
          </div>
          <div className='labels'>
            <small className='inputLable content'>Option D</small>
            <input name="optionD" type="text" id='optionD' className='inputs content' data-index="5" value={question.optionD} onChange={handleChange} required />
          </div>
          <div className='question-buttons'>
            <button type='submit' className="Addbtn content bold-font">Add Question</button>
            <button type='button' className='done-button Addbtn content bold-font'>
              <Link style={{textDecoration: 'none', color: 'white'}} onClick={(event) => {
                props.userQuestions(paper)
              }} to={`/question_output`}>submit</Link>
            </button>
          </div>
        </form>
        <br></br>
        <small className='content' style={{fontWeight: 'bold'}}>Note: Once you submit it you cannot change questions.</small>
      </div>
      {paper.length >= 1 ? <div className='rightdiv'>
        <h1 className='questionHeader heading'>Your questions</h1>
        {
          paper.map((ques, i) => 
              <MCQdisplay
                key={ques.id}
                questionIndex={i}
                questionId={ques.id}
                mainQuestion={ques.Question}
                optionA={ques.optionA}
                optionB={ques.optionB}
                optionC={ques.optionC}
                optionD={ques.optionD}
                removeQuest={removeQuestion}
              />
          )
        }
      </div> : ""}
    </div>
  )
}

export default Interface1;
