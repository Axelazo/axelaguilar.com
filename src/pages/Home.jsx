import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <Flex minW={'full'} minH={'100vh'} m={0}>
      <Box alignSelf={'center'} p={8}>
        <Heading fontSize={'6xl'}>My name is Axel Aguilar</Heading>
        <Heading fontSize={'2xl'} pt={'2rem'}>
          I'm a 3D Artist / Programmer aspiring to become a Technical Artist!
        </Heading>
      </Box>
    </Flex>
  );
}
