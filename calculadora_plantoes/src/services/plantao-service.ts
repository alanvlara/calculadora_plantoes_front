export type Plantao = {
  id: number;
  nome_medico: string;
  data: string;
  hora_inicio: string;
  hora_fim: string;
  custo_total: number | string;
};

export type PlantoesResponse = {
  plantoes: Plantao[];
  total: number;
};


export const getPlantoes = async (inicio: string, fim: string): Promise<PlantoesResponse> => {
  const response = await fetch(
    `http://localhost:8000/plantoes/por-periodo?inicio=${inicio}&fim=${fim}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar plantões");
  }

  return response.json();
};

export const createPlantao = async (plantaoData: any) => {
  const response = await fetch("http://localhost:8000/plantoes/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(plantaoData),
  });
  if (!response.ok) throw new Error("Erro ao criar plantão");
  return response.json();
};
