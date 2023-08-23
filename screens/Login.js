import React, { useState } from "react";
import {
  Button,
  Input,
  VStack,
  Text,
  Heading,
  View,
  Checkbox,
} from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

const Login = () => {
  const navigation = useNavigation();

  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
//   const db = app.firestore();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

//   console.log(db)

//   const handleRegisterUser = () => {
//     const db = getDatabase();
//     set(ref(db, 'users/' + 32321638), {
//         username: "name",
//         email: "email",
//         profile_picture : "imageUrl"
//       });
//   }

  const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
    db().ref(`/users/${response.user.uid}`).set({ name });
    db().ref(`/users/${response.user.uid}/leaderboard`).set({ totalSteps: 0 });
  };

  const handleRegisterUser = async () => {
    if (email && password) {
      try {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password
        );

        if (response.user) {
          await createProfile(response);
          nav.replace("Main");
        }
      } catch (e) {
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
        />
        <Input
          onChangeText={(value) => setPassword(value)}
          value={password}
          size="xl"
          variant="rounded"
          placeholder="Password"
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
        <Checkbox
          onChange={() => setRememberMe((prev) => !prev)}
          isChecked={rememberMe}
          colorScheme="green"
        >
          Remeber Me
        </Checkbox>
        <Button rounded={20} onPress={handleRegisterUser}>
          {loginForm ? "Login" : "Register"}
        </Button>
        <Pressable onPress={() => setLoginForm((prev) => !prev)}>
          {loginForm ? (
            <Text>New User? Signin</Text>
          ) : (
            <Text>Already user? Login</Text>
          )}
        </Pressable>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
