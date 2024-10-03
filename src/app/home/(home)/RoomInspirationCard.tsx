import { Box, Text, Image, Button, Stack, Flex } from '@chakra-ui/react';

type RoomInspirationCardProps = {
  roomNumber: string;
  roomType: string;
  roomTitle: string;
  imageUrl: string;
};

const RoomInspirationCard = ({ roomNumber, roomType, roomTitle, imageUrl }: RoomInspirationCardProps) => {
  return (
    <Box position="relative" overflow="hidden" borderRadius="md">
      {/* Room Image */}
      <Image src={imageUrl} alt={roomTitle} w="100%" h="400px" objectFit="cover" />

      {/* Card Overlay */}
      <Box position="absolute" bottom={4} left={4} bg="white" p={4} borderRadius="md" boxShadow="md">
        <Stack spacing={2}>
          <Text fontSize="sm" color="gray.500">
            {roomNumber} — {roomType}
          </Text>
          <Text fontWeight="bold" fontSize="xl">
            {roomTitle}
          </Text>
          <Button
            variant="link"
            colorScheme="yellow"
            rightIcon={<span>&rarr;</span>}
            fontWeight="bold"
          >
            View
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RoomInspirationCard;
