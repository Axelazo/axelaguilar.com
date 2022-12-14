import {
  Box,
  Center,
  Heading,
  Stack,
  useColorModeValue,
  Image,
  Icon,
  Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { baseURL } from '../api/axelaguilar';
import { iconData } from '../misc/IconData';

export default function PortfolioItem(props) {
  return (
    <Link relative to={`${props.id}`}>
      <Box
        w={'full'}
        backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={`${baseURL}${props.portfolioData.attributes.logo?.data.attributes.url}`}
            layout={'fit'}
            minW={'100%'}
            fallbackSrc={'/img/spinner.gif'}
          />
        </Box>
        <Stack minH={'4rem'}>
          <Box>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {props.portfolioData.attributes.title}
            </Heading>
          </Box>
          <Box>
            <Text>{props.portfolioData.attributes.description}</Text>
          </Box>
          <Center pt={2}>
            {props.portfolioData.attributes.tech?.data.map((tech, index) => {
              return (
                <Icon
                  key={index}
                  as={iconData[tech]}
                  alt={'Ionic'}
                  mx={2}
                  boxSize={6}
                ></Icon>
              );
            })}
          </Center>
        </Stack>
      </Box>
    </Link>
  );
}
