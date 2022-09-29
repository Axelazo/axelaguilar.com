import { React, useState } from 'react';
import {
  Flex,
  Box,
  Stack,
  Heading,
  Switch,
  HStack,
  FormLabel,
} from '@chakra-ui/react';
import WorkExperienceItem from '../components/WorkExperienceItem';
import EducationItem from '../components/EducationItem';

const workExperience = [
  {
    company: 'Fiverr / Discord channels / Facebook groups',
    location: 'Globally (remote)',
    url: 'freelancing',
    role: 'Freelancing',
    period: {
      start: '2017',
      end: 'now',
    },
    text: (
      <ul>
        <li>3D modeling for videogames / animation</li>
        <li>Characters, Environments, and Props sketching</li>
        <li>Poly modeling and sculpting</li>
        <li>Retopology and UV mapping</li>
        <li>Texturing</li>
        <li>Rigging</li>
        <li>Integration in game engines (Unity3D, Godot)</li>
        <li>Video/Photography editing & Motion Graphics</li>
        <li>Programming</li>
      </ul>
    ),
  },
  {
    company: 'Capgemini BSv',
    location: 'Guatemala City, Guatemala (remote)',
    url: 'capgemini',
    role: 'Automation Engineer',
    period: {
      start: 'June 2022',
      end: 'now',
    },
    text: (
      <ul>
        <li>
          Process automation using different tools like UIPath, Blue Prism,
          Python, Javascript.
        </li>
        <li>
          PDD solution analysis and development of automation infraestructure.
        </li>
      </ul>
    ),
  },
  {
    company: 'Dirección General de Caminos',
    location: 'San Benito, Petén, Guatemala',
    url: 'caminos',
    role: 'Inventory Manager',
    period: {
      start: 'October 2018',
      end: 'December 2021',
    },
    text: (
      <ul>
        <li>Internal inventory management</li>
        <li>Handling and updating responsability cards (cardex)</li>
        <li>Elaboration of monthly and yearly movement reports</li>
        <li>Auditing.</li>
      </ul>
    ),
  },
  {
    company: 'Calcos Yimi',
    location: 'Flores, Petén, Guatemala',
    url: 'calcos-yimi',
    role: 'Graphic Designer & Customer Service Agent',
    period: {
      start: 'mid 2017',
      end: 'October 2018',
    },
    text: (
      <ul>
        <li>Customer Service</li>
        <li>Cashflow (petty cash)</li>
        <li>
          Creation of advertising materials (including trefoils posters, flyers,
          cards, banners, stickers, mesh-esque stickers, vehicle banner
          printing)
        </li>
        <li>Supporting different areas (like printing and finishing area)</li>
      </ul>
    ),
  },
];

const internshipExperience = [
  {
    company: 'Tiny Bytes sPa',
    location: 'Santiago de Chile, Chile (remote)',
    url: 'tiny-bytes',
    role: '3D Artist',
    period: {
      start: 'late 2021',
      end: 'early 2022',
    },
    text: (
      <ul>
        <li>3D Modeling and Optimizations</li>
        <li>UV Unwrapping and Texturing</li>
        <li>Asset Integration in Unity3D</li>
        <li>VFX and Particles work in Unity3D</li>
      </ul>
    ),
  },
];

const education = [
  {
    school: 'Universidad Mariano Gálvez de Guatemala',
    url: 'university',
    grade: 'Systems Engineering',
    period: {
      start: 'january 2017',
      end: 'now',
    },
    relevant: true,
  },
  {
    school: 'Liceo Integral Nueva Generación',
    url: 'high-school-2',
    grade: 'High School Diploma in Science and Arts  (Diversified Level)',
    period: {
      start: '2015',
      end: '2016',
    },
    relevant: true,
  },
  {
    school: 'Liceo Integral Nueva Generación',
    url: 'high-school-2',
    grade: 'Secondary School Diploma in Science and Arts',
    period: {
      start: '2013',
      end: '2014',
    },
    relevant: false,
  },
  {
    school: 'Christian School "El Hashamayim"',
    url: 'high-school-1',
    grade: 'Secondary School Diploma in Science and Arts',
    period: {
      start: '2012',
      end: '2012',
    },
    relevant: false,
  },
  {
    school: 'Escuela Oficial Rural Mixta Barrio Tziquinajá',
    url: 'primary',
    grade: 'Primary School',
    period: {
      start: '2006',
      end: '2011',
    },
    relevant: false,
  },
];

export default function Resume() {
  const [showRelevantEducation, setShowRelevantEducation] = useState(false);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
      css={{
        '&::-webkit-scrollbar': {
          width: '10px',
          backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
          backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#A1A1A1',
        },
      }}
    >
      <Stack w={'full'}>
        <Box p={8}>
          <Heading fontSize={'4xl'} textAlign="left" mb={5}>
            Work Experience
          </Heading>
          {workExperience.map((workExperience, index) => {
            return (
              <WorkExperienceItem
                key={index}
                workExperience={workExperience}
              ></WorkExperienceItem>
            );
          })}
        </Box>
        <Box p={8} pt={0}>
          <Heading fontSize={'4xl'} textAlign="left" mb={5}>
            Internships
          </Heading>
          {internshipExperience.map((workExperience, index) => {
            return (
              <WorkExperienceItem
                key={index}
                workExperience={workExperience}
              ></WorkExperienceItem>
            );
          })}
        </Box>
        <Box p={8} pt={0}>
          <HStack
            alignContent={'center'}
            w={'full'}
            align={'center'}
            justifyContent={'center'}
            className={'fuck'}
            mb={5}
          >
            <Box w={'90%'}>
              <Heading fontSize={'4xl'} textAlign="left">
                Education
              </Heading>
            </Box>
            <Box>
              <HStack>
                <FormLabel htmlFor="email-alerts" mb="0">
                  Detailed?
                </FormLabel>
                <Switch
                  id="email-alerts"
                  size={'lg'}
                  onChange={e => {
                    setShowRelevantEducation(e.target.checked);
                  }}
                />
              </HStack>
            </Box>
          </HStack>
          {showRelevantEducation
            ? education.map((education, index) => {
                return (
                  <EducationItem
                    key={index}
                    education={education}
                  ></EducationItem>
                );
              })
            : education
                .filter((element, index) => {
                  return element.relevant ? element : '';
                })
                .map((education, index) => {
                  return (
                    <EducationItem
                      key={index}
                      education={education}
                    ></EducationItem>
                  );
                })}
        </Box>
      </Stack>
    </Flex>
  );
}
