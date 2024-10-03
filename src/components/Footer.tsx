import { Box, Flex, HStack, Input, Text, VStack, FormControl, Button, Divider } from "@chakra-ui/react";
import BrandText from "./common/BrandText";

export default function Footer() {
    return (
        <Box borderTop="1px" borderColor="rgba(0, 0, 0, 0.17)" py={12} px={20}>
            <Flex gap={5} mb={10} justifyContent={"space-between"} flexWrap={{lg: 'nowrap', md: 'wrap', sm: 'wrap' }}>

                <VStack gap={10} w={['full', '35%']} alignItems={"flex-start"} textAlign={['center', 'start']}>
                    <BrandText />
                    <Text color="gray.500" fontSize="lg">
                        400 University Drive Suite 200 Coral <br /> 
                        Gables, <br />
                        FL 33134 USA
                    </Text>
                </VStack>
                <VStack gap={10} alignItems={"flex-start"} w={['full', '15%']} textAlign={['center', 'start']}>
                    <Text fontWeight="medium" size="sm" mb={4} color="gray.400">Links</Text>
                    <Text fontWeight="medium">Home</Text>
                    <Text fontWeight="medium">Shop</Text>
                    <Text fontWeight="medium">About</Text>
                    <Text fontWeight="medium">Contact</Text>
                </VStack>
                <VStack gap={10} alignItems={"flex-start"} w={['full', '15%']} textAlign={['center', 'start']}>
                    <Text fontWeight="medium" size="sm" mb={4} color="gray.400">Help</Text>
                    <Text fontWeight="medium">Payment options</Text>
                    <Text fontWeight="medium">Return</Text>
                    <Text fontWeight="medium">Privacy policies</Text>
                </VStack>
                <VStack gap={10} alignItems={"flex-start"} w={['full', '35%']} textAlign={['center', 'start']}>
                    <Text fontWeight="medium" size="sm" mb={4} color="gray.400">Newsletter</Text>
                    <FormControl>
                        <HStack>
                        <Input _focus={{borderWidth: 0}} paddingInlineStart={0} borderWidth="0 0 2px 0" borderRadius="none" borderColor="#000" placeholder="sese" />
                        <Button textTransform="uppercase" variant="subtle" borderWidth="0 0 2px 0" borderRadius="none" borderColor="#000">Subscribe</Button>
                        </HStack>
                    </FormControl>
                </VStack>
            </Flex>
            <Divider />
            <Text mt={7} fontWeight="medium">2023 furino. All rights reverved</Text>
        </Box>
    )
}