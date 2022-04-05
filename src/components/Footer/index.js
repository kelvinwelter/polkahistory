import { Box, Container, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

export default function Footer({ onPolkadotPage }) {
    return (
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text fontSize="x-small">
              <FormattedMessage id="footer.madeBy" defaultMessage="Made in 🇧🇷 by Kelvin Welter" />
            </Text>
            <Text fontSize="x-small">
              {onPolkadotPage ? 
                <FormattedMessage id="footer.buyMeCoffee" defaultMessage="Buy me a coffee: 12ENWcCZ6PsMPMULpYNhoevt2cVQypcR7sBEujzQJovJVdg8" />
                :
                <FormattedMessage id="footer.buyMeCoffeeKusama" defaultMessage="Buy me a coffee (with Kusama): DbGed9Qr9Ht9oEftpFb1gpo4B2SMC7Tcx2jhBVwgtMdM77v" />
              }
            </Text>
          </Container>
        </Box>
      );
}