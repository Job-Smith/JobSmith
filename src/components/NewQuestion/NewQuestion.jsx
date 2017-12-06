import React from 'react';

// import from child components...
// import Question from './../Question/Question.jsx'

// Import css
import css from './NewQuestion.css';

const NewQuestion = props => {

  //props.skills has the array of skills
  // will add function to props for saving thru the morning..
  // Still working on reducers.

  // to save call props.saveQuestion()
  // must have an object as it's only argument in the format of 
  // { question: <questionString>, skill_id: <skill_id>, company: <company name>} 
    
  return (
    <div className='questionWrapper'>
      <form className='forumWrapper'>
        <div className='labelWrapper'>
          <label>
            <strong><u>Question</u></strong><br/>
            <input className='questionInput' type='text'></input>
          </label>
          <label>Skills</label>
          <select id = "skillList">
            <option value = "1">Javascript</option>
            <option value = "2">Node</option>
            <option value = "3">EXPRESS</option>
            <option value = "4">REACT</option>
            <option value = "5">Angular</option>
            <option value = "6">Mongo</option>
            <option value = "7">LOVE</option>
          </select>
          <label>
            Company
            <input type='text'></input>
          </label>
        </div>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );
};

export default NewQuestion;