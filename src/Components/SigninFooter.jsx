import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SigninFooter = ({ setSignUp }) => {
    const handleSignUp = () => {
        setSignUp(true);
    }
    return (
        <Flex m="auto" mt={-3} gap="8px" w="247px" h="24px">
            <Text w="180px" h="24px" fontFamily="Open Sans" fontWeight={600} fontSize="16px" lineHeight="24px" color="#544D4F">Don't have an account?</Text>
            <Text _hover={{ cursor: "pointer" }} w="59px" onClick={handleSignUp} color="#3470E4" h="24px" fontFamily="Open Sans" fontWeight={600} fontSize="16px" lineHeight="24px">
                Sign Up
            </Text>
        </Flex>
    )
}

export default SigninFooter;