import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image,
  HStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import es from '../assets/img/es.png';
import en from '../assets/img/en.png';

type Language = {
  imageUrl: string;
  languageName: string;
  fluency: string;
};

const Skills = [
  "Exceptional problem solving skills (I won't stop until I have found a solution for a problem)",
  'Unmatched research skills   (I have followed the darkest, deepest forum threads in websites forgotten by God, a single user comment in a rejected PR on Github, a 7 year old comment in a YouTube video, I will research as long as it helps me to create a solution for the problem at hand)',
  'Strong logical and critical thinking',
  'I have an excellent level of written and spoken English',
  'Excellent grammar and writing skills',
  'Ability to grasp the most fundamental concepts about almost any subject in no time.',
];

const Hobbies = [
  'Programming',
  'Digital Painting',
  '3D Modeling',
  'Investigation',
  'Learning',
  'Working Out',
  'Watch movies & TV shows',
];

const Languages: Language[] = [
  {
    imageUrl: es,
    languageName: 'Spanish',
    fluency: 'Native',
  },
  {
    imageUrl: en,
    languageName: 'English',
    fluency: 'Proficient',
  },
];

export default function About() {
  const bgColor = useColorModeValue('#fcfcfd', '#211E2B');

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      <Stack minH={'100VH'} p={8} w={'full'}>
        <Box alignSelf={'start'} w={'full'}>
          <Heading fontSize={'6xl'}>About me!</Heading>
          <Box
            backgroundColor={bgColor}
            py={3}
            px={4}
            rounded={'lg'}
            w={'full'}
            mt={6}
            p={8}
          >
            <Text textAlign={'justify'}>
              My name is Axel Aguilar, I'm a Programmer / and a self taught 3D
              Artist currently studying the last year of Systems Engineering, I
              have experience in the 3D modeling workflow for animation and
              videogames, I also have experience in Software Development for
              both web and desktop environments, I love visual and special
              effects, cinephile (860+ movies watched) and a gamer since I was 6
              years old. My goal is to become a Technical Artist
            </Text>
          </Box>
        </Box>
        <Stack alignContent={'flex-start'}>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box alignSelf={'start'} w={'full'}>
              <Box pt={6}>
                <Heading>Personal Information</Heading>
              </Box>
              <Box
                backgroundColor={bgColor}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <Stack w={{ base: 'full', xl: '45%' }}>
                  <HStack justifyContent={'space-between'}>
                    <Text fontWeight={'bold'}>Full name</Text>
                    <Text>Axel Isai Aguilar Hernandez</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'}>
                    <Text fontWeight={'bold'}>Birth day</Text>
                    <Text>March 7th 1999 (03/07/1999)</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'}>
                    <Text fontWeight={'bold'}>Nationality</Text>
                    <Text>Guatemalan</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'}>
                    <Text fontWeight={'bold'}>Country of Residence</Text>
                    <Text>Guatemala</Text>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} w={'full'}>
              <Box>
                <Heading>Skills</Heading>
              </Box>
              <Box
                backgroundColor={bgColor}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <Text as={Box}>
                  <UnorderedList>
                    {Skills.map((skill, index) => {
                      return <ListItem key={index}>{skill}</ListItem>;
                    })}
                  </UnorderedList>
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} w={'full'}>
              <Box>
                <Heading>Hobbies</Heading>
              </Box>
              <Box
                backgroundColor={bgColor}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <Text as={Box}>
                  <UnorderedList>
                    {Hobbies.map((hobbie, index) => {
                      return <ListItem key={index}>{hobbie}</ListItem>;
                    })}
                  </UnorderedList>
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} pb={8} w={'full'}>
              <Box>
                <Heading>Languages</Heading>
              </Box>
              <Box
                backgroundColor={bgColor}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                {Languages.map((language, index) => {
                  return (
                    <HStack key={index}>
                      <Image w={16} src={language.imageUrl} />
                      <Text
                        ml={4}
                      >{`${language.languageName} - (${language.fluency})`}</Text>
                    </HStack>
                  );
                })}
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}
