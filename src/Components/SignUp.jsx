import { Button, Flex, FormLabel, Input, Text, useToast, } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../common.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../utils/baseUrl";

const Signup = ({ onClose, signUp }) => {
    const [email, setEmail] = useState();
    const toast = useToast();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signUpWithPassword = () => {
        const userData = {
            username: name,
            email: email,
            password: password,
        };
        axios
            .post(`${base_url}/register`, userData)
            .then((r) => {
                console.log("Response", r.data.messege);
                
                onClose();
                
            })
            .catch((err) => {
                
                console.log("Error Message -", err.response.data.message);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signUp) {
            signUpWithPassword();
        }
        navigate("/home")
    };

    const inputStyle = {
        justify: "center",
        align: "center",
        padding: "12px",
        gap: "8px",
        height: "48px",
        borderRadius: "8px",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        border: "1px solid #CCCCCC",
    };

    return (
        <Flex justify={"center"}>
            <form onSubmit={handleSubmit}>
                <FormLabel
                    w="69px"
                    h="24px"
                    mt={2}
                    fontWeight={600}
                    fontSize="14px"
                    lineHeight="24px"
                    fontFamily="Open Sans"
                    color="#21191B"
                >
                    Full Name
                </FormLabel>

                <Input
                    type="text"
                    style={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    w={[343, 416]}
                    placeholder="Enter full name"
                    isRequired={true}
                    size={"20"}
                />

                <FormLabel
                    w="217px"
                    h="24px"
                    my={2}
                    fontWeight={600}
                    fontSize="14px"
                    lineHeight="24px"
                    fontFamily="Open Sans"
                    color="#21191B"
                    isRequired={true}
                >
                    Email address
                </FormLabel>

                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    style={inputStyle}
                    w={[343, 416]}
                    placeholder="Enter email address"
                    isRequired={true}
                />
                <FormLabel
                    w="224px"
                    h="24px"
                    my={2}
                    fontWeight={600}
                    fontSize="14px"
                    lineHeight="24px"
                    fontFamily="Open Sans"
                    color="#21191B"
                    isRequired={true}
                >
                    Password
                </FormLabel>
                <Input
                    style={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    w={[343, 416]}
                    placeholder="To keep your profile safe"
                />
                <Flex
                    my="16px"
                    w={[343, 416]}
                    align="flex-start"
                    px="8px"
                    gap="8px"
                    h="48px"
                >
                    <Text
                        h="32px"
                        fontFamily="Open Sans"
                        fontWeight={400}
                        fontSize="12px"
                        lineHeight="16px"
                        align="center"
                    >
                        By signing up, I accept the Teamiply{" "}
                        <Link color="#3470E4" href="#">
                            Terms of Service
                        </Link>{" "}
                        and acknowledge the{" "}
                        <Link color="#3470E4" href="#">
                            Privacy Policy
                        </Link>
                    </Text>
                </Flex>
                <Button
                    type="submit"
                    mb={-3}
                    mt={-1}
                    _hover={{ bgColor: "#4358F6" }}
                    isDisabled={!(name && email && password)}
                    className={styles.btn}
                    align="center"
                    px="12"
                    py="20px"
                    gap="10px"
                    w={[343, 416]}
                    h="48px"
                    bgColor="#AEC6F4"
                    borderRadius="8px"
                    color="white"
                >
                    CONTINUE
                </Button>
            </form>
        </Flex>
    );
};

export default Signup;