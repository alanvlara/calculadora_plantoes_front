import { useEffect, useState } from "react";
import { getPlantoes } from "../../services/plantao-service";

function HistoricoPlantoes() {
    const [inicio, setInicio] = useState("");
    const [fim, setFim] = useState("");
    const [plantoes, setPlantoes] = useState<any[]>([]);
    const [medicos, setMedicos] = useState<string[]>([]);
    const [medicoFiltro, setMedicoFiltro] = useState<string>("");
    const plantoesFiltrados = plantoes.filter(
        (p) => !medicoFiltro || p.nome_medico === medicoFiltro
    );
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 10;

    const indexUltimoItem = paginaAtual * itensPorPagina;
    const indexPrimeiroItem = indexUltimoItem - itensPorPagina;
    const plantoesPaginaAtual = plantoesFiltrados.slice(indexPrimeiroItem, indexUltimoItem);

    const totalPaginas = Math.ceil(plantoesFiltrados.length / itensPorPagina);

    const handleBuscar = async () => {
        try {
            const res = await getPlantoes(inicio, fim);
            setPlantoes(res.plantoes);
            const nomesUnicos = Array.from(new Set(res.plantoes.map((p) => p.nome_medico)));
            setMedicos(nomesUnicos);
            setPaginaAtual(1); // resetar para a primeira página
        } catch (err) {
            console.error(err);
            alert("Erro ao buscar plantões");
        }
    };


    useEffect(() => {
        setPaginaAtual(1);
    }, [medicoFiltro]);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col  px-4 pt-8">
        <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          Histórico de Plantões
        </h1>

        <div className="flex gap-4 mb-4">
            <label className="flex gap-4 items-center text-pink-700 font-semibold">
                <span className="text-left">Início:</span>
                <input
                type="date"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
            </label>
            <label className="flex gap-4 items-center text-pink-700 font-semibold">
                <span className="text-left">Fim:</span>
                <input
                    type="date"
                    value={fim}
                    onChange={(e) => setFim(e.target.value)}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
            </label>
            <button
                onClick={handleBuscar}
                className="self-end bg-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
            >
                Buscar
            </button>
        </div>

        <div className="flex items-center gap-6 mb-4">
            {/* Total de plantões */}
            {plantoesFiltrados.length > 0 && (
                <div className="text-lg font-bold text-pink-700">
                    Total de Plantões: {plantoesFiltrados.length}
                </div>
            )}

            {/* Valor total */}
            {plantoesFiltrados.length > 0 && (
                <div className="text-lg font-bold text-pink-700">
                    Valor Total: R$ {plantoesFiltrados
                    .reduce((acc, p) => acc + Number(p.custo_total), 0)
                    .toFixed(2)}
                </div>
            )}

            {/* Filtro por médico */}
            {plantoesFiltrados.length > 0 && (
            <div>
                <label className="text-lg text-pink-700 font-bold flex items-center gap-2">
                    Filtrar por médico:
                    <select
                        value={medicoFiltro}
                        onChange={(e) => setMedicoFiltro(e.target.value)}
                        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                        <option value="">Todos</option>
                        {medicos.map((nome) => (
                        <option key={nome} value={nome}>
                            {nome}
                        </option>
                        ))}
                    </select>
                </label>
            </div>
            )}
        </div>

        <div className="flex items-center gap-6 mb-4">
            {/* Valor total */}
            {plantoesFiltrados.length > 0 && (
                <div className="text-lg font-bold text-pink-700">
                    Total Horas Item 1: {plantoesFiltrados
                    .reduce((acc, p) => acc + Number(p.horas_item_1), 0)
                    .toFixed(2)}
                </div>
            )}

            {/* Valor total */}
            {plantoesFiltrados.length > 0 && (
                <div className="text-lg font-bold text-pink-700">
                    Total Horas Item 2: {plantoesFiltrados
                    .reduce((acc, p) => acc + Number(p.horas_item_2), 0)
                    .toFixed(2)}
                </div>
            )}

            {/* Valor total */}
            {plantoesFiltrados.length > 0 && (
                <div className="text-lg font-bold text-pink-700">
                    Total Horas Item 3: {plantoesFiltrados
                    .reduce((acc, p) => acc + Number(p.horas_item_3), 0)
                    .toFixed(2)}
                </div>
            )}

            {/* Valor total */}
            {plantoesFiltrados.length > 0 && (
                <div className="text-lg font-bold text-pink-700">
                    Total Horas Item 4: {plantoesFiltrados
                    .reduce((acc, p) => acc + Number(p.horas_item_4), 0)
                    .toFixed(2)}
                </div>
            )}
        </div>

        <ul className="space-y-2">
            {plantoesPaginaAtual.map((p) => {
                const dataBr = p.data.split("-").reverse().join("/");
                const horaInicio = p.hora_inicio.slice(0, 5);
                const horaFim = p.hora_fim.slice(0, 5);

                return (
                <li key={p.id} className="bg-white p-3 rounded-lg shadow flex justify-between">
                    <div className="font-semibold text-pink-700">{p.nome_medico}</div>
                    <div className="flex gap-4 text-sm text-gray-600">
                        <div>{dataBr}</div>
                        <div>{horaInicio} - {horaFim}</div>
                    </div>
                    <div className="font-semibold text-pink-700">Horas item 1: {p.horas_item_1}</div>
                    <div className="font-semibold text-pink-700">Horas item 2: {p.horas_item_2}</div>
                    <div className="font-semibold text-pink-700">Horas item 3: {p.horas_item_3}</div>
                    <div className="font-semibold text-pink-700">Horas item 4: {p.horas_item_4}</div>
                    <div className="font-bold text-pink-600">R$ {p.custo_total}</div>
                </li>
                );
            })}
        </ul>

        {plantoesFiltrados.length > 0 && (
            <div className="flex justify-center gap-4 mt-4">
                <button
                    disabled={paginaAtual === 1}
                    onClick={() => setPaginaAtual(paginaAtual - 1)}
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg disabled:opacity-50 hover:bg-pink-600 transition"
                >
                    Anterior
                </button>

                <span className="flex items-center text-pink-700 font-semibold">
                    Página {paginaAtual} de {totalPaginas}
                </span>

                <button
                    disabled={paginaAtual === totalPaginas}
                    onClick={() => setPaginaAtual(paginaAtual + 1)}
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg disabled:opacity-50 hover:bg-pink-600 transition"
                >
                    Próxima
                </button>
            </div>
        )}
    </div>
  );
}

export default HistoricoPlantoes;
