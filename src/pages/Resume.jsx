import { React, useEffect, useState } from 'react';
import { Flex, Box, Stack, Heading } from '@chakra-ui/react';
import WorkExperienceItemSkeleton from '../components/WorkExperienceItemSkeleton';
import WorkExperienceItemList from '../components/WorkExperienceItemList';
import EducationItemSkeleton from '../components/EducationItemSkeleton';
import EducationItemList from '../components/EducationItemList';
import axelaguilar from '../api/axelaguilar';

export default function Resume() {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [internshipExperiences, setInternshipExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 2);

  useEffect(() => {
    const works = axelaguilar
      .get(`/work-experiences?sort=id:desc&populate=*`)
      .then(response => {
        setWorkExperiences(response.data.data);
      });

    const internships = axelaguilar
      .get(`/internship-experiences?sort=id:desc&populate=*`)
      .then(response => {
        setInternshipExperiences(response.data.data);
      });

    const education = axelaguilar
      .get(`/educations?sort=id:desc&populate=*`)
      .then(response => {
        setEducations(response.data.data);
      });

    Promise.all([works, internships, education]).then(values => {
      setTimeout(function () {
        setIsLoading(false);
      }, rndInt * 1000);
    });
  }, [rndInt]);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      <Stack w={'full'}>
        <Box p={8}>
          <Heading fontSize={'4xl'} textAlign="left" mb={5}>
            Work Experience
          </Heading>
          {isLoading ? (
            <>
              <WorkExperienceItemSkeleton></WorkExperienceItemSkeleton>
              <WorkExperienceItemSkeleton></WorkExperienceItemSkeleton>
              <WorkExperienceItemSkeleton></WorkExperienceItemSkeleton>
            </>
          ) : (
            <WorkExperienceItemList
              workExperiences={workExperiences}
            ></WorkExperienceItemList>
          )}
        </Box>
        <Box p={8} pt={0}>
          <Heading fontSize={'4xl'} textAlign="left" mb={5}>
            Internships
          </Heading>
          {isLoading ? (
            <>
              <WorkExperienceItemSkeleton></WorkExperienceItemSkeleton>
            </>
          ) : (
            <WorkExperienceItemList
              workExperiences={internshipExperiences}
            ></WorkExperienceItemList>
          )}
        </Box>
        <Box p={8} pt={0}>
          <Box w={'90%'}>
            <Heading fontSize={'4xl'} textAlign="left">
              Education
            </Heading>
          </Box>

          {isLoading ? (
            <>
              <EducationItemSkeleton></EducationItemSkeleton>
              <EducationItemSkeleton></EducationItemSkeleton>
              <EducationItemSkeleton></EducationItemSkeleton>
            </>
          ) : (
            <EducationItemList educations={educations}></EducationItemList>
          )}
        </Box>
      </Stack>
    </Flex>
  );
}
