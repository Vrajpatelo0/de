import React from 'react';
import './styles/Mcqdisplay.css'

function FinalQuestions(props) {
  return (
    <div id='questionContainer'>
      <div>
        <span className='questionNumber question-font'>{props.questionIndex+1} <span>.</span></span>
        <small className='question question-font'>{props.mainQuestion}</small>
        <div>
          <small className='opd option-font'>A.</small><small className='options option-font'>{props.optionA}</small><br />
          <small className='opd option-font'>B.</small><small className='options option-font'>{props.optionB}</small><br />
          <small className='opd option-font'>C.</small><small className='options option-font'>{props.optionC}</small><br />
          <small className='opd option-font'>D.</small><small className='options option-font'>{props.optionD}</small>
        </div>
      </div>
    </div>
  );
}

export default FinalQuestions;