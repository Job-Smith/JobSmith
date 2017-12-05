import React from 'react';

// Import css
import css from './SkillsMarker.css';

const SkillsMarker = props => {
    console.log("props", props);
    
  const { id, skill, color } = props.skill;
  
  function markerClick(e) {
    props.markerClicked(e.target.getAttribute("data-id")); 
  }

  return (
    <div className='marker' style={ {backgroundColor: color} } onClick={markerClick} data-id={id} >
      {skill}
    </div>
  );
};

export default SkillsMarker;