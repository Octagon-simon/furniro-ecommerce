import { Box, Flex, IconButton, Link, HStack, Image, Spacer } from "@chakra-ui/react";
import { BiUser, BiSearch, BiHeart, BiCart } from "react-icons/bi";

const Navbar = () => {
  return (
    <Box as="nav" py="4" px="8" boxShadow="sm" bg="white" position="fixed" width="full" zIndex="1">
      <Flex alignItems="center" justifyContent="center">
        {/* Logo */}
        <Image src="/navbar_logo.jpg" alt="Logo" h="40px" />
        <Spacer />

        {/* Navigation Links */}
        <HStack spacing="8" ml="16">
          <Link _hover={{color : 'primary'}} href="#" fontWeight="medium">Home</Link>
          <Link _hover={{color : 'primary'}} href="#" fontWeight="medium">Shop</Link>
          <Link _hover={{color : 'primary'}} href="#" fontWeight="medium">About</Link>
          <Link _hover={{color : 'primary'}} href="#" fontWeight="medium">Contact</Link>
        </HStack>

        <Spacer />

        {/* Icons */}
        <HStack spacing="4">
          <IconButton _hover={{color : 'primary'}} variant="subtle" aria-label="User account" fontSize="25px" icon={<BiUser />} />
          <IconButton _hover={{color : 'primary'}} variant="subtle" aria-label="Search" fontSize="25px"  icon={<BiSearch />} />
          <IconButton _hover={{color : 'primary'}} variant="subtle" aria-label="Wishlist" fontSize="25px"  icon={<BiHeart />} />
          <IconButton _hover={{color : 'primary'}} variant="subtle" aria-label="Shopping cart" fontSize="25px" icon={<BiCart />} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
