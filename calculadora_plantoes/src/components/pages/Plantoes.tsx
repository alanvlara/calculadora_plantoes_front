import { useState } from "react";
import { createPlantao } from "../../services/plantao-service";

function Plantoes() {
  // Estados para cada campo do formulário
  const [data, setData] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const [nomeMedico, setNomeMedico] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      data,
      hora_inicio: horaInicio,
      hora_fim: horaFim,
      nome_medico: nomeMedico,
    };

    console.log("Dados do plantão:", formData);
     try {
      await createPlantao({ data, hora_inicio: horaInicio, hora_fim: horaFim, nome_medico: nomeMedico });
      alert("Plantão salvo! 👩‍⚕️");
      setData(""); setHoraInicio(""); setHoraFim(""); setNomeMedico(""); // limpa o form
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar plantão.");
    }
  }
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center px-4 pt-8">
    <form
      onSubmit={handleSubmit}
      className="bg-pink-50 p-6 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md"
    >
      <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">
        Registrar Novo Plantão
      </h1>

      <label className="flex items-center gap-4 text-pink-700 font-semibold">
        <span className="w-32 text-left">Data:</span>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </label>

      <label className="flex items-center gap-4 text-pink-700 font-semibold">
        <span className="w-32 text-left">Hora Início:</span>
        <input
          type="time"
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </label>

      <label className="flex items-center gap-4 text-pink-700 font-semibold">
        <span className="w-32 text-left">Hora Fim:</span>
        <input
          type="time"
          value={horaFim}
          onChange={(e) => setHoraFim(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </label>

      <label className="flex items-center gap-4 text-pink-700 font-semibold">
        <span className="w-50 text-left">Nome do Médico:</span>
        <input
          type="text"
          placeholder="Ex: Liamara Correa"
          value={nomeMedico}
          onChange={(e) => setNomeMedico(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-4 bg-pink-500 text-white font-bold py-2 rounded-lg shadow hover:bg-pink-600 transition"
      >
        Salvar Plantão
      </button>
    </form>
  </div>
  )
}

export default Plantoes
