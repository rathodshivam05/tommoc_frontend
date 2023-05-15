import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Center,
    Heading,
    Text,
    Image,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import SigninFooter from './SigninFooter';
import Signup from './SignUp';
import Signin from './Signin';
import SignupFooter from './SignupFooter';

const CommonModal = ({ isOpen, onClose }) => {
    const [signUp, setSignUp] = useState(false);
    return (
        <Modal isOpen={isOpen} onClose={onClose} w={[375, 450]} >
            <ModalOverlay />
            <ModalContent w={[375, 450]} borderTopRadius={"16px"} mt={100}>
                <ModalHeader bgColor="#0E2D39" color="white" h="130px" textAlign={"center"} borderTopRadius={"16px"}>
                    <Center>
                        <Image src="https://tummoc.com/images/logoHeader.png" />
                    </Center>

                </ModalHeader>
                <ModalBody>
                    {signUp ? <Signup signUp={signUp} onClose={onClose} /> : <Signin signUp={signUp} onClose={onClose} />}
                </ModalBody>
                <ModalFooter mt={4}>
                    {signUp ? <SignupFooter setSignUp={setSignUp} /> : <SigninFooter setSignUp={setSignUp} />}
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}

export default CommonModal;