"use client"
import React, { useState } from 'react';
import { IconButton, Flex } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

 const ThumbsUp = () => {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);

  const handleThumbsUp = () => {
    setThumbsUp(!thumbsUp);
    if (thumbsDown) setThumbsDown(false);  
  };

  const handleThumbsDown = () => {
    setThumbsDown(!thumbsDown);
    if (thumbsUp) setThumbsUp(false); 
  };

  return (
    <Flex align="center" justify="center" mt={4}>
      <IconButton
        icon={<CheckIcon />}
        aria-label="Thumbs Up"
        onClick={handleThumbsUp}
        colorScheme={thumbsUp ? 'green' : 'gray'}
        mr={4}
      />
      <IconButton
        icon={<CloseIcon />}
        aria-label="Thumbs Down"
        onClick={handleThumbsDown}
        colorScheme={thumbsDown ? 'red' : 'gray'}
      />
    </Flex>
  );
};

export default ThumbsUp;

