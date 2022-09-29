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
          w={{ base: '3rem' }}
          h={{ base: '3rem' }}
          src={`/img/work/${props.workExperience.url}.png`}
          rounded={'lg'}
          border={'1px'}
          borderColor={'grey'}
        ></Image>
        <Box pl={2} w={'full'}>
          <Flex w={'full'} minW={'full'} align={'end'} position={'relative'}>
            <Heading fontSize={'xl'} w={'90%'}>
              {props.workExperience.role}
            </Heading>
            <Box
              position={{ base: 'static', md: 'absolute' }}
              right={0}
              alignSelf={'end'}
              whiteSpace={'nowrap'}
            >
              <Text>
                {props.workExperience.period.start}
                {' - '}
                {props.workExperience.period.end}
              </Text>
            </Box>
          </Flex>

          <Text fontWeight={'light'} color={'#a1a1a1'}>
            {`${props.workExperience.company}, ${props.workExperience.location}`}
          </Text>
        </Box>
      </Stack>
      <Box p={2} fontSize={'md'} px={10}>
        {props.workExperience.text}{' '}
      </Box>
    </Box>
  );
}
