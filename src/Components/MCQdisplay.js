import React from 'react';
import './styles/Mcqdisplay.css'

function MCQdisplay(props) {
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
      <button 
        id={props.questionId} 
        onClick={(event) => props.removeQuest(event.target.id)} 
        className='removeButton' 
        type='button'>
        Remove
      </button>
    </div>
  );
}

export default MCQdisplay;
