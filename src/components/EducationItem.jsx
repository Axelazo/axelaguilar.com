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
        w={'full'}
        mt={5}
        backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
        py={5}
        px={5}
        rounded={'lg'}
      >
        <Image
          w={{ base: '3rem' }}
          h={{ base: '3rem' }}
          rounded={'lg'}
          border={'1px'}
          borderColor={'grey'}
          src={`http://localhost:1337${props.education.attributes.Logo?.data.attributes.url}`}
        ></Image>
        <Box pl={2}>
          <Heading fontSize={'xl'}>{props.education.attributes.Grade}</Heading>
          <Text fontWeight={'100'} color={'#a1a1a1'}>
            {props.education.attributes.School} •{' '}
            {props.education.attributes.Start}
            {' - '}
            {props.education.attributes.End}
          </Text>
        </Box>
      </Stack>
    </>
  );
}
