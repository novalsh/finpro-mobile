import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./src/Screens/Home";
// import About from "./src/Screens/About";
// import Contact from "./src/Screens/Contact";
// import Course from "./src/Screens/Course";
// import UserData from "./src/Screens/UserData";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
// import CourseDetails from "./src/Screens/CourseDetails";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} color="#0000ff" />
      </View>
    );
  }

  // useEffect(() => {
  //   const checkFontsLoaded = async () => {
  //     if (!fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   };
  //   checkFontsLoaded();
  // }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} name={"Mannu Technical"} />}
        </Stack.Screen>

        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Nunito_600SemiBold",
            },
            title: "Courses",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Nunito_600SemiBold",
            },
            title: "Students Data",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Course Details"
           component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontsize: 24,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Course = () => {
  return (
    <View>
      <Text>Course Screen - Dummy Content</Text>
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text>UserData Screen - Dummy Content</Text>
    </View>
  );
};

const About = () => {
  return (
    <View>
      <Text>About Screen - Dummy Content</Text>
    </View>
  );
};

const Contact = () => {
  return (
    <View>
      <Text>Contact Screen - Dummy Content</Text>
    </View>
  );
};

const CourseDetails = () => {
  return (
    <View>
      <Text>CourseDetails Screen - Dummy Content</Text>
    </View>
  );
};

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Pendidikan Online</Text>
      <Text style={styles.subtitle}> Coming Soon Untuk Part Selanjutnya Di Tunggu Ya!!!</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Warna latar belakang
  },
  title: {
    fontSize: 24,
    fontFamily: "Nunito_700Bold",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
    marginTop: 10,
  },
});

