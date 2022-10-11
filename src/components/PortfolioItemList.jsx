import React from 'react';
import { GridItem } from '@chakra-ui/react';

import PortfolioItem from '../components/PortfolioItem';

export default function PortfolioItemList(props) {
  return props.portfolios.map((project, index) => {
    return (
      <GridItem
        key={index}
        minW={{ base: 'full', md: 'full' }}
        alignSelf={'center'}
        className={''}
      >
        <PortfolioItem portfolioData={project} id={project.id}></PortfolioItem>
      </GridItem>
    );
  });
}
