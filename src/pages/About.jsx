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
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function About() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = 'http://localhost:1337';
  const apiURL = `${baseURL}/api`;
  const token =
    'd9cffaaf45384cfe8e6d7a49cf4649ab824adba0c885448ae71a9d8d7d2fa32f0a8945d5c98e24f2bf86e6939a7c9fef293ed6547276aa2d9db7a76eb2a3ccac8d7b73375fcd207c4eff42a58afbbc6ef07c0291636a64e10cb4130e0fbdd880369d28a6c3435951a70a4d14350c415ba76a04577ef2450baefa38ef6e7079d6';

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios.get(`${apiURL}/about`, config).then(response => {
      setData(response.data.data.attributes);
      setTimeout(function () {
        setIsLoading(false);
      }, 500);
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
