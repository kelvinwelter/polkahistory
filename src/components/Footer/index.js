import { Box, Container, Text, Stack } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
          bg={'gray.50'}
          color={'gray.700'}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text fontSize="x-small">Made in 🇧🇷 by Kelvin Welter</Text>
            <Text fontSize="x-small">Buy me a coffee: 12ENWcCZ6PsMPMULpYNhoevt2cVQypcR7sBEujzQJovJVdg8</Text>
          </Container>
        </Box>
      );
}