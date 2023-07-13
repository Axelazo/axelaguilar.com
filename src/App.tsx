import '@fontsource/inter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Stack, Flex, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './misc/ColorModeSwitcher';
import theme from './theme/Theme';

import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import SidebarMenu from './components/SidebarMenu';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
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
                base: 'column',
                sm: 'column',
                md: 'row',
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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/*               <Route path="/portfolio/:id" element={<Project />} />
                 */}
              </Routes>
            </Stack>
          </Container>
        </Flex>
      </ChakraProvider>
    </Router>
  );
}

export default App;
