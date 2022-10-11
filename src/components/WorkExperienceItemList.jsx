import React from 'react';

import WorkExperienceItem from '../components/WorkExperienceItem';

export default function WorkExperienceItemList(props) {
  return props.workExperiences.map((workExperience, index) => {
    return (
      <WorkExperienceItem
        key={index}
        workExperience={workExperience.attributes}
      ></WorkExperienceItem>
    );
  });
}
