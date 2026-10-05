import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";

export default function Cadastro() {
  const router = useRouter();

  const [tipoUsuario, setTipoUsuario] = useState<
    "personal" | "aluno" | null
  >(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const cadastrar = () => {
    setErro("");
    setSucesso("");

    if (!tipoUsuario) {
      setErro("Selecione se você é Personal ou Aluno.");
      return;
    }

    if (!nome.trim()) {
      setErro("Digite seu nome completo.");
      return;
    }

    if (!email.trim()) {
      setErro("Digite seu e-mail.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }

    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não são iguais.");
      return;
    }

    setSucesso("Cadastro válido! 🎉");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.logo}>
        Fit<Text style={styles.logoBlue}>Track</Text>
      </Text>

      <Text style={styles.title}>Crie sua conta</Text>

      <Text style={styles.subtitle}>
        Escolha seu perfil para começar
      </Text>

      <Text style={styles.label}>Eu sou:</Text>

      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={[
            styles.profileCard,
            tipoUsuario === "personal" &&
              styles.profileCardSelected,
          ]}
          onPress={() => {
            setTipoUsuario("personal");
            setErro("");
          }}
        >
          <Text style={styles.profileIcon}>👨‍🏫</Text>

          <Text style={styles.profileTitle}>
            Personal Trainer
          </Text>

          <Text style={styles.profileDescription}>
            Gerencie alunos e crie treinos.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.profileCard,
            tipoUsuario === "aluno" &&
              styles.profileCardSelected,
          ]}
          onPress={() => {
            setTipoUsuario("aluno");
            setErro("");
          }}
        >
          <Text style={styles.profileIcon}>🏋️</Text>

          <Text style={styles.profileTitle}>
            Aluno
          </Text>

          <Text style={styles.profileDescription}>
            Acompanhe seus treinos.
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Nome completo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Confirmar senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a senha novamente"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      {erro !== "" && (
        <Text style={styles.error}>
          ❌ {erro}
        </Text>
      )}

      {sucesso !== "" && (
        <Text style={styles.success}>
          ✅ {sucesso}
        </Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={cadastrar}
      >
        <Text style={styles.buttonText}>
          Criar conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Text style={styles.loginText}>
          Já tem uma conta?{" "}
          <Text style={styles.loginBlue}>
            Entrar
          </Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  logo: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginTop: 20,
  },

  logoBlue: {
    color: "#1683F5",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginTop: 25,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
    marginTop: 15,
  },

  profileContainer: {
    flexDirection: "row",
    gap: 12,
  },

  profileCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },

  profileCardSelected: {
    borderColor: "#1683F5",
    backgroundColor: "#EEF6FF",
  },

  profileIcon: {
    fontSize: 32,
    marginBottom: 10,
  },

  profileTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },

  profileDescription: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 5,
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

  error: {
    color: "#DC2626",
    fontSize: 14,
    marginTop: 15,
    textAlign: "center",
  },

  success: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
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

  loginText: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 25,
    marginBottom: 20,
  },

  loginBlue: {
    color: "#1683F5",
    fontWeight: "bold",
  },
});