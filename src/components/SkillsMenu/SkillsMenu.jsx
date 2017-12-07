import React from 'react';

// import from child components...
import SkillsMarker from './../SkillsMarker/SkillsMarker.jsx'

// Import css
import css from './SkillsMenu.css';

const SkillsMenu = props => {

  const skillMarkers = [];

  for (let i = 0, ilen = props.skills.length; i < ilen; i += 1) {
    skillMarkers.push( <SkillsMarker key={i + '_skill'} skill={props.skills[i]} markerClicked={props.markerClicked}/>);
  }

  return (
    <div className='menuContainer'>
      <div className="newQuestion" onClick={props.showAddQuestion}>
        <p className = 'menutext'>Add Question</p>
      </div>
      <div className="skillsContainer">
        {skillMarkers}
      </div>
    </div>
  );
};

export default SkillsMenu;