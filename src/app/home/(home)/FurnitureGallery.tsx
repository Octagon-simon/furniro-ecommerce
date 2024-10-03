import { Box, Grid, Image, Text } from "@chakra-ui/react";

const FurnitureGallery = () => {
  return (
    <Box py={12}  maxWidth="90%" mx="auto">
      {/* Heading */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={5}>
        Share your setup with{" "}
        <Text as="span" color="teal.500">
          #FuniroFurniture
        </Text>
      </Text>

      {/* Image Grid with random sizing and layout */}
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        autoRows="10px"
        gap={5}
      >
        {/* Example images with random rowSpan to create a masonry layout */}
        <Box gridRow="span 30">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 1"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box gridRow="span 20">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 2"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box gridRow="span 25">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 3"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box gridRow="span 35">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 4"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box gridRow="span 15">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 5"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box gridRow="span 20">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 6"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box gridRow="span 30">
          <Image
            src="https://via.placeholder.com/300"
            alt="Furniture 7"
            borderRadius="md"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default FurnitureGallery;
