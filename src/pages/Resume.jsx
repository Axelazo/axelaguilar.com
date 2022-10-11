import { React, useEffect, useState } from 'react';
import { Flex, Box, Stack, Heading, HStack } from '@chakra-ui/react';
import axios from 'axios';
import WorkExperienceItemSkeleton from '../components/WorkExperienceItemSkeleton';
import WorkExperienceItemList from '../components/WorkExperienceItemList';
import EducationItemSkeleton from '../components/EducationItemSkeleton';
import EducationItemList from '../components/EducationItemList';

export default function Resume() {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [internshipExperiences, setInternshipExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const baseURL = 'http://localhost:1337';
  const apiURL = `${baseURL}/api`;
  const token =
    'd9cffaaf45384cfe8e6d7a49cf4649ab824adba0c885448ae71a9d8d7d2fa32f0a8945d5c98e24f2bf86e6939a7c9fef293ed6547276aa2d9db7a76eb2a3ccac8d7b73375fcd207c4eff42a58afbbc6ef07c0291636a64e10cb4130e0fbdd880369d28a6c3435951a70a4d14350c415ba76a04577ef2450baefa38ef6e7079d6';

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 2);

  useEffect(() => {
    const works = axios
      .get(`${apiURL}/work-experiences?sort=id:desc&populate=*`, config)
      .then(response => {
        setWorkExperiences(response.data.data);
      });

    const internships = axios
      .get(`${apiURL}/internship-experiences?sort=id:desc&populate=*`, config)
      .then(response => {
        setInternshipExperiences(response.data.data);
      });

    const education = axios
      .get(`${apiURL}/educations?sort=id:asc&populate=*`, config)
      .then(response => {
        setEducations(response.data.data);
      });

    Promise.all([works, internships, education]).then(values => {
      setTimeout(function () {
        setIsLoading(false);
      }, rndInt * 1000);
    });
  }, []);

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
