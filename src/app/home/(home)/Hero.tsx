import React from 'react';
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box as="section" px="8" py="12" position="relative" bg="gray.50" minHeight="60vh">

      {/* Image */}
      <Box
        as="img"
        src="/home_hero.svg"
        alt="Chair and Plant"
        objectFit="cover"
        maxH="full"
        position="absolute"
        right="0"
        bottom="0"
        width="100%"
        // zIndex="-1"
      />
            {/* Hero Content */}
            <Box
        maxW="md"
        p="8"
        bg="primary_light"
        position="absolute"
        top="50%"
        left="50%"
        transform="translateY(-50%)"
        borderRadius="md"
        boxShadow="lg"
        // zIndex="1"
      >
        <Text fontSize="sm" fontWeight="bold">
          New Arrival
        </Text>
        <Heading as="h1" fontSize="4xl" fontWeight="900" color="primary" mt="2">
          Discover Our New Collection
        </Heading>
        <Text mt="4" fontSize="sm" fontWeight="500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </Text>
        <Button mt="6" bg="primary" color="white" size="lg" borderRadius="sm">
          <Text fontSize="sm">BUY NOW</Text>
        </Button>
      </Box>

    </Box>
  );
};

export default Hero;
