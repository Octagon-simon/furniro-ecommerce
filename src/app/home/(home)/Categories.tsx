import React from 'react';

import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';

const Categories = () => {
  return (
    <Box maxWidth="80%" m="auto" textAlign="center" py={12}>
      {/* Section Title */}
      <Heading as="h2" size="lg" mb={2} fontWeight="900">
        Browse The Range
      </Heading>
      <Text color="gray.500" fontSize="lg" mb={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      {/* Grid for Categories */}
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {/* Dining */}
        <Box textAlign="center">
          <Image
            src="/categories/dining.svg"
            alt="Dining Room"
            borderRadius="md"
            mb={4}
            objectFit="cover"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Dining
          </Text>
        </Box>

        {/* Living */}
        <Box textAlign="center">
          <Image
            src="/categories/living_room.svg"
            alt="Living Room"
            borderRadius="md"
            mb={4}
            objectFit="cover"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Living
          </Text>
        </Box>

        {/* Bedroom */}
        <Box textAlign="center">
          <Image
            src="/categories/bedroom.svg"
            alt="Bedroom"
            borderRadius="md"
            mb={4}
            objectFit="cover"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Bedroom
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Categories;
