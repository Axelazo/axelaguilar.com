import { React, useEffect, useState } from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import axios from 'axios';

import PortfolioItemList from '../components/PortfolioItemList';
import PortfolioItemSkeleton from '../components/PortfolioItemSkeleton';

export default function Portfolio() {
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
    axios
      .get(`${apiURL}/portfolios?sort=id:desc&populate=*`, config)
      .then(response => {
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
