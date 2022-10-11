import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Flex, Box, useColorModeValue } from '@chakra-ui/react';
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
      minH={'100vh'}
      overflow={'hidden'}
      bgColor={sidebarBackgroundColorValue}
      px={5}
    >
      <Box pt={24}>
        <Profile></Profile>
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
    </Box>
  );
}
