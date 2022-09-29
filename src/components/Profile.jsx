import {
  Avatar,
  Flex,
  Box,
  Stack,
  Text,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Social from './Social';
import './Profile.css';

const socials = [
  { icon: FaLinkedin, url: 'https://www.facebook.com/TimeWarpAnimation' },
  { icon: FaArtstation, url: 'https://www.artstation.com/axelazo' },
  { icon: FaGithub, url: 'https://github.com/Axelazo/' },
];

const titles = ['3D Artist', 'Software Engineer', 'Web Developer'];

export default function Profile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index + 1) % titles.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box border={'1px'} borderRadius={'lg'} mb={12}>
      <Flex justify={'center'} mt={-20}>
        <Avatar
          size={'2xl'}
          src="https://i.imgur.com/Hdxcicw.jpg"
          alt={'Author'}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>
      <Box>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'4xl'} fontWeight={500} fontFamily={'body'}>
            Axel Aguilar
          </Heading>
          <Box
            w={'full'}
            minH={2}
            pt={4}
            pb={6}
            m={'0 auto'}
            position={'relative'}
            textAlign={'center'}
          >
            {titles.map((title, i) => {
              return (
                <Text
                  key={i}
                  color={'gray.500'}
                  ml={-10}
                  className={i !== index ? 'hide' : 'show'}
                  margin={'0 auto'}
                  lineHeight={0}
                >
                  {title}
                </Text>
              );
            })}
          </Box>

          <HStack pt={2}>
            {socials.map(social => {
              return <Social key={social.icon} buttonData={social}></Social>;
            })}
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
