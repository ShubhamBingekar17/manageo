import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  VStack,
  Text,
  Heading,
  View,
  Pressable,
  useToast,
  useColorMode,
} from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EyeIcon } from "../assets/EyeIcon";
import { EyeCloseIcon } from "../assets/EyeCloseIcon";
import { validateEmail } from "../utils/validations";
import { createUser, loginUser } from "../actions/storeActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToastMessage from "../utils/ToastMessage";

const Login = () => {
  const navigation = useNavigation();

  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();

  const getLoggedinUser = async () => {
    const data = await AsyncStorage.getItem("userId");
    if (data) {
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    getLoggedinUser(); //auto login
  }, []);

  const handleLogin = async () => {
    if (checkCredentials()) {
      loginUser({
        email,
        password,
      })
        .then((success) => {
          if (success.userId) {
            navigation.navigate("Home");
            handleResetData();
            AsyncStorage.setItem("userId", success.userId);
            showToast({ message: "Login Success", type: "success" });
          } else {
            showToast({ message: "Login Failed", type: "error" });
          }
        })
        .catch((error) => {
          console.log(error);
          showToast({ message: "An error occurred", type: "error" });
        });
    }
  };

  const handleResetData = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const checkCredentials = () => {
    if (validateEmail(email)) {
      if (checkpassword()) {
        return true;
      }
    } else {
      showToast({ message: "Enter a valid email", type: "error" });
      return false;
    }
  };

  const checkpassword = () => {
    if (password.length > 6) {
      return true;
    } else {
      showToast({ message: "Password minimum length of 6", type: "error" });
      return false;
    }
  };
  const handleRegisterUser = async () => {
    if (password == confirmPassword) {
      if (email && password && validateEmail(email)) {
        const payload = {
          email,
          password,
        };
        try {
          createUser(payload)
            .then((success) => {
              if (success.userId) {
                showToast({
                  message: "User registered successfully",
                  type: "success",
                });
                setLoginForm(true);
              } else {
                showToast({ message: "An error occurred", type: "error" });
              }
            })
            .catch((error) => {
              showToast({ message: "An error occurred", type: "error" });
            });
        } catch (e) {
          showToast({
            message: "Oops Please check your form and try again",
            type: "error",
          });
        }
      }
    } else {
      showToast({
        message: "Password and confrim password do not match",
        type: "error",
      });
    }
  };

  const showToast = ({ message, type }) => {
    toast.closeAll();
    toast.show({
      avoidKeyboard: true,
      render: () => <ToastMessage message={message} type={type} />,
    });
  };

  return (
    <View style={styles.container}>
      <VStack space={4}>
        <Heading>{loginForm ? "Login" : "Signup"}</Heading>
        <Input
          onChangeText={(value) => setEmail(value)}
          value={email}
          size="xl"
          variant="rounded"
          placeholder="Email ID"
          minW={"80%"}
        />
        <Input
          onChangeText={(value) => setPassword(value)}
          value={password}
          size="xl"
          variant="rounded"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          rightElement={
            <Pressable p={2} onPress={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
            </Pressable>
          }
        />
        {!loginForm && (
          <Input
            onChangeText={(value) => setConfirmPassword(value)}
            value={confirmPassword}
            size="xl"
            variant="rounded"
            placeholder="Confirm Password"
          />
        )}
        <Button
          rounded={20}
          onPress={loginForm ? handleLogin : handleRegisterUser}
        >
          {loginForm ? "Login" : "Register"}
        </Button>
        <Pressable onPress={() => setLoginForm((prev) => !prev)}>
          <Text fontWeight={500}>
            {loginForm ? "New User? Sign in" : "Already user? Login"}
          </Text>
        </Pressable>
        <Button onPress={toggleColorMode}>
          {colorMode === "light"
            ? "Switch to Dark Mode"
            : "Switch to Light Mode"}
        </Button>
      </VStack>
    </View>
  );
};

//just  to show different styling techniques
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
