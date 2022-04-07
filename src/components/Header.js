import { FiGithub } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Heading, IconButton, Spacer, Link, ButtonGroup } from '@chakra-ui/react';

import { ReactComponent as PolkadotIcon } from '../assets/polkadotLogo.svg';
import { ReactComponent as KusamaIcon } from '../assets/kusamaCanary.svg';

const Header = ({ onPolkadotPage }) => {
  return (
    <Flex as="nav" padding={4}>
      <Heading bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        Polkahistory
      </Heading>
      <Spacer />
      <ButtonGroup>
        {onPolkadotPage ? (
          <RouterLink to="/kusama">
            <IconButton icon={<KusamaIcon width={24} height={24} />} />
          </RouterLink>
        ) : (
          <RouterLink to="/polkadot">
            <IconButton icon={<PolkadotIcon width={16} height={16} />} />
          </RouterLink>
        )}
        <Link href="https://github.com/kelvinwelter/polkahistory" isExternal>
          <IconButton icon={<FiGithub />} />
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
