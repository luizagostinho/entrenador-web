
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { salvarTreino } from "../treinos";

type Exercicio = {
  id: number;
  nome: string;
  series: string;
  repeticoes: string;
  peso: string;
};

export default function CriarTreino() {
  const router = useRouter();
  const params = useLocalSearchParams<{ exercicio?: string }>();

  const [nomeTreino, setNomeTreino] = useState("");
  const [aluno, setAluno] = useState("João Silva");
  const [descricao, setDescricao] = useState("");
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [proximoId, setProximoId] = useState(1);

  const adicionarExercicio = (nome: string) => {
    if (exercicios.some((e) => e.nome === nome)) {
      Alert.alert("Aviso", "Esse exercício já foi adicionado.");
      return;
    }

    setExercicios((anteriores) => [
      ...anteriores,
      {
        id: proximoId,
        nome,
        series: "3",
        repeticoes: "12",
        peso: "0",
      },
    ]);

    setProximoId((id) => id + 1);
  };

  const removerExercicio = (id: number) => {
    setExercicios((anteriores) =>
      anteriores.filter((e) => e.id !== id)
    );
  };

  const atualizarExercicio = (
    id: number,
    campo: "series" | "repeticoes" | "peso",
    valor: string
  ) => {
    setExercicios((anteriores) =>
      anteriores.map((e) =>
        e.id === id ? { ...e, [campo]: valor } : e
      )
    );
  };

  const salvar = () => {
    if (!nomeTreino.trim()) {
      Alert.alert("Atenção", "Digite o nome do treino.");
      return;
    }

    if (exercicios.length === 0) {
      Alert.alert("Atenção", "Adicione pelo menos um exercício.");
      return;
    }

    salvarTreino({
      nome: nomeTreino.trim(),
      aluno,
      descricao: descricao.trim(),
      exercicios,
    });

    Alert.alert(
      "Treino salvo!",
      `Treino: ${nomeTreino}\nAluno: ${aluno}\nExercícios: ${exercicios.length}`,
      [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Criar treino</Text>

        <View style={{ width: 30 }} />
      </View>

      <Text style={styles.label}>Nome do treino</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex.: Treino A - Peito"
        value={nomeTreino}
        onChangeText={setNomeTreino}
      />

      <Text style={styles.label}>Selecione o aluno</Text>

      <View style={styles.studentOptions}>
        {["João Silva", "Maria Souza", "Carlos Santos"].map(
          (nome) => (
            <TouchableOpacity
              key={nome}
              style={[
                styles.studentButton,
                aluno === nome && styles.studentSelected,
              ]}
              onPress={() => setAluno(nome)}
            >
              <Text
                style={[
                  styles.studentText,
                  aluno === nome && styles.studentTextSelected,
                ]}
              >
                {nome}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Text style={styles.label}>Descrição</Text>

      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Objetivo ou observações do treino"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      {typeof params.exercicio === "string" &&
        params.exercicio.length > 0 &&
        !exercicios.some((e) => e.nome === params.exercicio) && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => adicionarExercicio(params.exercicio!)}
          >
            <Text style={styles.addButtonText}>
              + Adicionar {params.exercicio}
            </Text>
          </TouchableOpacity>
        )}

      <Text style={styles.sectionTitle}>
        Exercícios ({exercicios.length})
      </Text>

      {exercicios.map((exercicio) => (
        <View key={exercicio.id} style={styles.exerciseCard}>
          <View style={styles.exerciseHeader}>
            <Text style={styles.exerciseName}>
              {exercicio.nome}
            </Text>

            <TouchableOpacity
              onPress={() => removerExercicio(exercicio.id)}
            >
              <Text style={styles.removeText}>Remover</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fields}>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Séries</Text>
              <TextInput
                style={styles.smallInput}
                value={exercicio.series}
                onChangeText={(v) =>
                  atualizarExercicio(exercicio.id, "series", v)
                }
                keyboardType="numeric"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Repetições</Text>
              <TextInput
                style={styles.smallInput}
                value={exercicio.repeticoes}
                onChangeText={(v) =>
                  atualizarExercicio(
                    exercicio.id,
                    "repeticoes",
                    v
                  )
                }
                keyboardType="numeric"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Peso (kg)</Text>
              <TextInput
                style={styles.smallInput}
                value={exercicio.peso}
                onChangeText={(v) =>
                  atualizarExercicio(exercicio.id, "peso", v)
                }
                keyboardType="decimal-pad"
              />
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.libraryButton}
        onPress={() => router.push("/personal/exercicios" as any)}
      >
        <Text style={styles.libraryButtonText}>
          + Buscar exercícios na biblioteca
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>Resumo do treino</Text>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Aluno: {aluno}</Text>
        <Text style={styles.summaryText}>
          Exercícios: {exercicios.length}
        </Text>
        <Text style={styles.summaryText}>
          Observações: {descricao || "Nenhuma"}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={salvar}
      >
        <Text style={styles.saveButtonText}>Salvar treino</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 60,
    marginBottom: 25,
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
    marginTop: 16,
  },
  input: {
    minHeight: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#111827",
  },
  description: {
    height: 90,
    paddingTop: 14,
    textAlignVertical: "top",
  },
  studentOptions: {
    gap: 8,
  },
  studentButton: {
    padding: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
  },
  studentSelected: {
    backgroundColor: "#EEF6FF",
    borderColor: "#1683F5",
  },
  studentText: {
    color: "#374151",
  },
  studentTextSelected: {
    color: "#1683F5",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 28,
    marginBottom: 12,
  },
  exerciseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },
  exerciseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  exerciseName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  removeText: {
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "600",
  },
  fields: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
  field: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 11,
    color: "#6B7280",
    marginBottom: 6,
  },
  smallInput: {
    height: 42,
    backgroundColor: "#F7F9FC",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 8,
    color: "#111827",
  },
  addButton: {
    backgroundColor: "#E8F3FF",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  addButtonText: {
    color: "#1683F5",
    textAlign: "center",
    fontWeight: "bold",
  },
  libraryButton: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: "#1683F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  libraryButtonText: {
    color: "#1683F5",
    fontWeight: "bold",
  },
  summary: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    gap: 8,
  },
  summaryText: {
    fontSize: 13,
    color: "#4B5563",
  },
  saveButton: {
    height: 54,
    backgroundColor: "#1683F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
