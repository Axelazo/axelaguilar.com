import { Flex, Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex minW={'full'} minH={'100vh'} m={0}>
      <Box alignSelf={'center'} p={8}>
        <Heading fontSize={'6xl'} maxW={{ base: '100%', md: '50%' }}>
          My name is Axel Aguilar
        </Heading>
        <Text maxW={{ base: '100%', md: '50%' }}>
          I'm a Programmer / 3D Artist aspiring to become a Technical Artist!
        </Text>
      </Box>
    </Flex>
  );
}
