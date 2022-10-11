import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import ReactMarkdown from 'react-markdown';

export default function WorkExperienceItem(props) {
  console.log();

  return (
    <Box
      mb={6}
      backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
      py={3}
      px={4}
      rounded={'lg'}
    >
      <Stack direction={['column', 'row']} p={2} w={'full'} mt={2}>
        <Image
          src={`http://localhost:1337${props.workExperience.Logo?.data.attributes.url}`}
          w={{ base: '3rem' }}
          h={{ base: '3rem' }}
          rounded={'lg'}
          border={'1px'}
          borderColor={'grey'}
        ></Image>
        <Box pl={2} w={'full'}>
          <Flex w={'full'} minW={'full'} align={'end'} position={'relative'}>
            <Heading fontSize={'xl'} w={'90%'}>
              {props.workExperience.Role}
            </Heading>
            <Box
              position={{ base: 'static', md: 'absolute' }}
              right={0}
              alignSelf={'end'}
              whiteSpace={'nowrap'}
            >
              <Text>
                {'from '}
                {props.workExperience.Start}
                {' to '}
                {props.workExperience.End === ''
                  ? 'date'
                  : props.workExperience.End}
              </Text>
            </Box>
          </Flex>

          <Text fontWeight={'light'} color={'#a1a1a1'}>
            {`${props.workExperience.Company}, ${props.workExperience.Location}`}
          </Text>
        </Box>
      </Stack>
      <Box p={2} fontSize={'md'} px={10}>
        <ReactMarkdown>{props.workExperience.Description}</ReactMarkdown>
      </Box>
    </Box>
  );
}
