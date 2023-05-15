import {
    Box,
    Text,
    Avatar,
    Show,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Spacer,
    Image,
} from "@chakra-ui/react";
import React from "react";
import CommonModal from "./CommonModal";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            boxShadow="lg"
            justifyContent={{ base: "space-between", sm: "space-between", lg: "end" }}
            align="center"
            px={[5, 10]}
            p="3"
            bgColor="#0E2D39"
            color="white"
        >
            <Box position="absolute" left="20px">
                <Image src="https://tummoc.com/images/logoHeader.png" />
            </Box>
            <Button colorScheme="blue" onClick={onOpen}>
                Login
            </Button>
            <CommonModal isOpen={isOpen} onClose={onClose} />

        </Flex>
    );
};

export default Navbar;