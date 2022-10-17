import { React } from 'react';
import { useColorModeValue, Box, Stack, Skeleton } from '@chakra-ui/react';

export default function PortfolioProjectSkeleton() {
  return (
    <Box
      mb={6}
      backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
      p={5}
      m={5}
      rounded={'lg'}
      w={'full'}
      h={'100%'}
    >
      <Stack w={'full'}>
        <Skeleton w={'75%'} h={'3rem'} mb={'1rem'}></Skeleton>
        <Skeleton w={'full'} h={'27rem'} my={'5rem'}></Skeleton>
        <Skeleton w={'full'} h={'27rem'} mb={'1rem'}></Skeleton>
        <Skeleton w={'full'} h={'27rem'} my={'5rem'}></Skeleton>
        <Skeleton w={'full'} h={'27rem'} mb={'1rem'}></Skeleton>
      </Stack>
    </Box>
  );
}
