import React from 'react'
import FinalQuestions from './FInalQuestions'

const Questions = (props) => {
    
    const [questions, setQuestions] = React.useState(props.userQuestions)
    const [numQuestion, setNumQuesion] = React.useState(questions.length)
    const [numberOfquestions, setNumberOfQuestions] = React.useState(questions.length)
    const [randomQuestion, setRandomQuestion] = React.useState([])
    const [show, setShow] = React.useState(false)

    function chooseRandomQuestions(arrLength, numberOfQuestion){
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var arr = [];
        while(arr.length < numberOfQuestion){
            var r = random(0, arrLength)
            if(arr.indexOf(r) === -1) arr.push(r);
        }

        return arr
    }

    const generateQuestions = () => {
        const questionIndex = chooseRandomQuestions(questions.length, numberOfquestions)
        
        let finalQuestions = []
        for(let i=0;i < questionIndex.length;i++){
            finalQuestions.push(questions[questionIndex[i]])
        }

        return finalQuestions
    }

    const handleShowClick = () => {
        setShow(preValue => !preValue)
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        if(value > questions.length){
            alert('Please total number of questions you need')
        }

        setNumQuesion(value)
    }

    const handleSubmit = (event) => {
        setNumberOfQuestions(numQuestion)
        setShow(true)
        setRandomQuestion(generateQuestions())
        
        event.preventDefault()
    }

    return <div className='question-ui'>
        <form onSubmit={handleSubmit}>
            <input type="number" onChange={handleChange} value={numQuestion}></input>
            <button style={{backgroundColor: 'rgba(61, 111, 190, 0.849)', border: '1px solid black'}} className='content btn' type="submit">Generate</button>
        </form>
        <small style={{margin: '5px 0'}} className='content bold-font'>Enter number of question you need in your question paper.</small>
        {/* <button 
            className='content btn' 
            style={{
                margin: '10px 0', 
                backgroundColor: 'rgba(61, 111, 190, 0.849)', 
                color: 'white', 
                border: '1px solid black'
            }} 
            onClick={handleShowClick} 
            type='button'>{show ? 'Hide' : 'Show'} questions
        </button> */}
        {show ? <div style={{marginTop: '25px', marginLeft: '0'}} className='rightdiv'>
        <h1 className='questionHeader heading'>Your final questions</h1>
        {
          randomQuestion.map((ques, i) => 
              <FinalQuestions
                key={ques.id}
                questionIndex={i}
                questionId={ques.id}
                mainQuestion={ques.Question}
                optionA={ques.optionA}
                optionB={ques.optionB}
                optionC={ques.optionC}
                optionD={ques.optionD}
              />
          )
        }
        <div className='paper-buttons'>
            <button type='button' className='save-button bold-font content'>Save Questions</button>
            <button type='button' className='save-button bold-font content'>Download Paper</button>
        </div>
        </div> : ''}
    </div>
}

export default Questions