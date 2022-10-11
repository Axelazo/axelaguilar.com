import React from 'react';
import {
  Stack,
  HStack,
  Skeleton,
  useColorModeValue,
  Box,
  GridItem,
} from '@chakra-ui/react';

export default function PortfolioItemSkeleton() {
  return (
    <GridItem>
      <Box
        w={'full'}
        backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
        rounded={'md'}
        overflow={'hidden'}
        p={5}
        pb={10}
      >
        <Skeleton minW={'full'} h={'18rem'} layout={'fit'} m={-5}></Skeleton>
        <Skeleton minW={'full'} h={'2rem'} mt={10} p={2}></Skeleton>
        <Skeleton minW={'full'} h={'1rem'} mt={5} p={2}></Skeleton>
        <Skeleton minW={'full'} h={'1rem'} mt={5} p={2}></Skeleton>
      </Box>
    </GridItem>
  );
}
