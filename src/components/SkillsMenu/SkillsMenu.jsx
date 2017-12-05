import React from 'react';

// import from child components...
import SkillsMarker from './../SkillsMarker/SkillsMarker.jsx'

// Import css
import css from './SkillsMenu.css';

const SkillsMenu = props => {

console.log("SkillsMenu props", props);
console.log("props.markerClicked", props.markerClicked);

  const skillMarkers = [];

  for (let i = 0, ilen = props.skills.length; i < ilen; i += 1) {
    skillMarkers.push( <SkillsMarker key={i + '_skill'} skill={props.skills[i]} markerClicked={props.markerClicked}/>);
    console.log("props.skills[i]", props.skills[i]);
  }

  return (
    <div className='container'>
      {skillMarkers}
    </div>
  );
};

export default SkillsMenu;