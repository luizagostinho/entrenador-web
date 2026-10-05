import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

export default function AlunoHome() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>
            Olá, Luiz! 👋
          </Text>

          <Text style={styles.subtitle}>
            Pronto para treinar hoje?
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>L</Text>
        </View>
      </View>

      {/* Treino de hoje */}
      <Text style={styles.sectionTitle}>
        Treino de hoje
      </Text>

      <View style={styles.workoutCard}>

        <View style={styles.workoutHeader}>
          <View>
            <Text style={styles.workoutTitle}>
              Treino A
            </Text>

            <Text style={styles.workoutSubtitle}>
              Peito e Tríceps
            </Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusText}>
              HOJE
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            💪 5 exercícios
          </Text>

          <Text style={styles.infoText}>
            ⏱️ 45 min
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push("/aluno/treino")}
        >
          <Text style={styles.startButtonText}>
            Começar treino
          </Text>
        </TouchableOpacity>

      </View>

      {/* Progresso */}
      <Text style={styles.sectionTitle}>
        Seu progresso
      </Text>

      <View style={styles.progressContainer}>

        <View style={styles.progressCard}>
          <Text style={styles.progressNumber}>
            12
          </Text>

          <Text style={styles.progressLabel}>
            Treinos
          </Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressNumber}>
            8
          </Text>

          <Text style={styles.progressLabel}>
            Sequência
          </Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressNumber}>
            42
          </Text>

          <Text style={styles.progressLabel}>
            Exercícios
          </Text>
        </View>

      </View>

      {/* Histórico */}
      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => router.push("/aluno/historico")}
      >
        <Text style={styles.historyText}>
          Ver meu histórico
        </Text>

        <Text style={styles.arrow}>
          ›
        </Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },

  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1683F5",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
    marginTop: 10,
  },

  workoutCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },

  workoutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  workoutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  workoutSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },

  status: {
    backgroundColor: "#E8F3FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  statusText: {
    color: "#1683F5",
    fontSize: 11,
    fontWeight: "bold",
  },

  infoRow: {
    flexDirection: "row",
    gap: 25,
    marginTop: 20,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 14,
    color: "#6B7280",
  },

  startButton: {
    height: 50,
    backgroundColor: "#1683F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  progressContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },

  progressCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
  },

  progressNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1683F5",
  },

  progressLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },

  historyButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  historyText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },
});