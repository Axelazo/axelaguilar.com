import React from 'react';
import { Stack, HStack, Skeleton, useColorModeValue } from '@chakra-ui/react';

export default function EducationItemSkeleton() {
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
          <Skeleton h={'1rem'} w={'full'} />
          <HStack>
            <Skeleton h={'1rem'} w={'50%'} />
            <Skeleton h={'1rem'} w={'25%'} />
          </HStack>
        </Stack>
      </HStack>
    </Stack>
  );
}
