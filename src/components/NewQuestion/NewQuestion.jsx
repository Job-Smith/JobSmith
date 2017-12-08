import React from 'react';
import SkillOption from './../SkillOption/SkillOption.jsx';

// Import css
import css from './NewQuestion.css';

const NewQuestion = props => {

  let otherDisplay = props.displayOther;
  if (props.skills.length == 0) {
    otherDisplay = 'block';
  }
    
  /**
   * send questions by invoking props.saveQuestion(question object)
   */
  function sendQuestion() {
    const question = document.getElementById('questionInput').value;
    const e = document.getElementById('skill_list');
    const skill_id = e.options[e.selectedIndex].getAttribute('values');
    const skillType =  document.getElementById('skillType').value;
    const company = document.getElementById('company').value;
    if (question === "" || skill_id === "" || company === "") {
      alert('Please enter all the required fields');
    }
    props.saveQuestion({question, skill_id, company, skillType}, props.skills);
  }
  
  function addSkill() {
    const selectionOption = document.getElementById('skill_list').value;
    if (selectionOption === 'Other') {
      props.setDisplayOther('block');
    } else {
      props.setDisplayOther('none');
    }
  }
  /**
   * creating options tags for skills
   */
  let options = [];
  props.skills.forEach((objElement, index) => {
      options.push(<SkillOption key={index} skill_id = {objElement.id} skill = {objElement.skill}/>);
  });
  options.push(<option key={options.length} values = {options.length+1}>Other</option>);

  /**
   * Event Listener selecting option 'other'
   */
  return (
    <div className='questionWrapper'>
      <div className='forumWrapper'>
        <div>
          <div className='labelQuestionWrapper'>
            <label>
              <strong><u>Question</u></strong><br/>
              <textarea id='questionInput' type='text'></textarea>
            </label>
          </div>
          <div className='skill_and_company_container'>
            <div className="skill_container">
              <div className='label_skill_container'>
                <label>Skills</label>
                <select id = "skill_list" onChange={() => addSkill()}>
                  {options}
                </select>
              </div>
              <label style={{'display' : props.displayOther}}>
                <input id='skillType' type='text'></input>
              </label>
            </div>
            <div className="companyContainer">
              <label>
                Company
                <input id='company' type='text'></input>
              </label>
            </div>
          </div>
        </div>
        <div id='newButtonQuestion'>
          <button value='Submit' onClick={() => sendQuestion()}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default NewQuestion;
