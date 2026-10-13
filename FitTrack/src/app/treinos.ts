
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

let treinos: Treino[] = [];
let proximoId = 1;

export function listarTreinos(): Treino[] {
  return treinos;
}

export function salvarTreino(
  treino: Omit<Treino, "id" | "criadoEm">
): Treino {
  const novoTreino: Treino = {
    ...treino,
    id: proximoId++,
    criadoEm: new Date().toISOString(),
  };

  treinos = [...treinos, novoTreino];

  return novoTreino;
}

export function limparTreinos(): void {
  treinos = [];
  proximoId = 1;
}
