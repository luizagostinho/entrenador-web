
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";

const listaExercicios = [
  { id: 1, nome: "Supino reto", grupo: "Peito", icone: "💪" },
  { id: 2, nome: "Crucifixo", grupo: "Peito", icone: "🏋️" },
  { id: 3, nome: "Flexão de braço", grupo: "Peito", icone: "🔥" },
  { id: 4, nome: "Tríceps pulley", grupo: "Tríceps", icone: "💪" },
  { id: 5, nome: "Tríceps testa", grupo: "Tríceps", icone: "🏋️" },
  { id: 6, nome: "Rosca direta", grupo: "Bíceps", icone: "💪" },
  { id: 7, nome: "Rosca martelo", grupo: "Bíceps", icone: "🏋️" },
  { id: 8, nome: "Puxada frontal", grupo: "Costas", icone: "🔥" },
  { id: 9, nome: "Remada baixa", grupo: "Costas", icone: "🏋️" },
  { id: 10, nome: "Agachamento", grupo: "Pernas", icone: "🦵" },
  { id: 11, nome: "Leg press", grupo: "Pernas", icone: "🏋️" },
  { id: 12, nome: "Cadeira extensora", grupo: "Pernas", icone: "🦵" },
  { id: 13, nome: "Desenvolvimento", grupo: "Ombros", icone: "💪" },
  { id: 14, nome: "Elevação lateral", grupo: "Ombros", icone: "🏋️" },
  { id: 15, nome: "Abdominal", grupo: "Abdômen", icone: "🔥" },
];

const grupos = [
  "Todos",
  "Peito",
  "Costas",
  "Pernas",
  "Bíceps",
  "Tríceps",
  "Ombros",
  "Abdômen",
];

export default function Exercicios() {
  const router = useRouter();

  const [busca, setBusca] = useState("");
  const [grupoSelecionado, setGrupoSelecionado] =
    useState("Todos");

  const exerciciosFiltrados = listaExercicios.filter(
    (exercicio) => {
      const correspondeBusca = exercicio.nome
        .toLowerCase()
        .includes(busca.trim().toLowerCase());

      const correspondeGrupo =
        grupoSelecionado === "Todos" ||
        exercicio.grupo === grupoSelecionado;

      return correspondeBusca && correspondeGrupo;
    }
  );

  

function abrirExercicio(nome: string) {
  router.push(
    `/personal/criar-treino?exercicio=${encodeURIComponent(nome)}` as any
  );
}



  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Exercícios</Text>

        <View style={styles.headerSpace} />
      </View>

      <Text style={styles.subtitle}>
        Encontre o exercício ideal para seu treino.
      </Text>

      <TextInput
        style={styles.search}
        placeholder="🔎 Buscar exercício..."
        placeholderTextColor="#999"
        value={busca}
        onChangeText={setBusca}
        autoCapitalize="none"
      />

      <Text style={styles.sectionTitle}>
        Grupo muscular
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}
      >
        {grupos.map((grupo) => {
          const selecionado = grupoSelecionado === grupo;

          return (
            <TouchableOpacity
              key={grupo}
              style={[
                styles.filterButton,
                selecionado && styles.filterSelected,
              ]}
              onPress={() => setGrupoSelecionado(grupo)}
            >
              <Text
                style={[
                  styles.filterText,
                  selecionado && styles.filterTextSelected,
                ]}
              >
                {grupo}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Text style={styles.sectionTitle}>
        Exercícios disponíveis ({exerciciosFiltrados.length})
      </Text>

      {exerciciosFiltrados.map((exercicio) => (
        <TouchableOpacity
          key={exercicio.id}
          style={styles.card}
          onPress={() => abrirExercicio(exercicio.nome)}
          activeOpacity={0.7}
        >
          <View style={styles.icon}>
            <Text style={styles.iconText}>
              {exercicio.icone}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>
              {exercicio.nome}
            </Text>

            <Text style={styles.muscle}>
              {exercicio.grupo}
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      {exerciciosFiltrados.length === 0 && (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🔎</Text>

          <Text style={styles.emptyTitle}>
            Nenhum exercício encontrado
          </Text>

          <Text style={styles.emptyText}>
            Tente outro nome ou grupo muscular.
          </Text>
        </View>
      )}

      <View style={styles.bottomSpace} />
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
    marginBottom: 15,
  },
  headerSpace: {
    width: 30,
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
    color: "#6B7280",
    fontSize: 14,
    marginBottom: 22,
  },
  search: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  filters: {
    marginBottom: 24,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 8,
  },
  filterSelected: {
    backgroundColor: "#1683F5",
    borderColor: "#1683F5",
  },
  filterText: {
    color: "#4B5563",
    fontSize: 13,
    fontWeight: "600",
  },
  filterTextSelected: {
    color: "#FFFFFF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#E8F3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 24,
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  muscle: {
    fontSize: 13,
    color: "#1683F5",
    marginTop: 4,
  },
  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },
  empty: {
    alignItems: "center",
    paddingVertical: 35,
  },
  emptyIcon: {
    fontSize: 35,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  emptyText: {
    color: "#6B7280",
    marginTop: 6,
    textAlign: "center",
  },
  bottomSpace: {
    height: 35,
  },
});
