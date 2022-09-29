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
} from '@chakra-ui/react';

export default function PortfolioItem(props) {
  return (
    <Center>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        maxH={'500px'}
        minH={'500px'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={`/img/education/${props.portfolioData?.url}.png`}
            layout={'fit'}
            minW={'100%'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {props.portfolioData.title}
          </Heading>
          <Box>
            <HStack>
              <Box>
                <Badge>Technologies used:</Badge>
              </Box>
              <Box>
                {' '}
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
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}
