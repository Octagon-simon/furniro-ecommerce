import React from 'react';
import { SimpleGrid, Box, Button, Heading, Text } from '@chakra-ui/react';
import ProductCard from '@/components/common/ProductCard';
import { ProductLabels } from '@/constants';

const products = [
  {
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    discountPrice: 'Rp 3.500.000',
    imageUrl: '/products/image_1.svg',
    label: ProductLabels.NEW,
    discountPercentage: '30',
  },
  {
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    imageUrl: '/products/image_2.svg',
    label: ProductLabels.DISCOUNT,
    discountPercentage: '50',
  },
  {
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    discountPrice: 'Rp 14.000.000',
    imageUrl: '/products/image_3.svg',
    label: ProductLabels.DISCOUNT,
    discountPercentage: '50',
  },
  {
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    imageUrl: '/products/image_4.svg',
    label: ProductLabels.NEW,
  },
  {
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    discountPrice: 'Rp 3.500.000',
    imageUrl: '/products/image_1.svg',
    label: ProductLabels.NEW,
    discountPercentage: '30',
  },
  {
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    imageUrl: '/products/image_2.svg',
    label: ProductLabels.DISCOUNT,
    discountPercentage: '50',
  },
  {
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    discountPrice: 'Rp 14.000.000',
    imageUrl: '/products/image_3.svg',
    label: ProductLabels.DISCOUNT,
    discountPercentage: '50',
  },
  {
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    imageUrl: '/products/image_4.svg',
    label: ProductLabels.NEW,
  },
  
  // Add more products here...
];

const ProductList = () => {
  return (
    <Box py={12} maxWidth="90%" m="auto" textAlign="center">
      <Heading as="h2" size="lg" fontWeight="bold" mb={6}>
        Our Products
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </SimpleGrid>

      <Button mt={8} borderRadius="sm" size="lg" color="primary" borderColor="primary" _hover={{color: '#fff', bgColor: 'primary'}} variant="outline">
        <Text fontSize="sm">Show More</Text>
      </Button>
    </Box>
  );
};

export default ProductList;
