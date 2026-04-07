import { useRef, useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    formRef.current?.reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header / Navbar */}
      <header className="bg-teal-700 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">VitalCare</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#servicos" className="hover:text-teal-200 transition">Servicos</a>
            <a href="#equipe" className="hover:text-teal-200 transition">Equipe</a>
            <a href="#contato" className="hover:text-teal-200 transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&h=500&fit=crop"
          alt="Recepcao da clinica VitalCare"
          className="w-full h-[420px] object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Sua saude em boas maos
          </h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow">
            Cuidado completo para voce e sua familia, com profissionais dedicados e tecnologia de ponta.
          </p>
          <a
            href="#contato"
            className="mt-6 bg-teal-500 hover:bg-teal-400 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg"
          >
            Agende sua consulta
          </a>
        </div>
      </section>

      {/* Servicos */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-2">
          Nossos Servicos
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Oferecemos uma gama completa de servicos para cuidar da sua saude com excelencia.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🩺",
              title: "Atendimento Medico",
              desc: "Consultas com clinicos gerais e especialistas, com atendimento humanizado e acompanhamento continuo do paciente.",
            },
            {
              icon: "🧪",
              title: "Exames Laboratoriais e de Imagem",
              desc: "Coleta de sangue, ultrassonografia, raio-X, ressonancia e demais exames com resultados rapidos e confiaveis.",
            },
            {
              icon: "🥗",
              title: "Aconselhamento Nutricional",
              desc: "Orientacao alimentar personalizada para emagrecimento, ganho de massa, controle de doencas cronicas e qualidade de vida.",
            },
            {
              icon: "⚙️",
              title: "Outros Procedimentos",
              desc: "Vacinacao, curativos, pequenas cirurgias, fisioterapia e outros cuidados para o seu bem-estar.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="text-lg font-semibold mt-4 mb-2 text-teal-700">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Imagens dos servicos */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=700&h=450&fit=crop"
              alt="Laboratorio de exames da clinica"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-teal-700">Laboratorio Moderno</h3>
              <p className="text-sm text-gray-500">Equipamentos de ultima geracao para resultados precisos.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=700&h=450&fit=crop"
              alt="Consultorio medico"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-teal-700">Consultorios Confortaveis</h3>
              <p className="text-sm text-gray-500">Ambientes pensados para o conforto e privacidade do paciente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-2">
          Nossa Equipe
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Profissionais qualificados e apaixonados por cuidar de pessoas.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dra. Camila Ferreira",
              role: "Clinica Geral",
              img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
            },
            {
              name: "Dr. Rafael Mendes",
              role: "Cardiologista",
              img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
            },
            {
              name: "Dra. Juliana Costa",
              role: "Nutricionista",
              img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="text-center bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={m.img}
                alt={`Foto de ${m.name}`}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-teal-200"
              />
              <h3 className="text-lg font-semibold text-gray-800">{m.name}</h3>
              <p className="text-teal-600 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Contato */}
      <section id="contato" className="bg-teal-700 text-white py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Entre em Contato</h2>
          <p className="text-center text-teal-100 mb-10">
            Preencha o formulario abaixo e entraremos em contato com voce.
          </p>

          <form ref={formRef} className="grid gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 border-2 border-teal-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 border-2 border-teal-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-200"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cidade" className="block text-sm font-medium mb-1">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  placeholder="Sua cidade"
                  className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 border-2 border-teal-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-200"
                />
              </div>
              <div>
                <label htmlFor="estado" className="block text-sm font-medium mb-1">Estado</label>
                <select
                  id="estado"
                  className="w-full rounded-lg px-4 py-3 bg-white text-gray-900 border-2 border-teal-300 outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-200"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map(
                    (uf) => <option key={uf} value={uf}>{uf}</option>
                  )}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 bg-white text-teal-700 font-semibold py-3 rounded-lg hover:bg-teal-50 transition shadow"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in z-50">
          Formulario enviado com sucesso!
        </div>
      )}

      {/* Footer */}
      <footer className="bg-teal-900 text-teal-200 text-center py-6 text-sm">
        <p>&copy; 2026 VitalCare. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
