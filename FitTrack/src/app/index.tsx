import { useRouter } from "expo-router";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Fit<Text style={styles.logoBlue}>Track</Text>
      </Text>

      <Text style={styles.subtitle}>Seu progresso, nosso foco.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>ou</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>G Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/cadastro")}>
        <Text style={styles.register}>
          Não tem uma conta?{" "}
          <Text style={styles.registerBlue}>
            Cadastre-se
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 30,
    justifyContent: "center",
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },

  logoBlue: {
    color: "#1683F5",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 40,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 7,
    marginTop: 15,
  },

  input: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  button: {
    height: 52,
    backgroundColor: "#1683F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  forgot: {
    textAlign: "center",
    color: "#1683F5",
    marginTop: 18,
    fontSize: 14,
  },

  or: {
    textAlign: "center",
    color: "#9CA3AF",
    marginVertical: 20,
  },

  googleButton: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  googleText: {
    color: "#374151",
    fontSize: 15,
    fontWeight: "600",
  },

  register: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 30,
  },

  registerBlue: {
    color: "#1683F5",
    fontWeight: "bold",
  },
});
