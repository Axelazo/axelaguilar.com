import React from 'react';

import EducationItem from '../components/EducationItem';

export default function EducationItemList(props) {
  return props.educations.map((education, index) => {
    return <EducationItem key={index} education={education}></EducationItem>;
  });
}
