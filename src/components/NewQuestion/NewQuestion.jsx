import React from 'react';
import SkillOption from './../SkillOption/SkillOption.jsx';

// Import css
import css from './NewQuestion.css';

const NewQuestion = props => {
    
  /**
   * send questions by invoking props.saveQuestion(question object)
   */
  function sendQuestion() {
    const question = document.getElementById('questionInput').value;
    const e = document.getElementById('skillList');
    const skill_id = e.options[e.selectedIndex].getAttribute('values');
    const skillType =  document.getElementById('skillType').value;
console.log("NewQuestion.jsx skillType", skillType);
    const company = document.getElementById('company').value;
    if (question === "" || skill_id === "" || company === "") {
      alert('Please enter all the required fields');
    }
    props.saveQuestion({question, skill_id, company, skillType}, props.skills);
  }
  
  function addSkill() {
    const selectionOption = document.getElementById('skillList').value;
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
          <label style={{'display' : props.displayOther}}>
            Skill
            <input id='skillType' type='text'></input>
          </label>
          <button value='Submit' onClick={() => sendQuestion()}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default NewQuestion;
