'use client'

import { Box, Flex, Button, IconButton, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import RoomInspirationCard from '@/components/common/RoomInspirationCard';

const rooms = [
  {
    roomNumber: '01',
    roomType: 'Bed Room',
    roomTitle: 'Inner Peace',
    imageUrl: '/rooms/room_1.svg',
  },
  {
    roomNumber: '02',
    roomType: 'Living Room',
    roomTitle: 'Bright and Airy',
    imageUrl: '/path-to-image-2.jpg',
  },
  {
    roomNumber: '03',
    roomType: 'Dining Room',
    roomTitle: 'Cozy Corner',
    imageUrl: '/path-to-image-3.jpg',
  },
];

const RoomInspirationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  return (
    <Box py={10} position="relative" bgColor="primary_lighter">
      <HStack justifyContent="space-around" width="90%" m="auto" >

        <Box textAlign="left" p="5">
          <Text fontSize="4xl" fontWeight="bold" color="gray.700">
            50+ Beautiful rooms inspiration
          </Text>
          <Text color="gray.500" fontSize="md" mt={2}>
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </Text>
          <Button mt={4} bgColor="primary" color="#fff" borderRadius="sm" size="md">
            <Text fontSize="sm">Explore More</Text>
          </Button>
        </Box>

        <Box  w="70%" >
          {/* Slider Section */}
          <Flex justify="center" align="center" position="relative">
            {/* Room Cards */}
            <Box w="70%">
              <RoomInspirationCard {...rooms[currentSlide]} />
            </Box>

            {/* Navigation Arrows */}
            <IconButton
              aria-label="Previous"
              icon={<span>&larr;</span>}
              onClick={handlePrev}
              position="absolute"
              left={0}
              top="50%"
              transform="translateY(-50%)"
              bg="white"
              borderRadius="full"
            />
            <IconButton
              aria-label="Next"
              icon={<span>&rarr;</span>}
              onClick={handleNext}
              position="absolute"
              right={0}
              top="50%"
              transform="translateY(-50%)"
              bg="white"
              borderRadius="full"
            />
          </Flex>

          {/* Pagination Dots */}
          <Flex justify="center" mt={4}>
            {rooms.map((_, index) => (
              <Box
                key={index}
                w={3}
                h={3}
                borderRadius="full"
                bg={index === currentSlide ? 'yellow.400' : 'gray.300'}
                mx={1}
              />
            ))}
          </Flex>

        </Box>

      </HStack>

    </Box>
  );
};

export default RoomInspirationSlider;
