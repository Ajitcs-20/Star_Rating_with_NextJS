import StarRating from "./components/StarRating";
import ThumbsUp from "./components/ThumbsUp";
import { Box, Text, Heading, ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="gray.100"
      >
        <Box
          backgroundColor="white"
          height="530px"
          width="300px"
          borderRadius="10px"
          p="20px"
          boxShadow="md"
        >
          <Heading color="black" fontSize="x-large" textAlign="center">
            Leave a Review
          </Heading>
          <Text color="black" ml="10px">
            <b>Safety</b>
          </Text>
          <Text color="grey" ml="10px" fontSize="small">
            please rate your experience
          </Text>
          <Box ml="10px">
            <StarRating />
          </Box>
          <Text color="black" ml="10px">
            <b>Communication</b>
          </Text>
          <Text color="grey" ml="10px" fontSize="small">
            please rate your experience
          </Text>
          <Box ml="10px">
            <StarRating />
          </Box>
          <Text color="black" ml="10px" fontStyle="">
            <b>Would you recommend Trausti?</b>
          </Text>
          <Text color="grey" ml="10px" fontSize="small">
            please rate your experience
          </Text>
          <Box display="flex" justifyContent="center" ml="10px">
            <ThumbsUp />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
