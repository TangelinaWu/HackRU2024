const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginTemplate from "./screens/LoginTemplate";
import HomeScreenEmpty1 from "./screens/HomeScreenEmpty1";
import PhotoAlbum4 from "./screens/PhotoAlbum4";
import PhotoAlbum3 from "./screens/PhotoAlbum3";
import PhotoAlbum1 from "./screens/PhotoAlbum1";
import Map2 from "./screens/Map2";
import Achievements1 from "./screens/Achievements1";
import Achievements from "./screens/Achievements";
import PhotoAlbum2 from "./screens/PhotoAlbum2";
import HomeScreenEmpty from "./screens/HomeScreenEmpty";
import SampleNote from "./screens/SampleNote";
import Codehackphoto from "./screens/Codehackphoto";
import SearchingNote from "./screens/SearchingNote";
import GeneratingAlbum from "./screens/GeneratingAlbum";
import Map1 from "./screens/Map1";
import PhotoAlbum from "./screens/PhotoAlbum";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Light": require("./assets/fonts/Nunito-Light.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-BoldItalic": require("./assets/fonts/Nunito-BoldItalic.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoginTemplate"
              component={LoginTemplate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreenEmpty1"
              component={HomeScreenEmpty1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhotoAlbum4"
              component={PhotoAlbum4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhotoAlbum3"
              component={PhotoAlbum3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhotoAlbum1"
              component={PhotoAlbum1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map2"
              component={Map2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Achievements1"
              component={Achievements1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Achievements"
              component={Achievements}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhotoAlbum2"
              component={PhotoAlbum2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreenEmpty"
              component={HomeScreenEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SampleNote"
              component={SampleNote}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Codehackphoto"
              component={Codehackphoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchingNote"
              component={SearchingNote}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeneratingAlbum"
              component={GeneratingAlbum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhotoAlbum"
              component={PhotoAlbum}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
