
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ExercicioTreino = {
  id: number;
  nome: string;
  series: string;
  repeticoes: string;
  peso: string;
};

export type Treino = {
  id: number;
  nome: string;
  aluno: string;
  descricao: string;
  exercicios: ExercicioTreino[];
  criadoEm: string;
};

const CHAVE = "@fittrack:treinos";

export async function listarTreinos(): Promise<Treino[]> {
  try {
    const dados = await AsyncStorage.getItem(CHAVE);

    if (!dados) {
      return [];
    }

    const resultado: unknown = JSON.parse(dados);

    if (!Array.isArray(resultado)) {
      return [];
    }

    return resultado as Treino[];
  } catch (erro) {
    console.error("Erro ao ler treinos:", erro);
    throw erro;
  }
}

export async function salvarTreino(
  dados: Omit<Treino, "id" | "criadoEm">
): Promise<Treino> {
  const treinosAtuais = await listarTreinos();

  const novoTreino: Treino = {
    ...dados,
    id: Date.now(),
    criadoEm: new Date().toISOString(),
  };

  const atualizados = [...treinosAtuais, novoTreino];

  await AsyncStorage.setItem(CHAVE, JSON.stringify(atualizados));

  // Confirma que os dados podem ser lidos depois de salvar.
  const confirmacao = await AsyncStorage.getItem(CHAVE);

  if (!confirmacao) {
    throw new Error("Não foi possível confirmar o salvamento.");
  }

  return novoTreino;
}
