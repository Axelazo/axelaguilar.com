import {
  Flex,
  Stack,
  HStack,
  VStack,
  Box,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function About() {
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
      <Stack minH={'100VH'} p={8}>
        <Box alignSelf={'start'}>
          <Heading fontSize={'6xl'}>About me!</Heading>
          <Text textAlign={'justify'} mt={6} fontSize={'lg'}>
            My name is Axel Aguilar, I'm a self- taught 3D Artist / Programmer
            currently studying the last year of Systems Engineering, I have
            professional experience in the 3D modeling workflow for animation
            and videogames, I also have experience as a student and trainee in
            Software Development for both web and desktop environments, I love
            visual and special effects, cinephile (800+ movies watched) and a
            gamer since I was 6 years old. My goal is to become a Technical
            Artist
          </Text>
        </Box>
        <Stack alignContent={'flex-start'}>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box alignSelf={'start'} w={'full'}>
              <Box pt={6}>
                <Heading>Personal Information</Heading>
              </Box>
              <Box
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <HStack py={2}>
                  <Text textAlign={'justify'} fontWeight={'bold'} minW={'8rem'}>
                    Full name:
                  </Text>
                  <Text textAlign={'justify'}>Axel Isaí Aguilar Hernández</Text>
                </HStack>
                <HStack py={2}>
                  <Text textAlign={'justify'} fontWeight={'bold'} minW={'8rem'}>
                    Email:
                  </Text>
                  <Text textAlign={'justify'}>herdezx@gmail.com</Text>
                </HStack>

                <HStack py={2}>
                  <Text textAlign={'justify'} fontWeight={'bold'} minW={'8rem'}>
                    Location:
                  </Text>
                  <Text textAlign={'justify'}>Flores, Petén, Guatemala</Text>
                </HStack>
                <HStack py={2}>
                  <Text textAlign={'justify'} fontWeight={'bold'} minW={'8rem'}>
                    Date of Birth:
                  </Text>
                  <Text textAlign={'justify'}>March 7th, 1999</Text>
                </HStack>
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} w={'full'}>
              <Box>
                <Heading>Skills</Heading>
              </Box>
              <Box
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <Text pt={2} textAlign={'justify'}>
                  <li>
                    Highly analytical, critical thinker, data analyzer, make
                    difficult decisions, pattern recognizer, and complex
                    problems solver
                  </li>
                  <li>
                    Well understanding of Object-oriented programming principles
                  </li>
                  <li>
                    Deep understanding of Blender and the Adobe Ecosystem (Ps,
                    Ai, Ae, Pt)
                  </li>
                  <li>
                    Understanding of form, shape, silhouette, and volume to easy
                    translate a Concept Art into a 3D model
                  </li>
                  <li>
                    Management of Operative Systems (such as Oracle Linux 8.2,
                    Oracle Solaris, Ubuntu Server 20.04)
                  </li>
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
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <Text pt={2} textAlign={'justify'} minW={'full'}>
                  <li>Avid movie and TV shows watcher</li>
                  <li>Playing Videogames</li>
                  <li>Working out</li>
                  <li>Creating video essays</li>
                  <li>Game Development</li>
                  <li>Troubleshooting computers</li>
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
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                <Text pt={2} textAlign={'justify'} minW={'full'}>
                  <li>Spanish (native)</li>
                  <li>English (fluent)</li>
                  <li>Portuguese (basic)</li>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}
