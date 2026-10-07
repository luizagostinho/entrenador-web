import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

export default function Historico() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Meu histórico
        </Text>

        <View style={{ width: 30 }} />
      </View>

      <Text style={styles.subtitle}>
        Acompanhe seus treinos realizados
      </Text>

      {/* Resumo */}
      <View style={styles.summary}>

        <View style={styles.summaryCard}>
          <Text style={styles.number}>12</Text>
          <Text style={styles.label}>
            Treinos
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.number}>42</Text>
          <Text style={styles.label}>
            Exercícios
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.number}>8</Text>
          <Text style={styles.label}>
            Dias seguidos
          </Text>
        </View>

      </View>

      {/* Histórico */}
      <Text style={styles.sectionTitle}>
        Treinos recentes
      </Text>

      {/* Treino 1 */}
      <View style={styles.historyCard}>

        <View style={styles.date}>
          <Text style={styles.day}>
            06
          </Text>

          <Text style={styles.month}>
            OUT
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.workoutName}>
            Treino A
          </Text>

          <Text style={styles.workoutDescription}>
            Peito e Tríceps
          </Text>

          <Text style={styles.duration}>
            ⏱️ 42 minutos
          </Text>
        </View>

        <View style={styles.completed}>
          <Text style={styles.completedText}>
            ✓
          </Text>
        </View>

      </View>

      {/* Treino 2 */}
      <View style={styles.historyCard}>

        <View style={styles.date}>
          <Text style={styles.day}>
            04
          </Text>

          <Text style={styles.month}>
            OUT
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.workoutName}>
            Treino B
          </Text>

          <Text style={styles.workoutDescription}>
            Costas e Bíceps
          </Text>

          <Text style={styles.duration}>
            ⏱️ 48 minutos
          </Text>
        </View>

        <View style={styles.completed}>
          <Text style={styles.completedText}>
            ✓
          </Text>
        </View>

      </View>

      {/* Treino 3 */}
      <View style={styles.historyCard}>

        <View style={styles.date}>
          <Text style={styles.day}>
            02
          </Text>

          <Text style={styles.month}>
            OUT
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.workoutName}>
            Treino C
          </Text>

          <Text style={styles.workoutDescription}>
            Pernas
          </Text>

          <Text style={styles.duration}>
            ⏱️ 55 minutos
          </Text>
        </View>

        <View style={styles.completed}>
          <Text style={styles.completedText}>
            ✓
          </Text>
        </View>

      </View>

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

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 30,
  },

  summary: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
  },

  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1683F5",
  },

  label: {
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
  },

  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  date: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#E8F3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  day: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1683F5",
  },

  month: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1683F5",
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  workoutName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  workoutDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  duration: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },

  completed: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#DCFCE7",
    alignItems: "center",
    justifyContent: "center",
  },

  completedText: {
    color: "#16A34A",
    fontSize: 18,
    fontWeight: "bold",
  },
});