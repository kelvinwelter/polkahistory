import React from 'react';
import { Stack, Input, Button } from '@chakra-ui/react';
import DatePicker from '../Datepicker';

export default function SearchWrapper({ setAddress, address, invalidAddress, dateTime, setDateTime, isLoading, handleSearch }) {
  return (
    <Stack spacing={4} direction={'column'}>
              <Input 
                placeholder='Polkadot address' 
                onChange={(event) => setAddress(event.target.value)} 
                value={address}
                isInvalid={invalidAddress}
              />
              <DatePicker
                showTimeInput
                selectedDate={dateTime}
                onChange={(d) => setDateTime(d)}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <Button
                isLoading={isLoading}
                loadingText="Buscando balanço..." 
                disabled={isLoading} 
                colorScheme="pink"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Stack>
  )
}
