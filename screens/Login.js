import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  VStack,
  Text,
  Heading,
  View,
  Checkbox,
  Pressable,
  useToast,
  useColorMode,
} from "native-base";
import { Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import { EyeIcon } from "../assets/EyeIcon";
import { EyeCloseIcon } from "../assets/EyeCloseIcon";
import ToastMessage from "../utils/ToastMessage";
import { SafeAreaView } from "react-native-safe-area-context";
import { validateEmail } from "../utils/validations";
import { createUser, getAllTasks, loginUser } from "../actions/storeActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();

  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();

  const getLoggedinUser = async () => {
    const data = await AsyncStorage.getItem("userId");
    console.log("dataaaaa ", data);
    if (data) {
      getAllTasks();
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    getLoggedinUser();
  }, []);

  const handleLogin = () => {
    if (checkCredentials()) {
      loginUser({
        email,
        password,
      })
        .then((res) => {
          console.log("here fi")
          if (res) {
            navigation.navigate("Home");
            handleResetData();
            toast.show({
              avoidKeyboard: true,
              render: () => (
                <ToastMessage message={"Login Success"} type={"success"} />
              ),
            });
          } else {
            toast.show({
              avoidKeyboard: true,
              render: () => (
                <ToastMessage message={"Failed to login"} type={"error"} />
              ),
            });
          }
        })
        .catch((error) => {
          toast.show({
            avoidKeyboard: true,
            render: () => (
              <ToastMessage message={"Failed to login"} type={"error"} />
            ),
          });
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
      toast.show({
        avoidKeyboard: true,
        render: () => (
          <ToastMessage message={"Enter a valid email"} type={"error"} />
        ),
      });
      return false;
    }
  };

  const checkpassword = () => {
    if (password.length > 6) {
      return true;
    } else {
      toast.show({
        avoidKeyboard: true,
        render: () => (
          <ToastMessage
            message={"Password minimum length of 6"}
            type={"error"}
          />
        ),
      });
      return false;
    }
  };
  const handleRegisterUser = async () => {
    console.log("tryr");
    if (password == confirmPassword) {
    } else {
      toast.show({
        avoidKeyboard: true,
        render: () => (
          <ToastMessage
            message={"Password and confrim password do not match"}
            type={"error"}
          />
        ),
      });
    }

    if (email && password && validateEmail(email)) {
      try {
        createUser({
          email,
          password,
        }, navigation)
      } catch (e) {
        console.log("error: ", e);
        Alert.alert("Oops", "Please check your form and try again");
      }
    }
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
        {/* <Checkbox
          onChange={() => setRememberMe((prev) => !prev)}
          isChecked={rememberMe}
          colorScheme="green"
        >
          Remeber Me
        </Checkbox> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
