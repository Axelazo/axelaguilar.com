import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

import { IoLogoIonic } from 'react-icons/io';
import { DiAndroid, DiSqllite, DiReact } from 'react-icons/di';

import PortfolioItem from '../components/PortfolioItem';

const projects = [
  {
    title: 'Quotify!',
    description: 'Android app to save quotes!',
    url: 'university',
    techs: [DiReact, IoLogoIonic, DiAndroid, DiSqllite],
  },
  {
    title: 'Time Warp Animation!',
    description: 'Android app to save quotes!',
    url: 'university',
  },
];

export default function Portfolio() {
  return (
    <Flex w={'full'}>
      <Grid
        minH={'100vh'}
        maxH={'100vh'}
        overflow={{ base: 'visible', sm: 'visible', md: 'auto' }}
        p={8}
        templateColumns={{ base: 'repeat(1, 2fr)', md: 'repeat(2, 2fr)' }}
        gap={6}
        w={{ base: 'full' }}
      >
        {projects.map((project, index) => {
          return (
            <GridItem
              key={index}
              w={{ base: 'full', md: 'full' }}
              alignSelf={'center'}
              p={0}
            >
              <PortfolioItem portfolioData={project}></PortfolioItem>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}
