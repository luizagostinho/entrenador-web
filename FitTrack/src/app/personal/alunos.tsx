import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";

export default function Alunos() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Meus alunos</Text>

        <View style={{ width: 30 }} />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>
          + Adicionar aluno
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>J</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>João Silva</Text>
          <Text style={styles.email}>
            joao@email.com
          </Text>
          <Text style={styles.workout}>
            Treino A • 4 exercícios
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>Maria Souza</Text>
          <Text style={styles.email}>
            maria@email.com
          </Text>
          <Text style={styles.workout}>
            Treino B • 6 exercícios
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>Carlos Oliveira</Text>
          <Text style={styles.email}>
            carlos@email.com
          </Text>
          <Text style={styles.workout}>
            Treino C • 5 exercícios
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 60,
    marginBottom: 30,
  },

  back: {
    fontSize: 40,
    color: "#1683F5",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  addButton: {
    backgroundColor: "#1683F5",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E8F3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#1683F5",
    fontSize: 20,
    fontWeight: "bold",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  email: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  workout: {
    fontSize: 13,
    color: "#1683F5",
    marginTop: 5,
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },
});