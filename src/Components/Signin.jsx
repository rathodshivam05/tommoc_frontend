import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../common.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/authSlice";

const Signin = ({ onClose, signUp }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

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

  const signInWithPassword = () => {
    dispatch(login({ email, password }))
    navigate("/home")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signUp) {
      signInWithPassword();
    }
    onClose()
  };

  return (
    <Flex justify={"center"} mt={5}>
      <form onSubmit={handleSubmit}>
        <Flex
          mb="60px"
          direction="column"
          align="flex-start"
          justify={"center"}
          gap="6px"
          w={[343, 416]}
          h="102px"
        >
          <FormLabel
            w="217px"
            mt={10}
            h="24px"
            fontWeight={600}
            fontSize="14px"
            lineHeight="24px"
            fontFamily="Open Sans"
            color="#21191B"
          >
            Enter email address
          </FormLabel>
          <Input
            mt={-1}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            style={inputStyle}
            w={[343, 416]}
            placeholder="Enter phone number or email address"
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
          >
            Password
          </FormLabel>
          <Input
            style={inputStyle}
            mt={-2}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            w={[343, 416]}
            placeholder="To keep your profile safe"
          />
        </Flex>
        <Button
          mt="15px"
          type="submit"
          className={styles.btn}
          isDisabled={!(email && password)}
          align="center"
          _hover={{ bgColor: "#4358F6" }}
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

export default Signin;