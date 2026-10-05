import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";

export default function Treino() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Treino A
        </Text>

        <View style={{ width: 30 }} />
      </View>

      <Text style={styles.subtitle}>
        Peito e Tríceps
      </Text>

      {/* Exercício */}
      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseNumber}>
          01
        </Text>

        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>
            Supino reto
          </Text>

          <Text style={styles.exerciseDetails}>
            4 séries × 10 repetições
          </Text>

          <Text style={styles.weight}>
            Peso: 20 kg
          </Text>
        </View>

        <TouchableOpacity style={styles.check}>
          <Text style={styles.checkText}>
            ✓
          </Text>
        </TouchableOpacity>
      </View>

      {/* Exercício */}
      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseNumber}>
          02
        </Text>

        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>
            Tríceps pulley
          </Text>

          <Text style={styles.exerciseDetails}>
            3 séries × 12 repetições
          </Text>

          <Text style={styles.weight}>
            Peso: 15 kg
          </Text>
        </View>

        <TouchableOpacity style={styles.check}>
          <Text style={styles.checkText}>
            ✓
          </Text>
        </TouchableOpacity>
      </View>

      {/* Exercício */}
      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseNumber}>
          03
        </Text>

        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>
            Crucifixo
          </Text>

          <Text style={styles.exerciseDetails}>
            3 séries × 12 repetições
          </Text>

          <Text style={styles.weight}>
            Peso: 10 kg
          </Text>
        </View>

        <TouchableOpacity style={styles.check}>
          <Text style={styles.checkText}>
            ✓
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.finishButton}
        onPress={() => router.push("/aluno/historico")}
      >
        <Text style={styles.finishText}>
          Finalizar treino
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
    marginTop: 5,
    marginBottom: 30,
  },

  exerciseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  exerciseNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1683F5",
    width: 30,
  },

  exerciseInfo: {
    flex: 1,
  },

  exerciseName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  exerciseDetails: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  weight: {
    fontSize: 13,
    color: "#1683F5",
    marginTop: 5,
  },

  check: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#1683F5",
    alignItems: "center",
    justifyContent: "center",
  },

  checkText: {
    color: "#1683F5",
    fontSize: 20,
    fontWeight: "bold",
  },

  finishButton: {
    height: 52,
    backgroundColor: "#1683F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
  },

  finishText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});