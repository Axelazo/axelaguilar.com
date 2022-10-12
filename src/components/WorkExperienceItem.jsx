import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

import ReactMarkdown from 'react-markdown';
import { baseURL } from '../api/axelaguilar';

export default function WorkExperienceItem(props) {
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
          src={`${baseURL}${props.workExperience.logo?.data.attributes.url}`}
          w={{ base: '3rem' }}
          h={{ base: '3rem' }}
          rounded={'lg'}
          border={'1px'}
          borderColor={'grey'}
        ></Image>
        <Box pl={2} w={'full'}>
          <HStack>
            <Box w={'full'}>
              <Heading fontSize={'xl'}>{props.workExperience.role}</Heading>
            </Box>
            <Box>
              <Text whiteSpace={'nowrap'}>
                {'from '}
                {props.workExperience.start}
                {' to '}
                {props.workExperience.end}
              </Text>
            </Box>
          </HStack>

          <Text fontWeight={'light'} color={'#a1a1a1'}>
            {`${props.workExperience.company}, ${props.workExperience.location}`}
          </Text>
        </Box>
      </Stack>
      <Box p={2} fontSize={'md'} px={10}>
        <ReactMarkdown>{props.workExperience.description}</ReactMarkdown>
      </Box>
    </Box>
  );
}
