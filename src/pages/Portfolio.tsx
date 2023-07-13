import { Flex, Grid } from '@chakra-ui/react';
import PortfolioItem from '../components/PortfolioItem';
import { PortfolioItemProps } from '../interfaces/PortfolioItemProps';

//Portfolio
import axelaguilar from '../assets/img/portfolio/axelaguilar.jpeg';
import peliculazas from '../assets/img/portfolio/peliculazas.png';
import quotify from '../assets/img/portfolio/quotify.png';
import timewarpAnimation from '../assets/img/portfolio/timewarp-animation.png';

const Projects: PortfolioItemProps[] = [
  {
    imageUrl: peliculazas,
    title: 'Peliculazas!',
    description: 'Movie watching website!',
    icons: ['wordpress'],
  },
  {
    imageUrl: quotify,
    title: 'Quotify!',
    description: 'Bookmark quotes!',
    icons: ['android', 'react', 'ionic'],
  },
  {
    imageUrl: timewarpAnimation,
    title: 'TimeWarp Animation',
    description: 'TWA Website',
    icons: ['react', 'strapi'],
  },
  {
    imageUrl: axelaguilar,
    title: 'Axel Aguilar',
    description: 'Personal Website',
    icons: ['react'],
  },
];

export default function Portfolio() {
  return (
    <Flex
      w={'full'}
      overflow={{ sm: 'visible', md: 'auto' }}
      maxH={{ base: '100vh', md: '100vh' }}
    >
      <Grid
        p={{ base: 2, md: 8 }}
        templateColumns={{
          base: 'repeat(2, 2fr)',
          md: 'repeat(2, 2fr)',
          sm: 'repeat(2, 2fr)',
          lg: 'repeat(3, 2fr)',
        }}
        gap={6}
        w={{ base: 'full' }}
        className={'test'}
      >
        {Projects.map((project, index) => {
          return <PortfolioItem portfolio={project} key={index} />;
        })}
      </Grid>
    </Flex>
  );
}
