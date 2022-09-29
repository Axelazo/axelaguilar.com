import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function EducationItem(props) {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        p={2}
        w={'full'}
        mt={2}
        backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
        py={3}
        px={4}
        rounded={'lg'}
      >
        <Image
          w={{ base: '3rem' }}
          h={{ base: '3rem' }}
          src={`/img/education/${props.education.url}.png`}
          rounded={'lg'}
          border={'1px'}
          borderColor={'grey'}
        ></Image>
        <Box pl={2}>
          <Heading fontSize={'xl'}>{props.education.grade}</Heading>
          <Text fontWeight={'100'} color={'#a1a1a1'}>
            {props.education.school} • {props.education.period.start}
            {' - '}
            {props.education.period.end}
          </Text>
        </Box>
      </Stack>
    </>
  );
}
