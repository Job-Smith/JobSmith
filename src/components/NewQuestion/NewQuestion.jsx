import React from 'react';

// import from child components...
// import Question from './../Question/Question.jsx'

import SkillOption from './../SkillOption/SkillOption.jsx';
// Import css
import css from './NewQuestion.css';

const NewQuestion = props => {

  // to save call props.saveQuestion({question, skill_id, compa})
  // must have an object as it's only argument in the format of 
  // { question: <questionString>, skill_id: <skill_id>, company: <company name>}


  // props.displayOther -  defaults to 'none' 
  // props.setDisplayOther() will change the setting of displayOther. So set it to 'block' or back to 'none'

  /**
   * send questions by invoking props.saveQuestion(question object)
   */
  function sendQuestion() {
    const question = document.getElementById('questionInput').value;
    const e = document.getElementById('skillList');
    const skill_id = e.options[e.selectedIndex].getAttribute('values');
    const company = document.getElementById('company').value;
    console.log(question, skill_id, company);
    if (question === "" || skill_id === "" || company === "") {
      alert('Please enter all the required fields');
    }
    // console.log(props.saveQuestion);
    props.saveQuestion({question, skill_id, company});
  }
  
  function createElement() {
    let element = document.createElement('label');
    console.log(element);
  }
  function addSkill() {

    const selectionOption = document.getElementById('skillList').value;
    if (selectionOption === 'Other') {
      createElement();
    } else {
      console.log('no element');
    }
  }

  /**
   * creating options tags for skills
   */
  let options = [];
  props.skills.forEach((objElement, index) => {
      options.push(<SkillOption key={index} skill_id = {objElement.id} skill = {objElement.skill}/>);
  });
  options.push(<option key={options.length} values = {options.length+1}>Other</option>)

  /**
   * Event Listener selecting option 'other'
   */

  return (
    <div className='questionWrapper'>
      <div className='forumWrapper'>
        <div className='labelWrapper'>
          <label>
            <strong><u>Question</u></strong><br/>
            <textarea id='questionInput' type='text'></textarea>
          </label>
          <label>Skills</label>
          <select id = "skillList" onChange={() => addSkill()}>
            {options}
          </select>
          <label>
            Company
            <input id='company' type='text'></input>
          </label>
        </div>
        <button value='Submit' onClick={() => sendQuestion()}>Submit</button>
      </div>
    </div>
  );
};

export default NewQuestion;