import React from 'react';
import { Icon } from '@chakra-ui/react';

export default function Social(props) {
  return (
    <a href={props.buttonData?.url} target={'_blank'} rel={'noreferrer'}>
      <Icon
        boxSize={10}
        p={2}
        as={props.buttonData?.icon}
        borderRadius={'100%'}
      ></Icon>
    </a>
  );
}
