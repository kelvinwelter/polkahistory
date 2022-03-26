import { FiGithub } from 'react-icons/fi';
import { 
    Flex,
    Heading,
    IconButton,
    Spacer,
    Link
} from '@chakra-ui/react';

const Header = (props) => {

    return (
        <Flex 
            as="nav"
            padding={4}
            {...props}
        >
            <Heading
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
            >
                Polkahistory
            </Heading>
            <Spacer />
            <Link href="https://github.com/kelvinwelter/polkahistory" isExternal>
                <IconButton icon={<FiGithub />} />
            </Link>
        </Flex>
    )
}

export default Header;