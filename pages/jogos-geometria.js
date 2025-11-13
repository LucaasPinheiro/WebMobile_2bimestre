import Layout from '../components/Layout'
import AppScripts from '../components/AppScripts'
import { useState, useEffect } from 'react'

export default function Jogos() {
  const [jogoAtivo, setJogoAtivo] = useState(null)
  const [alturaTela, setAlturaTela] = useState(700)

  useEffect(() => {
    const atualizarAltura = () => setAlturaTela(window.innerHeight * 0.85)
    atualizarAltura()
    window.addEventListener('resize', atualizarAltura)
    return () => window.removeEventListener('resize', atualizarAltura)
  }, [])

  const jogos = [
    {
      id: 'cgjvxzpk',
      titulo: 'Superfícies Quádricas',
      descricao: 'Explore superfícies tridimensionais e suas propriedades.',
    },
    {
      id: 'd5cnrys7',
      titulo: 'Batalha Naval',
      descricao: 'Destrua os navios inimigos e pratique raciocínio espacial!',
    },
    {
      id: 'j6pdn6mp',
      titulo: 'Coluna Distorcida',
      descricao: 'Teste sua percepção visual e lógica!',
    },
    {
      id: 'hksnxfzu',
      titulo: 'Lances Livres',
      descricao: 'Ajuste o ângulo e a velocidade para acertar a cesta.',
    }
  ]

  const jogoSelecionado = jogos.find(j => j.id === jogoAtivo)

  return (
    <Layout title="Jogos Interativos - EducaMat">
      <div className="container-fluid mt-5">
        {!jogoAtivo ? (
          <>
            <h1 className="text-center mb-4">Jogos Interativos</h1>
            <p className="text-center mb-5">Divirta-se aprendendo com jogos e desafios!</p>

            <div className="row justify-content-center">
              {jogos.map(jogo => (
                <div key={jogo.id} className="col-md-5 mb-4">
                  <div
                    className={`card h-100 shadow-sm ${jogoAtivo === jogo.id ? 'border-primary' : ''}`}
                    style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                    onClick={() => setJogoAtivo(jogo.id)}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">{jogo.titulo}</h5>
                      <p className="card-text">{jogo.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <h2>{jogoSelecionado.titulo}</h2>
              <p>{jogoSelecionado.descricao}</p>
              <button
                className="btn btn-outline-primary mt-2 mb-4"
                onClick={() => setJogoAtivo(null)}
              >
                ← Voltar aos jogos
              </button>
            </div>

            {/* Container em tela cheia */}
            <div
              style={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                backgroundColor: '#f8f9fa',
                padding: '1rem 0',
                textAlign: 'center',
              }}
            >
              <iframe
                src={`https://www.geogebra.org/material/iframe/id/${jogoSelecionado.id}/width/1600/height/900/border/888888/smb/false/stb/false`}
                width="95%"
                height={alturaTela}
                allowFullScreen
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </>
        )}
      </div>

      <AppScripts />
    </Layout>
  )
}
