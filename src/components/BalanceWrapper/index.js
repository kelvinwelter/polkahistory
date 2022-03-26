import React from 'react';
import { Stack, Button, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

export default function BalanceWrapper({ dateTime, balance, setMode }) {
  return (
    <Stack spacing={4} direction={'column'}>
        <Stat border="1px solid #E2E8F0" borderRadius={12} py={4} px={16}>
            <StatLabel>Account balance</StatLabel>
            <StatNumber>{balance.free}</StatNumber>
            <StatHelpText>On {dateTime.toLocaleString()}</StatHelpText>
        </Stat>
        <Button
            colorScheme="pink"
            onClick={() => setMode('search')}
        >
            New search
        </Button>
    </Stack>
  )
}
