import React from 'react';
import { Box, useColorModeValue, Image, Heading } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

export default function PortfolioProjectData(props) {
  return (
    <Box
      mb={6}
      backgroundColor={useColorModeValue('#fcfcfd', '#211E2B')}
      p={5}
      m={5}
      rounded={'lg'}
      w={'full'}
      h={'100%'}
    >
      <Box w={'full'}>
        <Heading>{props.data.attributes.title}</Heading>
      </Box>
      <Box w={'full'}>
        {props.data.attributes?.screenshots.data?.map((screenshot, index) => {
          return (
            <Image
              key={index}
              src={`http://localhost:1337${screenshot.attributes.url}`}
              minW={'full'}
              rounded={'lg'}
              mt={5}
            ></Image>
          );
        })}
      </Box>
      <Box>
        <ReactMarkdown>{props.data.attributes.information}</ReactMarkdown>
      </Box>
    </Box>
  );
}
