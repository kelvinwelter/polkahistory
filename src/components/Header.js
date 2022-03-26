import { FiGithub } from 'react-icons/fi';
import { 
    ButtonGroup,
    Flex,
    Heading,
    IconButton,
    Spacer,
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
            <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4">
                <IconButton icon={<FiGithub />} />
            </ButtonGroup>
        </Flex>
    )
}

export default Header;