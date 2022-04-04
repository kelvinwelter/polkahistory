import React from 'react';
import { Stack, Input, Button } from '@chakra-ui/react';
import DatePicker from '../Datepicker';
import { FormattedMessage, useIntl } from 'react-intl';

export default function SearchWrapper({ setAddress, address, invalidAddress, dateTime, setDateTime, isLoading, handleSearch, onPolkadotPage }) {
  const intl = useIntl();

  return (
    <Stack spacing={4} direction={'column'}>
              <Input 
                placeholder={intl.formatMessage(onPolkadotPage ? { id: "search.polkadotAddress", defaultMessage: "Polkadot address" } : { id: "search.KusamaAddress", defaultMessage: "Kusama address" })} 
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
                loadingText={intl.formatMessage({ id: "search.searchingBalance", defaultMessage: "Searching balance..." })}
                disabled={isLoading} 
                colorScheme="pink"
                onClick={handleSearch}
              >
                <FormattedMessage id="search.search" defaultMessage="Search" />
              </Button>
            </Stack>
  )
}
