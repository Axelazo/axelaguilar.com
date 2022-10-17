import React from 'react';
import '@fontsource/inter';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Stack, Flex, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import theme from './theme';

import Resume from './pages/Resume';
import Home from './pages/Home';
import About from './pages/About';
import SidebarMenu from './components/SidebarMenu';
import Portfolio from './pages/Portfolio';
import Project from './components/Project';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher zIndex={2} />
      <Flex
        w={'full'}
        minH={'100vh'}
        maxH={'100vh'}
        position={'absolute'}
        overflow={{ base: 'auto', md: 'hidden' }}
      >
        <Container maxW={{ md: '8xl' }} padding={0}>
          <Stack
            alignItems={'start'}
            direction={{
              base: ['column'],
              sm: ['column'],
              md: ['column', 'row'],
            }}
            maxH={'100vh'}
          >
            <Box
              minW={{ base: '100%', sm: '100%', md: '30%' }}
              minH={{ base: 'auto', md: 'auto' }}
              maxH={'100vh'}
            >
              <SidebarMenu></SidebarMenu>
            </Box>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/portfolio/:id" element={<Project />} />
            </Routes>
          </Stack>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
