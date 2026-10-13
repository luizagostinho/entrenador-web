
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { listarTreinos, Treino } from "../treinos";

export default function AlunoInicio() {
  const router = useRouter();
  const [aluno, setAluno] = useState("João Silva");
  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [carregando, setCarregando] = useState(true);

  const carregar = useCallback(async () => {
    setCarregando(true);
    try {
      setTreinos(await listarTreinos());
    } catch (erro) {
      console.error("Erro ao carregar treinos:", erro);
    } finally {
      setCarregando(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [carregar])
  );

  const meusTreinos = treinos.filter(
    (treino) => treino.aluno === aluno
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Olá, {aluno}!</Text>
      <Text style={styles.subtitulo}>Seus treinos no FitTrack</Text>

      <Text style={styles.label}>Selecionar aluno para teste</Text>

      <View style={styles.alunos}>
        {["João Silva", "Maria Souza", "Carlos Santos"].map((nome) => (
          <TouchableOpacity
            key={nome}
            style={[styles.aluno, aluno === nome && styles.alunoAtivo]}
            onPress={() => setAluno(nome)}
          >
            <Text style={aluno === nome ? styles.textoAtivo : styles.textoAluno}>
              {nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.linhaTitulo}>
        <Text style={styles.secao}>Meus treinos</Text>
        <TouchableOpacity onPress={carregar}>
          <Text style={styles.atualizar}>Atualizar</Text>
        </TouchableOpacity>
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#1683F5" />
      ) : meusTreinos.length === 0 ? (
        <View style={styles.vazio}>
          <Text style={styles.emoji}>🏋️</Text>
          <Text style={styles.vazioTitulo}>Nenhum treino encontrado</Text>
          <Text style={styles.vazioTexto}>
            Crie um treino para {aluno} na área do personal.
          </Text>
        </View>
      ) : (
        meusTreinos.map((treino) => (
          <View key={treino.id} style={styles.card}>
            <Text style={styles.nomeTreino}>{treino.nome}</Text>
            <Text style={styles.descricao}>
              {treino.descricao || "Treino personalizado"}
            </Text>

            <Text style={styles.info}>
              {treino.exercicios.length} exercício(s)
            </Text>

            {treino.exercicios.map((exercicio) => (
              <Text key={exercicio.id} style={styles.exercicio}>
                • {exercicio.nome} — {exercicio.series} séries x{" "}
                {exercicio.repeticoes} repetições
              </Text>
            ))}

            <TouchableOpacity
              style={styles.botao}
              onPress={() =>
                router.push(`/aluno/treino?treinoId=${treino.id}` as any)
              }
            >
              <Text style={styles.botaoTexto}>Começar treino →</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      <TouchableOpacity
        style={styles.historico}
        onPress={() => router.push("/aluno/historico" as any)}
      >
        <Text style={styles.atualizar}>Ver histórico de treinos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F9FC" },
  content: { padding: 20, paddingTop: 55, paddingBottom: 40 },
  titulo: { fontSize: 26, fontWeight: "bold", color: "#111827" },
  subtitulo: { fontSize: 14, color: "#6B7280", marginTop: 5 },
  label: { marginTop: 25, marginBottom: 10, fontWeight: "600", color: "#374151" },
  alunos: { gap: 8 },
  aluno: { padding: 12, borderRadius: 10, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E5E7EB" },
  alunoAtivo: { backgroundColor: "#E8F3FF", borderColor: "#1683F5" },
  textoAluno: { color: "#374151" },
  textoAtivo: { color: "#1683F5", fontWeight: "bold" },
  linhaTitulo: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 28, marginBottom: 15 },
  secao: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  atualizar: { color: "#1683F5", fontWeight: "bold" },
  vazio: { backgroundColor: "#FFFFFF", padding: 25, borderRadius: 14, alignItems: "center" },
  emoji: { fontSize: 38, marginBottom: 10 },
  vazioTitulo: { fontSize: 17, fontWeight: "bold", color: "#111827" },
  vazioTexto: { textAlign: "center", color: "#6B7280", marginTop: 8, lineHeight: 20 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 14, padding: 17, marginBottom: 15, borderWidth: 1, borderColor: "#E5E7EB" },
  nomeTreino: { fontSize: 19, fontWeight: "bold", color: "#111827" },
  descricao: { color: "#6B7280", marginTop: 5, marginBottom: 12 },
  info: { color: "#1683F5", fontWeight: "600", marginBottom: 12 },
  exercicio: { color: "#374151", marginBottom: 8, lineHeight: 20 },
  botao: { backgroundColor: "#1683F5", padding: 14, borderRadius: 10, alignItems: "center", marginTop: 15 },
  botaoTexto: { color: "#FFFFFF", fontWeight: "bold" },
  historico: { padding: 16, alignItems: "center", marginTop: 10 },
});
