import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";

export default function CriarTreino() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Criar treino</Text>

        <View style={{ width: 30 }} />
      </View>

      {/* Nome do treino */}
      <Text style={styles.label}>Nome do treino</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Treino A - Peito e Tríceps"
        placeholderTextColor="#999"
      />

      {/* Aluno */}
      <Text style={styles.label}>Aluno</Text>

      <TouchableOpacity style={styles.select}>
        <Text style={styles.selectText}>
          Selecione um aluno
        </Text>

        <Text style={styles.arrow}>⌄</Text>
      </TouchableOpacity>

      {/* Descrição */}
      <Text style={styles.label}>Descrição</Text>

      <TextInput
        style={styles.textArea}
        placeholder="Descreva o objetivo desse treino..."
        placeholderTextColor="#999"
        multiline
      />

      {/* Exercícios */}
      <View style={styles.exerciseHeader}>
        <Text style={styles.sectionTitle}>
          Exercícios
        </Text>

        <TouchableOpacity>
          <Text style={styles.addExercise}>
            + Adicionar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Exercício 1 */}
      <View style={styles.exerciseCard}>

        <View style={styles.exerciseTop}>
          <View>
            <Text style={styles.exerciseName}>
              Supino reto
            </Text>

            <Text style={styles.muscle}>
              Peito
            </Text>
          </View>

          <Text style={styles.remove}>
            ×
          </Text>
        </View>

        <View style={styles.exerciseData}>

          <View style={styles.dataBox}>
            <Text style={styles.dataLabel}>
              Séries
            </Text>

            <TextInput
              style={styles.smallInput}
              value="4"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.dataBox}>
            <Text style={styles.dataLabel}>
              Repetições
            </Text>

            <TextInput
              style={styles.smallInput}
              value="10"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.dataBox}>
            <Text style={styles.dataLabel}>
              Peso
            </Text>

            <TextInput
              style={styles.smallInput}
              value="20"
              keyboardType="numeric"
            />
          </View>

        </View>
      </View>

      {/* Exercício 2 */}
      <View style={styles.exerciseCard}>

        <View style={styles.exerciseTop}>
          <View>
            <Text style={styles.exerciseName}>
              Tríceps pulley
            </Text>

            <Text style={styles.muscle}>
              Tríceps
            </Text>
          </View>

          <Text style={styles.remove}>
            ×
          </Text>
        </View>

        <View style={styles.exerciseData}>

          <View style={styles.dataBox}>
            <Text style={styles.dataLabel}>
              Séries
            </Text>

            <TextInput
              style={styles.smallInput}
              value="3"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.dataBox}>
            <Text style={styles.dataLabel}>
              Repetições
            </Text>

            <TextInput
              style={styles.smallInput}
              value="12"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.dataBox}>
            <Text style={styles.dataLabel}>
              Peso
            </Text>

            <TextInput
              style={styles.smallInput}
              value="15"
              keyboardType="numeric"
            />
          </View>

        </View>
      </View>

      {/* Botão salvar */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>
          Salvar treino
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

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 15,
    fontSize: 15,
  },

  select: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectText: {
    color: "#6B7280",
    fontSize: 15,
  },

  arrow: {
    fontSize: 22,
    color: "#6B7280",
  },

  textArea: {
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 15,
    fontSize: 15,
    textAlignVertical: "top",
  },

  exerciseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },

  addExercise: {
    color: "#1683F5",
    fontWeight: "bold",
  },

  exerciseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
  },

  exerciseTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  exerciseName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },

  muscle: {
    fontSize: 13,
    color: "#1683F5",
    marginTop: 4,
  },

  remove: {
    fontSize: 25,
    color: "#EF4444",
  },

  exerciseData: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },

  dataBox: {
    flex: 1,
  },

  dataLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 5,
  },

  smallInput: {
    height: 42,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    backgroundColor: "#F9FAFB",
    textAlign: "center",
    fontSize: 15,
  },

  saveButton: {
    height: 52,
    backgroundColor: "#1683F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});