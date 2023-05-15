import { Flex, Text } from '@chakra-ui/react'
import React from 'react'


const SignupFooter = ({ setSignUp }) => {

    const handleSignIn = () => {
        setSignUp(false)
    }
    return (
        <>
            <Flex m="auto" mt={-3} gap="8px" w="258px" h="24px">
                <Text w="198px" h="24px" fontFamily="Open Sans" fontWeight={600} fontSize="16px" lineHeight="24px" color="#544D4F">Already have an account?</Text>
                <Text w="52px" _hover={{ cursor: "pointer" }} h="24px" onClick={handleSignIn} fontFamily="Open Sans" fontWeight={600} fontSize="16px" lineHeight="24px" color="#3470E4">
                    Sign In
                </Text>
            </Flex>
        </>
    )
}

export default SignupFooter;