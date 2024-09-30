"use client";

import { ProductLabels } from '@/constants';
import { Box, Text, Image, Badge, Button, Stack, Circle } from '@chakra-ui/react';
import { useState } from 'react';

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
  imageUrl: string;
  label?: ProductLabels;
  discountPercentage?: string;
};

const ProductCard = ({
  name,
  description,
  price,
  discountPrice,
  imageUrl,
  label,
  discountPercentage,
}: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      position="relative"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s ease-in-out' }}
    >
      {/* Image with overlay on hover */}
      <Box position="relative">
        <Image src={imageUrl} alt={name} w="100%" h="250px" objectFit="cover" />
        {hovered && (
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.6)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transition="all 0.3s ease-in-out"
          >
            <Button borderRadius="sm" variant="outline" bgColor="#fff" color="primary" mb={4}>
              <Text fontSize="sm">Add to Cart</Text>
            </Button>
          </Box>
        )}

        {/* Label for New or Discount */}
        {label && (
          // <Badge
          //   position="absolute"
          //   top={2}
          //   right={2}
          //   bg={label === 'New' ? 'green.500' : 'red.500'}
          //   color="white"
          //   px={2}
          //   py={1}
          //   borderRadius="9999999rem"
          // >
          //   {label === 'New' ? 'New' : `${discountPercentage}% Off`}
          // </Badge>
          <Circle
            bg={label === 'New' ? 'green' : 'red'}
            position="absolute"
            top={2}
            right={2}
            color="white"
            p={3}
            // borderRadius="999999999em"
          >
            <Text fontSize="xs">{label === 'New' ? 'New' : `${discountPercentage}%`}</Text>

          </Circle>
        )}
      </Box>

      {/* Product Info */}
      <Box p={4} textAlign="left">
        <Stack spacing={2}>
          <Text fontWeight="500" fontSize="lg">
            {name}
          </Text>
          <Text fontSize="md" color="gray.600">
            {description}
          </Text>

          <Stack direction="row" alignItems="center">
            <Text fontSize="lg" fontWeight="bold" color={discountPrice ? 'red.500' : 'black'}>
              {price}
            </Text>
            {/* Discounted price */}
            {discountPrice && (
              <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                {discountPrice}
              </Text>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
