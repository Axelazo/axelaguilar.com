import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Flex, Box, useColorModeValue, HStack } from '@chakra-ui/react';
import { FaHome, FaInfoCircle, FaFileAlt, FaBookOpen } from 'react-icons/fa';

import Profile from './Profile';

const Links = [
  { text: 'Home', path: '/', icon: FaHome },
  { text: 'About', path: 'about', icon: FaInfoCircle },
  { text: 'Resume', path: 'resume', icon: FaFileAlt },
  { text: 'Portfolio', path: 'portfolio', icon: FaBookOpen },
];

export default function SidebarMenu() {
  const value = useColorModeValue('#000', '#fff');
  const sidebarBackgroundColorValue = useColorModeValue('#fcfcfd', '#000');

  return (
    <Box
      minH={{ base: '0', md: '100vh' }}
      overflow={'hidden'}
      bgColor={sidebarBackgroundColorValue}
      px={5}
    >
      <Box pt={24}>
        <Profile></Profile>
        <Box display={{ base: 'none', md: 'block' }}>
          <nav>
            {Links.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.path}
                  style={({ isActive }) => ({
                    display: 'block',
                    paddingInline: '1.5rem',
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem',
                    color: isActive ? value : 'grey',
                  })}
                  end
                >
                  <Flex>
                    <Icon as={link.icon} boxSize={6} mr={5}></Icon>
                    {link.text}
                  </Flex>
                </NavLink>
              );
            })}
          </nav>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <nav>
            <HStack maxW={'100vw'}>
              {Links.map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    to={link.path}
                    style={({ isActive }) => ({
                      display: 'block',
                      margin: '0 auto',
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem',
                      color: isActive ? value : 'grey',
                    })}
                    end
                  >
                    <Flex>
                      <Icon
                        as={link.icon}
                        boxSize={6}
                        mr={{ base: '1', md: '5' }}
                      ></Icon>
                      {link.text}
                    </Flex>
                  </NavLink>
                );
              })}
            </HStack>
          </nav>
        </Box>
      </Box>
    </Box>
  );
}
