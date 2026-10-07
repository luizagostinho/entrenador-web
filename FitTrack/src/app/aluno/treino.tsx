import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";

import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";

export default function Treino() {
  const router = useRouter();

  const [videoVisible, setVideoVisible] = useState(false);

  const [exerciciosConcluidos, setExerciciosConcluidos] =
    useState<number[]>([]);

  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    (player) => {
      player.loop = false;
    }
  );

  const abrirVideo = () => {
    setVideoVisible(true);
    player.play();
  };

  const fecharVideo = () => {
    player.pause();
    setVideoVisible(false);
  };

  const marcarExercicio = (numero: number) => {
    if (exerciciosConcluidos.includes(numero)) {
      setExerciciosConcluidos(
        exerciciosConcluidos.filter(
          (item) => item !== numero
        )
      );
    } else {
      setExerciciosConcluidos([
        ...exerciciosConcluidos,
        numero,
      ]);
    }
  };

  const totalConcluidos = exerciciosConcluidos.length;

  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
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

      {/* PROGRESSO */}
      <View style={styles.progressCard}>
        <View>
          <Text style={styles.progressTitle}>
            Progresso do treino
          </Text>

          <Text style={styles.progressText}>
            {totalConcluidos} de 3 exercícios concluídos
          </Text>
        </View>

        <Text style={styles.progressNumber}>
          {Math.round((totalConcluidos / 3) * 100)}%
        </Text>
      </View>

      {/* EXERCÍCIO 1 */}
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

          <TouchableOpacity
            style={styles.videoButton}
            onPress={abrirVideo}
          >
            <Text style={styles.videoButtonText}>
              ▶ Ver execução
            </Text>
          </TouchableOpacity>

          {exerciciosConcluidos.includes(1) && (
            <Text style={styles.completedLabel}>
              ✓ Exercício concluído
            </Text>
          )}

        </View>

        <TouchableOpacity
          style={[
            styles.check,
            exerciciosConcluidos.includes(1) &&
              styles.checkCompleted,
          ]}
          onPress={() => marcarExercicio(1)}
        >
          <Text
            style={[
              styles.checkText,
              exerciciosConcluidos.includes(1) &&
                styles.checkTextCompleted,
            ]}
          >
            ✓
          </Text>
        </TouchableOpacity>

      </View>

      {/* EXERCÍCIO 2 */}
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

          <TouchableOpacity
            style={styles.videoButton}
            onPress={abrirVideo}
          >
            <Text style={styles.videoButtonText}>
              ▶ Ver execução
            </Text>
          </TouchableOpacity>

          {exerciciosConcluidos.includes(2) && (
            <Text style={styles.completedLabel}>
              ✓ Exercício concluído
            </Text>
          )}

        </View>

        <TouchableOpacity
          style={[
            styles.check,
            exerciciosConcluidos.includes(2) &&
              styles.checkCompleted,
          ]}
          onPress={() => marcarExercicio(2)}
        >
          <Text
            style={[
              styles.checkText,
              exerciciosConcluidos.includes(2) &&
                styles.checkTextCompleted,
            ]}
          >
            ✓
          </Text>
        </TouchableOpacity>

      </View>

      {/* EXERCÍCIO 3 */}
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

          <TouchableOpacity
            style={styles.videoButton}
            onPress={abrirVideo}
          >
            <Text style={styles.videoButtonText}>
              ▶ Ver execução
            </Text>
          </TouchableOpacity>

          {exerciciosConcluidos.includes(3) && (
            <Text style={styles.completedLabel}>
              ✓ Exercício concluído
            </Text>
          )}

        </View>

        <TouchableOpacity
          style={[
            styles.check,
            exerciciosConcluidos.includes(3) &&
              styles.checkCompleted,
          ]}
          onPress={() => marcarExercicio(3)}
        >
          <Text
            style={[
              styles.checkText,
              exerciciosConcluidos.includes(3) &&
                styles.checkTextCompleted,
            ]}
          >
            ✓
          </Text>
        </TouchableOpacity>

      </View>

      {/* FINALIZAR */}
      <TouchableOpacity
        style={[
          styles.finishButton,
          totalConcluidos === 3 &&
            styles.finishButtonReady,
        ]}
        onPress={() => router.push("/aluno/historico")}
      >
        <Text style={styles.finishText}>
          {totalConcluidos === 3
            ? "✓ Finalizar treino"
            : "Finalizar treino"}
        </Text>
      </TouchableOpacity>

      {/* MODAL DO VÍDEO */}
      <Modal
        visible={videoVisible}
        transparent
        animationType="fade"
        onRequestClose={fecharVideo}
      >
        <View style={styles.modalBackground}>

          <View style={styles.videoModal}>

            <Text style={styles.videoTitle}>
              Como executar
            </Text>

            <VideoView
              player={player}
              style={styles.video}
              nativeControls
              contentFit="contain"
            />

            <Text style={styles.videoDescription}>
              Faça o movimento de forma controlada,
              mantendo a postura correta.
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={fecharVideo}
            >
              <Text style={styles.closeButtonText}>
                Fechar
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

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
    marginBottom: 25,
  },

  progressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  progressTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111827",
  },

  progressText: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  progressNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1683F5",
  },

  exerciseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
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

  videoButton: {
    alignSelf: "flex-start",
    marginTop: 10,
    backgroundColor: "#EEF6FF",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
  },

  videoButtonText: {
    color: "#1683F5",
    fontSize: 12,
    fontWeight: "bold",
  },

  completedLabel: {
    color: "#16A34A",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 8,
  },

  check: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#1683F5",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  checkCompleted: {
    backgroundColor: "#16A34A",
    borderColor: "#16A34A",
  },

  checkText: {
    color: "#1683F5",
    fontSize: 20,
    fontWeight: "bold",
  },

  checkTextCompleted: {
    color: "#FFFFFF",
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

  finishButtonReady: {
    backgroundColor: "#16A34A",
  },

  finishText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    padding: 20,
  },

  videoModal: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
  },

  videoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
  },

  video: {
    width: "100%",
    height: 220,
    backgroundColor: "#000000",
    borderRadius: 12,
  },

  videoDescription: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
    marginTop: 15,
  },

  closeButton: {
    height: 48,
    backgroundColor: "#1683F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});