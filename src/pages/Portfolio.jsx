import { React, useEffect, useState } from 'react';
import { Flex, Grid } from '@chakra-ui/react';

import PortfolioItemList from '../components/PortfolioItemList';
import PortfolioItemSkeleton from '../components/PortfolioItemSkeleton';
import axelaguilar from '../api/axelaguilar';

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axelaguilar.get(`/portfolios?sort=id:desc&populate=*`).then(response => {
      setData(response.data.data);
      setTimeout(function () {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      <Grid
        maxH={'100vh'}
        overflow={{ base: 'visible', sm: 'visible', md: 'auto' }}
        p={{ base: 2, md: 8 }}
        templateColumns={{ base: 'repeat(2, 2fr)', md: 'repeat(3, 2fr)' }}
        gap={6}
        w={{ base: 'full' }}
        className={'test'}
        overflowX={'hidden'}
      >
        {isLoading ? (
          <>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
            <PortfolioItemSkeleton></PortfolioItemSkeleton>
          </>
        ) : (
          <PortfolioItemList portfolios={data}></PortfolioItemList>
        )}
      </Grid>
    </Flex>
  );
}
