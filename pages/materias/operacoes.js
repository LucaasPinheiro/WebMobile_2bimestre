import Layout from '../../components/Layout'
import AppScripts from '../../components/AppScripts'

export default function Operacoes() {
  return (
    <Layout title="Operações - EducaMat">
      
      {/* Conteúdo da Matéria */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Operações</h1>
        <div className="row justify-content-center mb-5">
          
          {/* Coluna da Esquerda: Materiais de Consulta */}
          <div className="col-md-6">
            <h3 className="text-center mb-4">Materiais de Consulta</h3>
            <div className="row row-cols-1 g-4">
              
              {/* Card 1 */}
              <div className="col">
                <a 
                  href="https://matematiques.com.br/ensino-fundamental/potenciacao/potenciacao-conceito-propriedades-e-exercicios/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Potenciação e suas propriedades</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 2 */}
              <div className="col">
                <a 
                  href="https://pt.khanacademy.org/math/arithmetic/x18ca194a:exponents-and-powers-of-ten/x18ca194a:intro-to-exponents/v/introduction-to-exponents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Introdução à potenciação</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 3 */}
              <div className="col">
                <a 
                  href="https://matematiques.com.br/ensino-fundamental/radiciacao/radiciacao-conceito-propriedades-e-operacoes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Radiciação e suas propriedades</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              <h3 className="text-center mt-4">Geogebra - Atividades e exemplos visuais</h3>
              
              {/* Card 4 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/mncf99hg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Potenciação de números naturais</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 5 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/gmj4zevn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Expoente Fracionário e Radiciação</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 6 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/p5v9xqkb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Multiplicação e Divisão de potências com bases iguais</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Coluna da Direita: Vídeo Aulas */}
          <div className="col-md-6 d-flex flex-column align-items-center">
            <h3 className="text-center mb-4">Vídeo aula (Professor Ferretto)</h3>
            
            {/* Vídeo 1 */}
            <div className="mb-4 w-100" style={{ maxWidth: '350px' }}>
              <div className="position-relative">
                <a 
                  href="https://www.youtube.com/watch?v=4Vfw1XiHTpM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/4Vfw1XiHTpM/hqdefault.jpg" 
                    className="img-fluid rounded shadow w-100" 
                    alt="Vídeo no YouTube" 
                  />
                  <span style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '64px',
                    color: 'white',
                    textShadow: '0 0 10px rgba(0,0,0,0.7)',
                    pointerEvents: 'none',
                  }}>
                    ▶
                  </span>
                </a>
              </div>
            </div>

            {/* Vídeo 2 */}
            <div className="w-100" style={{ maxWidth: '350px' }}>
              <div className="position-relative">
                <a 
                  href="https://www.youtube.com/watch?v=QmIjZgKhAEo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/QmIjZgKhAEo/hqdefault.jpg" 
                    className="img-fluid rounded shadow w-100" 
                    alt="Vídeo no YouTube" 
                  />
                  <span style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '64px',
                    color: 'white',
                    textShadow: '0 0 10px rgba(0,0,0,0.7)',
                    pointerEvents: 'none',
                  }}>
                    ▶
                  </span>
                </a>
              </div>
            </div>

          </div>
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