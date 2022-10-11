import React from 'react';
import { Stack, HStack, Skeleton, useColorModeValue } from '@chakra-ui/react';

export default function WorkExperienceItemSkeleton() {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(3, 6);

  const array = Array.from(Array(rndInt).keys());
  return (
    <Stack
      mb={6}
      backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
      py={3}
      px={4}
      rounded={'lg'}
    >
      <HStack>
        <Skeleton minH={'3rem'} minW={'3rem'} m={2} />
        <Stack w={'full'}>
          <Skeleton h={'1rem'} w={'75%'} />
          <HStack>
            <Skeleton h={'1rem'} w={'25%'} />
            <Skeleton h={'1rem'} w={'25%'} />
          </HStack>
        </Stack>
        <Skeleton h={'1rem'} w={'15%'} right={0} alignSelf={'start'} />
      </HStack>
      {array.map((element, index) => {
        return <Skeleton key={index} h={'1rem'} w={'75%'} />;
      })}
    </Stack>
  );
}
