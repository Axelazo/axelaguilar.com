import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <Flex minW={'full'} minH={'100vh'} m={0}>
      <Box alignSelf={'center'} p={8}>
        <Heading fontSize={'6xl'} maxW={{ base: '100%', md: '50%' }}>
          My name is Axel Aguilar
        </Heading>
        <Text maxW={{ base: '100%', md: '50%' }}>
          I'm a 3D Artist / Programmer aspiring to become a Technical Artist!
        </Text>
      </Box>
    </Flex>
  );
}
