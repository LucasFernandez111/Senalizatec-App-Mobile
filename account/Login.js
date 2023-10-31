import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

//fuentes

export default function Login() {
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [fontsLoaded] = useFonts({
    Lalezar33: require("../font/Lalezar-Regular.ttf"),
  });

  const onLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  const handleInput = (event) => {
    const { placeholder, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [placeholder]: value,
      [placeholder]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/login", values, {
        withCredentials: true,
      });
      if (!data) {
        throw new Error("Error al ingresar");
      }
      navigation.navigate("Home");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <View style={styles.container} onLayout={onLayoutView}>
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.letter}>Ingresar</Text>
      <TextInput
        placeholderTextColor="rgba(161, 161, 161, 0.4)"
        placeholder="email"
        onChange={handleInput}
        style={[styles.inputs, hover && styles.inputHover]}
        defaultValue=""
      />
      <TextInput
        placeholderTextColor="rgba(161, 161, 161, 0.4)"
        placeholder="password"
        onChange={handleInput}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        style={[styles.inputs, hover && styles.inputHover]}
        defaultValue=""
      />
      {error && (
        <Text
          style={{
            color: "red",
            fontFamily: "Lalezar33",
            margin: 10,
            fontSize: 20,
          }}
        >
          Correo o contraseña incorrectos
        </Text>
      )}
      <View>
        <Pressable onPress={handleSubmit} style={login}>
          <Text
            style={{
              color: "white",
              fontFamily: "Lalezar33",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            entrar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  letter: {
    fontFamily: "Lalezar33",
    fontSize: 30,

    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#151316",
    alignItems: "center",
    justifyContent: "center",
  },

  inputs: {
    fontFamily: "Lalezar33",
    width: "80%",
    height: 45,
    lineHeight: 30,
    margin: 10,
    paddingHorizontal: 16, // Equivalente a padding: 0 5rem;
    paddingLeft: 48, // Equivalente a padding-left: 3rem;
    borderWidth: 2,
    borderColor: "transparent", // Equivalente a border: 2px solid transparent;
    borderRadius: 10,
    backgroundColor: "#151316",
    color: "white",
    borderColor: "#de4a97", // Agregamos el borde de color aquí
    borderStyle: "solid", // Agregamos el estilo de borde aquí
    borderWidth: 1, // Agregamos el ancho de borde aquí
  },
  inputHover: {
    shadowColor: "rgba(216, 58, 179, 0.3)",
  },
});

const login = StyleSheet.create({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundColor: "#de4a97",
  borderRadius: 41,
  width: 300,
  height: "44px",
});
