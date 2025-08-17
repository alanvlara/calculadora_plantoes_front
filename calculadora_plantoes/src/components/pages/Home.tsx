function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-4 text-center">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
        Olá, Dra. Lia❤️
      </h1>

      {/* Subtítulo explicativo */}
      <p className="text-lg md:text-xl text-pink-800 mb-8 max-w-xl">
        Criei esta <span className="font-semibold">Calculadora de Plantões </span>
        especialmente para você, para facilitar o cálculo das horas trabalhadas, valores e categorias de plantões.
        É minha forma de agradecer todo o seu carinho e dedicação!
      </p>

      {/* Ícone ou imagem fofo */}
      <img
        src="/src/assets/img/img-fofa-coelho.png"
        alt="Fofura"
        className="w-64 md:w-80 rounded-xl shadow-lg mb-8"
      />

      {/* Botões de navegação */}
      <div className="flex space-x-4">
        <a href="/plantoes" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition">
          Ver Plantões
        </a>
        <a href="/perfil" className="px-6 py-3 bg-pink-200 text-pink-800 font-semibold rounded-lg shadow hover:bg-pink-300 transition">
          Meu Perfil
        </a>
      </div>
    </div>
  )
}

export default Home
