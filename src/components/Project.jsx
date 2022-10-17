import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import PortfolioProjectData from './PortfolioProjectData';
import axelaguilar from '../api/axelaguilar';
import PortfolioProjectSkeleton from './PortfolioProjectSkeleton';

export default function Project() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axelaguilar.get(`/portfolios/${params.id}?&populate=*`).then(response => {
      setData(response.data.data);
      setTimeout(function () {
        setIsLoading(false);
      }, 200);
    });
  }, []);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      {isLoading ? (
        <PortfolioProjectSkeleton></PortfolioProjectSkeleton>
      ) : (
        <PortfolioProjectData data={data}></PortfolioProjectData>
      )}
    </Flex>
  );
}
