import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Skeleton, Stack } from '@chakra-ui/react';
import PortfolioProjectData from './PortfolioProjectData';
import axelaguilar from '../api/axelaguilar';

export default function Project() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axelaguilar.get(`/portfolios/${params.id}?&populate=*`).then(response => {
      setData(response.data.data);
      setTimeout(function () {
        setIsLoading(false);
      }, 20000);
    });
  }, []);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      {isLoading ? (
        <Stack w={'full'} p={5}>
          <Skeleton w={'full'} h={'30rem'}></Skeleton>
          <Skeleton w={'full'} h={'30rem'}></Skeleton>
          <Skeleton w={'full'} h={'30rem'}></Skeleton>
          <Skeleton w={'full'} h={'30rem'}></Skeleton>
        </Stack>
      ) : (
        <PortfolioProjectData data={data}></PortfolioProjectData>
      )}
    </Flex>
  );
}
