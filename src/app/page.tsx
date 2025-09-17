"use client"

import { useEffect, useState } from 'react'

export default function SalesPage() {
  const [currentDate, setCurrentDate] = useState('')
  const [mounted, setMounted] = useState(false)
  
  // Lista de nomes e cidades para notificações
  const notifications = [
    { name: "Maria", city: "SP" },
    { name: "João", city: "RJ" },
    { name: "Ana", city: "BA" },
    { name: "Carlos", city: "MG" },
    { name: "Juliana", city: "RS" },
    { name: "Pedro", city: "PR" },
    { name: "Camila", city: "SC" },
    { name: "Rafael", city: "GO" },
    { name: "Beatriz", city: "PE" },
    { name: "Lucas", city: "CE" }
  ]

  useEffect(() => {
    setMounted(true)
    
    // Definir data atual
    const today = new Date()
    const formattedDate = today.toLocaleDateString('pt-BR')
    setCurrentDate(formattedDate)

    // Sistema de notificações - só executa após hidratação
    if (typeof window !== 'undefined') {
      let notificationIndex = 0
      
      const showNotification = () => {
        const notification = notifications[notificationIndex]
        const notificationEl = document.createElement('div')
        notificationEl.className = 'fixed bottom-4 left-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm animate-slide-in'
        notificationEl.innerHTML = `
          <div class="flex items-center space-x-2">
            <span class="text-yellow-300">⚡</span>
            <span class="text-sm font-medium">${notification.name} de ${notification.city} acabou de adquirir a Fórmula Redação Nota 1000.</span>
          </div>
        `
        
        document.body.appendChild(notificationEl)
        
        // Remover após 3 segundos
        setTimeout(() => {
          if (notificationEl.parentNode) {
            notificationEl.remove()
          }
        }, 3000)
        
        notificationIndex = (notificationIndex + 1) % notifications.length
      }

      // Mostrar primeira notificação após 2 segundos
      const firstTimeout = setTimeout(showNotification, 2000)
      
      // Repetir a cada 15 segundos
      const interval = setInterval(showNotification, 15000)
      
      return () => {
        clearTimeout(firstTimeout)
        clearInterval(interval)
      }
    }
  }, [])

  const scrollToOffer = () => {
    if (typeof window !== 'undefined') {
      const offerSection = document.getElementById('offer-section')
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Evita problemas de hidratação
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-6xl mx-auto">
            O atalho pouco conhecido que fez alunos comuns saltarem de 580 para 900+ na redação do ENEM em apenas 7 dias – sem precisar estudar o ano inteiro.
          </h1>
          
          <button 
            onClick={scrollToOffer}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Quero minha redação 900+ agora
          </button>
        </div>
      </section>

      {/* Lead Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center text-lg md:text-xl leading-relaxed text-gray-700 space-y-6">
            <p>
              Você sabia que a redação vale 20% da sua nota no ENEM e que mais de 70% dos candidatos não chegam nem a 700 pontos?
            </p>
            <p>
              É isso mesmo: a maioria perde a vaga não por matemática, não por ciências, mas porque trava diante da folha em branco.
            </p>
            <p className="font-semibold text-gray-900">
              E talvez esse seja exatamente o seu medo: chegar no dia da prova, olhar para o tema e não saber por onde começar.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={scrollToOffer}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Garantir acesso por apenas R$37
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Você já passou por isso?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>✗ Tentou escrever uma redação e travou logo na introdução.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>✗ Olhou modelos prontos na internet, mas nada fazia sentido.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>✗ Pensou: "Eu nunca vou conseguir chegar a 900 pontos."</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <h3 className="font-bold text-xl mb-4 text-red-800">Agora imagine o dia da prova:</h3>
            <p className="text-lg text-red-700 leading-relaxed">
              Você entra na sala, respira fundo… o relógio começa a correr.<br/>
              Enquanto uns deslizam a caneta no papel, você continua olhando para o nada, perdido, sem ideia.
            </p>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={scrollToOffer}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Pegar minha fórmula antes que acabe
            </button>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-12 md:py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Se nada mudar, o que acontece?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl">
            <p>
              Você pode tirar 600 pontos ou menos, o que praticamente elimina suas chances de entrar na faculdade dos sonhos.
            </p>
            <p>
              Vai ver colegas que se prepararam menos, mas usaram a estratégia certa, passarem na sua frente.
            </p>
            <p>
              Vai se arrepender por não ter feito algo simples e acessível enquanto ainda dava tempo.
            </p>
            <p className="font-bold text-xl bg-red-800 p-4 rounded-lg text-center">
              É o efeito dominó: um erro na redação → menos pontos → menos opções de curso → menos oportunidades na vida.
            </p>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={scrollToOffer}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Quero minha redação 900+ agora
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            E se eu te dissesse que existe uma fórmula comprovada, testada por milhares de alunos, que pode te levar de 600 para 900+ em apenas 7 dias?
          </h2>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Apresento a Fórmula Redação Nota 1000
            </h3>
            <p className="text-xl text-gray-700">
              – um método simples, direto e sem enrolação.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h4 className="text-2xl font-bold mb-6 text-center text-blue-800">O mecanismo único:</h4>
            <div className="space-y-4 text-lg">
              <div className="flex items-center space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Estruturas prontas de redações nota 1000 → basta copiar e adaptar.</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Lista de temas prováveis para 2025 → você já chega preparado.</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Agente exclusivo no ChatGPT → tira suas dúvidas 24h.</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
            <h4 className="font-bold text-xl mb-2 text-yellow-800">Por que funciona?</h4>
            <p className="text-lg text-yellow-700">
              Porque não depende de você ser gênio.<br/>
              Depende só de você seguir um passo a passo que já provou funcionar.
            </p>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffer}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Garantir acesso por apenas R$37
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Com a Fórmula Redação Nota 1000 você vai:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg">Escrever redações completas em menos de 1h → sem travar na introdução.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg">Ganhar confiança instantânea → sabendo exatamente o que escrever em cada parágrafo.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg">Estar pronto para qualquer tema → sem precisar decorar apostilas gigantes.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg">Tirar 900+ pontos → aumentando suas chances de aprovação.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg">Reduzir o estresse pré-prova → porque você terá um plano pronto.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg">Ter suporte constante → com nosso agente no ChatGPT.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <div className="flex items-start space-x-3 justify-center">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-lg font-bold text-center">Investir menos do que gasta em uma pizza → apenas R$37.</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffer}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Pegar minha fórmula antes que acabe
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.847</div>
                <div className="text-lg">alunos já aplicaram a fórmula</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                <div className="text-lg">relatam aumento de 200+ pontos</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">920</div>
                <div className="text-lg">pontos - nota média relatada</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-lg italic mb-2">"Passei de 580 para 920. Nunca pensei que fosse possível."</p>
              <p className="font-semibold text-gray-700">– Maria, 18 anos</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg italic mb-2">"Achei que era golpe, mas funcionou. Valeu cada centavo."</p>
              <p className="font-semibold text-gray-700">– Lucas, 17 anos</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-lg italic mb-2">"Agora sim vou entrar na faculdade que eu quero."</p>
              <p className="font-semibold text-gray-700">– Ana, 19 anos</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src="https://i.imgur.com/aOrEbLT.png" alt="Depoimento 1" className="w-full h-auto rounded" />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src="https://i.imgur.com/4DhY4ke.png" alt="Depoimento 2" className="w-full h-auto rounded" />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src="https://i.imgur.com/o8V06QQ.png" alt="Depoimento 3" className="w-full h-auto rounded" />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src="https://i.imgur.com/eyv8KD6.png" alt="Depoimento 4" className="w-full h-auto rounded" />
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffer}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Quero minha redação 900+ agora
            </button>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            O que você vai receber:
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-xl mb-3 text-blue-600">📚 Fórmula Redação Nota 1000 (Produto Principal)</h3>
              <p className="text-lg text-gray-700">O método completo com estruturas prontas de redações nota 1000. Basta copiar, adaptar e aplicar em qualquer tema do ENEM.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-xl mb-3 text-green-600">🎁 Bônus 1: Estruturas Prontas</h3>
              <p className="text-lg text-gray-700">Modelos de redações que tiraram 1000 pontos no ENEM. Você só precisa copiar e colar, adaptando para o tema da sua prova.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="font-bold text-xl mb-3 text-yellow-600">🎁 Bônus 2: Temas Prováveis 2025</h3>
              <p className="text-lg text-gray-700">Lista exclusiva com os temas mais prováveis de cair no ENEM 2025, baseada em análise de tendências e acontecimentos atuais.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="font-bold text-xl mb-3 text-purple-600">🎁 Bônus 3: Agente ChatGPT Exclusivo</h3>
              <p className="text-lg text-gray-700">Acesso ao nosso agente especializado no ChatGPT para tirar dúvidas sobre redação 24 horas por dia, 7 dias por semana.</p>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Valor Total: R$497</h3>
            <p className="text-xl text-green-600 font-semibold">Hoje por apenas R$37</p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer-section" className="py-12 md:py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quanto vale conquistar a vaga dos seus sonhos?
          </h2>
          
          <p className="text-xl mb-6">
            Cursos de redação custam R$497, R$997 ou até mais.
          </p>

          <div className="bg-white text-gray-900 p-8 rounded-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Mas hoje, você pode ter acesso a tudo isso por apenas:</h3>
            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-6">R$37</div>
            <p className="text-xl font-semibold">à vista</p>
          </div>

          <div className="mb-6">
            <a 
              href="https://www.ggcheckout.com/checkout/v2/8DlHllVLRNIPxnQpnnE6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              GARANTIR ACESSO AGORA
            </a>
          </div>

          <div className="mb-8">
            <p className="text-lg font-semibold">
              ⚡ Oferta válida até hoje {currentDate} às 23:59
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-6">E ainda recebe os bônus:</h4>
            <div className="space-y-4 text-lg">
              <div className="bg-green-500 p-4 rounded-lg">
                <strong>Bônus 1:</strong> Estruturas de redações nota 1000 → só copiar e colar.
              </div>
              <div className="bg-green-500 p-4 rounded-lg">
                <strong>Bônus 2:</strong> Lista de temas prováveis para o ENEM 2025.
              </div>
              <div className="bg-green-500 p-4 rounded-lg">
                <strong>Bônus 3:</strong> Agente no ChatGPT → suporte 24h.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 md:py-16 bg-yellow-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <img 
              src="https://ederprado.com/wp-content/uploads/2021/10/Selo-de-Garantia-de-30-Dias-PNG-Transparente-Sem-Fundo.png" 
              alt="Garantia de 30 dias" 
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Garantia Incondicional de 30 Dias
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Você tem <strong>30 dias completos</strong> para testar a Fórmula Redação Nota 1000. Se por qualquer motivo você não ficar satisfeito com os resultados, nós devolvemos <strong>100% do seu dinheiro</strong>.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-xl mb-3 text-green-700">Nossa promessa para você:</h3>
              <ul className="text-left text-lg text-gray-700 space-y-2">
                <li>✓ Sem perguntas difíceis</li>
                <li>✓ Sem burocracia</li>
                <li>✓ Devolução em até 7 dias úteis</li>
                <li>✓ Você pode ficar com o material mesmo assim</li>
              </ul>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 font-semibold">
            O risco é todo nosso. Você só tem a ganhar.
          </p>
        </div>
      </section>

      {/* Objections Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Mas e se você está pensando...
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-red-600">"Não tenho tempo."</h3>
              <p className="text-lg text-gray-700">→ O método foi criado para ser aplicado em menos de 7 dias.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-red-600">"Já tentei outras coisas."</h3>
              <p className="text-lg text-gray-700">→ Nada como isso, porque aqui você recebe estruturas prontas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-red-600">"É muito caro."</h3>
              <p className="text-lg text-gray-700">→ São só R$37, menos que uma pizza.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-red-600">"E se não funcionar pra mim?"</h3>
              <p className="text-lg text-gray-700">→ Você tem 30 dias de garantia incondicional.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={scrollToOffer}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Pegar minha fórmula antes que acabe
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Última chance de garantir sua vaga!
          </h2>
          
          <div className="mb-8">
            <button 
              onClick={scrollToOffer}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Quero minha redação 900+ agora
            </button>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              <strong>P.S. 1:</strong> Você não tem nada a perder. Se não funcionar, devolvemos seu dinheiro em até 30 dias.
            </p>
            <p>
              <strong>P.S. 2:</strong> A cada dia que passa, sua chance de treinar antes do ENEM diminui. Aproveite hoje.
            </p>
            <p>
              <strong>P.S. 3:</strong> Imagine abrir o resultado do ENEM e ver 900+ na redação. Essa pode ser sua realidade daqui a poucas semanas.
            </p>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={scrollToOffer}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              GARANTIR MINHA VAGA AGORA
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-gray-900">Como funciona a Fórmula Redação Nota 1000?</h3>
              <p className="text-lg text-gray-700">É um método simples com estruturas prontas de redações nota 1000. Você recebe modelos testados e aprovados que pode adaptar para qualquer tema do ENEM.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-gray-900">Quanto tempo preciso para aplicar o método?</h3>
              <p className="text-lg text-gray-700">O método foi desenvolvido para ser aplicado em apenas 7 dias. Com dedicação de 1-2 horas por dia, você já estará preparado para tirar 900+ pontos na redação.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-gray-900">E se eu não conseguir aplicar o método?</h3>
              <p className="text-lg text-gray-700">Você tem 30 dias de garantia incondicional. Se não funcionar para você, devolvemos 100% do seu dinheiro, sem perguntas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-gray-900">O que está incluído nos bônus?</h3>
              <p className="text-lg text-gray-700">Você recebe estruturas prontas para copiar e colar, lista de temas prováveis para 2025 e acesso ao nosso agente exclusivo no ChatGPT para tirar dúvidas 24h.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-gray-900">Funciona mesmo para quem nunca tirou nota boa em redação?</h3>
              <p className="text-lg text-gray-700">Sim! O método foi criado especialmente para quem tem dificuldades. Mais de 87% dos nossos alunos relatam aumento de 200+ pontos na redação.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-gray-900">Como recebo o material após a compra?</h3>
              <p className="text-lg text-gray-700">Imediatamente após a confirmação do pagamento, você recebe por email o acesso completo ao material e aos bônus.</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://wa.me/5519999737218"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ainda tem dúvidas? Nos chame no Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Fórmula Redação Nota 1000</h3>
            <p className="text-lg text-gray-300 mb-6">
              O método que já transformou a vida de mais de 2.847 estudantes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Garantia Total</h4>
              <p className="text-gray-300">30 dias para testar sem riscos. Não funcionou? Devolvemos seu dinheiro.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Suporte 24h</h4>
              <p className="text-gray-300">Agente exclusivo no ChatGPT para tirar todas as suas dúvidas.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Resultados Comprovados</h4>
              <p className="text-gray-300">87% dos alunos aumentam 200+ pontos na redação.</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Fórmula Redação Nota 1000. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}