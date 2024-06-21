// components/StarRating.js
"use client"
import { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <Box backgroundColor={'white'}>
    <div >
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="button"
            key={index}
            border={'0px'}
            onClick={() => handleClick(ratingValue)}
            color={ratingValue <= rating ? 'white.500' : 'yellow.300'}
          >
            <StarIcon w={35} h={28}  color={ratingValue <= rating ? 'gold' : 'grey'} bgColor={'white'} />
          </Box>
        );
      })}
      <p color={'black'}>Selected rating: {rating}</p>
    </div>
    </Box>
  );
};

export default StarRating;
