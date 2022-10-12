import { React, useEffect, useState } from 'react';
import {
  Flex,
  Stack,
  HStack,
  Box,
  Heading,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import axelaguilar from '../api/axelaguilar';

export default function About() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axelaguilar.get(`/about`).then(response => {
      setData(response.data.data.attributes);
      setTimeout(function () {
        setIsLoading(false);
      }, 200);
    });
  }, []);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      <Stack minH={'100VH'} p={8} w={'full'}>
        <Box alignSelf={'start'} w={'full'}>
          <Heading fontSize={'6xl'}>About me!</Heading>
          <Box
            backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
            py={3}
            px={4}
            rounded={'lg'}
            w={'full'}
            mt={6}
            p={8}
          >
            {isLoading ? (
              <>
                {' '}
                <Skeleton h={'1rem'} w={'full'} />
                <Skeleton h={'1rem'} w={'full'} mt={2} />
                <Skeleton h={'1rem'} w={'full'} mt={2} />
                <Skeleton h={'1rem'} w={'full'} mt={2} />
                <Skeleton h={'1rem'} w={'full'} mt={2} />
                <Skeleton h={'1rem'} w={'full'} mt={2} />
              </>
            ) : (
              <ReactMarkdown>{data.about}</ReactMarkdown>
            )}
          </Box>
        </Box>
        <Stack alignContent={'flex-start'}>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box alignSelf={'start'} w={'full'}>
              <Box pt={6}>
                <Heading>Personal Information</Heading>
              </Box>
              <Box
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                {isLoading ? (
                  <>
                    <HStack>
                      {' '}
                      <Skeleton h={'1rem'} w={'10%'} />
                      <Skeleton h={'1rem'} w={'15%'} mt={2} />
                    </HStack>

                    <Skeleton h={'1rem'} w={'50%'} mt={2} />
                    <Skeleton h={'1rem'} w={'50%'} mt={2} />
                    <Skeleton h={'1rem'} w={'50%'} mt={2} />
                    <Skeleton h={'1rem'} w={'50%'} mt={2} />
                  </>
                ) : (
                  <ReactMarkdown>{data.personal}</ReactMarkdown>
                )}
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} w={'full'}>
              <Box>
                <Heading>Skills</Heading>
              </Box>
              <Box
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                {isLoading ? (
                  <>
                    {' '}
                    <Skeleton h={'1rem'} w={'full'} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                  </>
                ) : (
                  <ReactMarkdown>{data.skills}</ReactMarkdown>
                )}
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} w={'full'}>
              <Box>
                <Heading>Hobbies</Heading>
              </Box>
              <Box
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                {isLoading ? (
                  <>
                    {' '}
                    <Skeleton h={'1rem'} w={'full'} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                  </>
                ) : (
                  <ReactMarkdown>{data.hobbies}</ReactMarkdown>
                )}
              </Box>
            </Box>
          </Flex>
          <Flex w={'full'} alignSelf={'flex-start'}>
            <Box pt={6} pb={8} w={'full'}>
              <Box>
                <Heading>Languages</Heading>
              </Box>
              <Box
                backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
                py={3}
                px={4}
                rounded={'lg'}
                w={'full'}
                mt={6}
                p={8}
              >
                {isLoading ? (
                  <>
                    {' '}
                    <Skeleton h={'1rem'} w={'full'} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                    <Skeleton h={'1rem'} w={'full'} mt={2} />
                  </>
                ) : (
                  <ReactMarkdown>{data.languages}</ReactMarkdown>
                )}
              </Box>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}
