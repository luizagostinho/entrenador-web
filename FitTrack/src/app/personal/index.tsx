import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

export default function PersonalHome() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Olá, Personal! 👋</Text>
          <Text style={styles.subtitle}>
            Vamos cuidar dos seus alunos.
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>P</Text>
        </View>
      </View>

      {/* Cards de resumo */}
      <View style={styles.statsContainer}>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Alunos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Treinos</Text>
        </View>

      </View>

      {/* Botão criar treino */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/personal/criar-treino")}
      >
        <Text style={styles.createButtonText}>
          + Criar novo treino
        </Text>
      </TouchableOpacity>

      {/* Alunos */}
      <Text style={styles.sectionTitle}>Seus alunos</Text>

      <TouchableOpacity style={styles.studentCard}>
        <View style={styles.studentAvatar}>
          <Text style={styles.studentAvatarText}>J</Text>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>João Silva</Text>
          <Text style={styles.studentWorkout}>
            Treino A • Hoje
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.studentCard}>
        <View style={styles.studentAvatar}>
          <Text style={styles.studentAvatarText}>M</Text>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>Maria Souza</Text>
          <Text style={styles.studentWorkout}>
            Treino B • Hoje
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.seeAllButton}
        onPress={() => router.push("/personal/alunos")}
      >
        <Text style={styles.seeAllText}>
          Ver todos os alunos
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

  statsContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1683F5",
  },

  statLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },

  createButton: {
    backgroundColor: "#1683F5",
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
  },

  studentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  studentAvatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#E8F3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  studentAvatarText: {
    color: "#1683F5",
    fontSize: 18,
    fontWeight: "bold",
  },

  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },

  studentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  studentWorkout: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },

  seeAllButton: {
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 40,
  },

  seeAllText: {
    color: "#1683F5",
    fontSize: 15,
    fontWeight: "600",
  },
});