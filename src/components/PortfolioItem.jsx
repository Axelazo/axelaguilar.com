import {
  Box,
  Center,
  Heading,
  Stack,
  useColorModeValue,
  Image,
  Icon,
  Badge,
  HStack,
  Text,
} from '@chakra-ui/react';

export default function PortfolioItem(props) {
  return (
    <Center>
      <Box
        w={'full'}
        backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={`/img/education/${props.portfolioData?.url}.png`}
            layout={'fit'}
            minW={'100%'}
          />
        </Box>
        <Stack minH={'4rem'}>
          <Box>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              whiteSpace={'nowrap'}
            >
              {props.portfolioData.title}
            </Heading>
          </Box>
          <Box>
            <Text>{props.portfolioData.description}</Text>
          </Box>
          <Center pt={2}>
            {props.portfolioData.techs?.map((tech, index) => {
              return (
                <Icon
                  key={index}
                  as={tech}
                  alt={'Ionic'}
                  mx={2}
                  boxSize={6}
                ></Icon>
              );
            })}
          </Center>
        </Stack>
      </Box>
    </Center>
  );
}
