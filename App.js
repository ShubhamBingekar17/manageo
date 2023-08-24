import {
  NativeBaseProvider,
} from "native-base";
import { theme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./store/configStore";
import ErrorBoundary from "react-native-error-boundary";
import Error from "./screens/Error";

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
      <ErrorBoundary FallbackComponent={Error}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
          <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
              />
          <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home", headerBackVisible: false }}
            />
            
           
          </Stack.Navigator>
        </NavigationContainer>
              </ErrorBoundary>
      </NativeBaseProvider>
    </Provider>
  );
}

