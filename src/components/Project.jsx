import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Flex,
  Text,
  Heading,
  Box,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import PortfolioProjectData from './PortfolioProjectData';

export default function Project() {
  const params = useParams();

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
      .get(`${apiURL}/portfolios/${params.id}?&populate=*`, config)
      .then(response => {
        setData(response.data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      {isLoading ? (
        ''
      ) : (
        <PortfolioProjectData data={data}></PortfolioProjectData>
      )}
    </Flex>
  );
}
