
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import {
  useRouter,
  useLocalSearchParams,
} from "expo-router";

import {
  useVideoPlayer,
  VideoView,
} from "expo-video";

export default function Exercicio() {
  const router = useRouter();

  const { nome } = useLocalSearchParams<{
    nome?: string;
  }>();

  const nomeExercicio = nome || "Supino reto";

  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    (player) => {
      player.loop = false;
    }
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Exercício
        </Text>

        <View style={{ width: 30 }} />
      </View>

      <Text style={styles.exerciseName}>
        {nomeExercicio}
      </Text>

      <Text style={styles.muscle}>
        Demonstração do exercício
      </Text>

      <View style={styles.videoContainer}>
        <VideoView
          player={player}
          style={styles.video}
          nativeControls
          contentFit="contain"
        />
      </View>

      <Text style={styles.sectionTitle}>
        Como executar
      </Text>

      <View style={styles.descriptionCard}>
        <Text style={styles.description}>
          1. Posicione seu corpo corretamente antes de
          começar o movimento.
        </Text>

        <Text style={styles.description}>
          2. Execute o exercício de forma controlada,
          mantendo uma boa postura.
        </Text>

        <Text style={styles.description}>
          3. Respeite as orientações do seu personal
          trainer e utilize uma carga adequada.
        </Text>

        <Text style={styles.tip}>
          💡 Dica: priorize a execução correta do
          movimento, sem exagerar no peso.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Informações do treino
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoNumber}>4</Text>
          <Text style={styles.infoLabel}>
            Séries
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoNumber}>10</Text>
          <Text style={styles.infoLabel}>
            Repetições
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoNumber}>60s</Text>
          <Text style={styles.infoLabel}>
            Descanso
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.back()}
      >
        <Text style={styles.addButtonText}>
          + Adicionar ao treino
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

  exerciseName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },

  muscle: {
    fontSize: 15,
    color: "#1683F5",
    fontWeight: "600",
    marginTop: 5,
    marginBottom: 20,
  },

  videoContainer: {
    width: "100%",
    height: 220,
    backgroundColor: "#000000",
    borderRadius: 16,
    overflow: "hidden",
  },

  video: {
    width: "100%",
    height: "100%",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 30,
    marginBottom: 12,
  },

  descriptionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
  },

  description: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 21,
    marginBottom: 12,
  },

  tip: {
    fontSize: 13,
    color: "#1683F5",
    backgroundColor: "#EEF6FF",
    padding: 12,
    borderRadius: 10,
    lineHeight: 19,
  },

  infoContainer: {
    flexDirection: "row",
    gap: 10,
  },

  infoCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
  },

  infoNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1683F5",
  },

  infoLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 5,
  },

  addButton: {
    height: 54,
    backgroundColor: "#1683F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 50,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
