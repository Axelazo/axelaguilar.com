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

import { PortfolioItemProps } from '../interfaces/PortfolioItemProps';
import { Link } from 'react-router-dom';
import { Icons } from '../assets/misc/Icons';

export default function PortfolioItem({
  portfolio,
}: {
  portfolio: PortfolioItemProps;
}) {
  const { imageUrl, title, description, icons } = portfolio;

  return (
    <Link to={'#'}>
      <Box
        w={'full'}
        backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={imageUrl}
            fit={'fill'}
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
              {title}
            </Heading>
          </Box>
          <Box>
            <Text>{description}</Text>
          </Box>
          <Center pt={2}>
            {icons.map((icon, index) => {
              return (
                <Icon
                  key={index}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  as={Icons[icon as keyof typeof Icons]}
                  alt={'Ionic'}
                  mx={2}
                  boxSize={6}
                />
              );
            })}
          </Center>
        </Stack>
      </Box>
    </Link>
  );
}
