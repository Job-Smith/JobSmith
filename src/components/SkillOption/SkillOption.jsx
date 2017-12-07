import React from 'react';

const SkillOption = props => {

  return (
    <option values = {props.skill_id} >{props.skill}</option>
  );
};

export default SkillOption;