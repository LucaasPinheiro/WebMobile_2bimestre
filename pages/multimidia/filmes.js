import Layout from '../../components/Layout'
import AppScripts from '../../components/AppScripts'

export default function Filmes() {
  return (
    <Layout title="Filmes e Documentários - EducaMat">
      
      {/* Conteúdo da página */}
      <div className="container mt-5 pt-5">
        <h1 className="text-center mb-4">Filmes e Documentários</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
          {/* Card 1 */}
          <div className="col">
            <div className="card h-100">
              <img src="/images/jogodaimitacao.jpg" className="card-img-top" alt="Poster do Filme 1" style={{ height: '650px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">O Jogo da Imitação</h5>
                <p className="card-text">Durante a Segunda Guerra Mundial, o governo britânico monta uma equipe que tem por objetivo quebrar o Enigma, o famoso código que os alemães usam para enviar mensagens aos submarinos. Um de seus integrantes é Alan Turing (Benedict Cumberbatch), um matemático de 27 anos estritamente lógico e focado no trabalho, que tem problemas de relacionamento com praticamente todos à sua volta. Não demora muito para que Turing, apesar de sua intransigência, lidere a equipe. Seu grande projeto é construir uma máquina que permita analisar todas as possibilidades de codificação do Enigma em apenas 18 horas, de forma que os ingleses conheçam as ordens enviadas antes que elas sejam executadas. Entretanto, para que o projeto dê certo, Turing terá que aprender a trabalhar em equipe e tem Joan Clarke (Keira Knightley) sua grande incentivadora.</p>
                <p className="card-text"><strong>Onde assistir:</strong> Max; Prime Video</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card h-100">
              <img src="/images/umamentebrilhante.jpg" className="card-img-top" alt="Poster do Filme 2" style={{ height: '650px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Uma Mente Brilhante</h5>
                <p className="card-text">John Nash (Russell Crowe) é um gênio da matemática que, aos 21 anos, formulou um teorema que provou sua genialidade e o tornou aclamado no meio onde atuava. Mas aos poucos o belo e arrogante Nash se transforma em um sofrido e atormentado homem, que chega até mesmo a ser diagnosticado como esquizofrênico pelos médicos que o tratam. Porém, após anos de luta para se recuperar, ele consegue retornar à sociedade e acaba sendo premiado com o Nobel.</p>
                <p className="card-text"><strong>Onde assistir:</strong> Prime Video</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card h-100">
              <img src="/images/ohomemqueviuoinfinito.jpg" className="card-img-top" alt="Poster do Filme 3" style={{ height: '650px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">O Homem que Viu o Infinito</h5>
                <p className="card-text">Uma verdadeira história de amizade que mudou a matemática para sempre. Em 1913, Ramanujan, um gênio da matemática autodidata da Índia viaja para a o Colégio Trinity, na Universidade de Cambridge, onde ele se aproxima do seu mentor, o excêntrico professor GH Hardy, e luta para mostrar ao mundo a brilhantia de sua mente.</p>
                <p className="card-text"><strong>Onde assistir:</strong> Prime Video</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card h-100">
              <img src="/images/estrelasalemdotempo.jpg" className="card-img-top" alt="Poster do Filme 4" style={{ height: '650px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Estrelas Além do Tempo</h5>
                <p className="card-text">1961. Em plena Guerra Fria, Estados Unidos e União Soviética disputam a supremacia na corrida espacial ao mesmo tempo em que a sociedade norte-americana lida com uma profunda cisão racial, entre brancos e negros. Tal situação é refletida também na NASA, onde um grupo de funcionárias negras é obrigada a trabalhar a parte. É lá que estão Katherine Johnson (Taraji P. Henson), Dorothy Vaughn (Octavia Spencer) e Mary Jackson (Janelle Monáe), grandes amigas que, além de provar sua competência dia após dia, precisam lidar com o preconceito arraigado para que consigam ascender na hierarquia da NASA.</p>
                <p className="card-text"><strong>Onde assistir:</strong> Disney+</p>
              </div>
            </div>
          </div>

          {/* Adicione os outros cards seguindo o mesmo padrão... */}

        </div>
      </div>

      <AppScripts />

      <footer className="bg-light text-center text-muted py-4 border-top mt-5">
        <div className="container">
          <p className="mb-0 px-3" style={{ fontSize: '14px' }}>
            Este repositório foi criado a partir da curadoria de materiais disponíveis gratuitamente na internet, sendo que os direitos autorais pertencem a cada um dos materiais encontrados. <br />
          </p>
        </div>
      </footer>
    </Layout>
  )
}