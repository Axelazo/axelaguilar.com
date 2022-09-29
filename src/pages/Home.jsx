import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <Flex w={'full'} minH={'100vh'} m={0}>
      <Box alignSelf={'center'} p={8}>
        <Heading fontSize={'6xl'} mt={-12}>
          Hi, Axel Aguilar here!
        </Heading>
        <Text textAlign={'justify'} mt={6} fontSize={'lg'}>
          My name is Axel Aguilar, I'm a self- taught 3D Artist / Programmer
          currently studying the last year of Systems Engineering.
        </Text>
      </Box>
    </Flex>
  );
}
