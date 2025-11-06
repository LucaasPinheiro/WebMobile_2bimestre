import Layout from '../../components/Layout'
import AppScripts from '../../components/AppScripts'

export default function Equacoes() {
  return (
    <Layout title="Equações e Inequações - EducaMat">
      
      {/* Conteúdo da Matéria */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Equações e Inequações</h1>
        <div className="row justify-content-center mb-5">
          
          {/* Coluna da Esquerda: Materiais */}
          <div className="col-md-6">
            <h3 className="text-center mb-4">Materiais de Consulta</h3>
            <div className="row row-cols-1 g-4">
              
              {/* Card 1 */}
              <div className="col">
                <a 
                  href="https://matematiques.com.br/ensino-medio/equacoes/equacao-de-primeiro-grau/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Equação do 1º grau - Conceito, Exemplos e Exercícios</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 2 */}
              <div className="col">
                <a 
                  href="https://matematiques.com.br/ensino-medio/equacoes/equacao-de-2o-grau-guia-completo-com-exemplos-e-exercicios-resolvidos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Equação do 2º grau - Conceito, Exemplos e Exercícios</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 3 */}
              <div className="col">
                <a 
                  href="https://matematiques.com.br/ensino-medio/inequacoes/inequacao-tipos-e-aplicacoes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Inequação: Tipos e aplicações</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              <h3 className="text-center mt-4">Geogebra - Atividades e exemplos visuais</h3>
              
              {/* Card 4 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/jdwbyzhp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Equação 1º grau</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 5 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/xgy44pby" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Equação 2º grau</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 6 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/qkeerup2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Inequação 1º grau</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 7 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/qpzgnddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Inequação 2º grau</h5>
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
                  href="https://www.youtube.com/watch?v=Tu08PYjt-2Q" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/Tu08PYjt-2Q/hqdefault.jpg" 
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
                  href="https://www.youtube.com/watch?v=toAaUBwitFE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/toAaUBwitFE/hqdefault.jpg" 
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

            {/* Vídeo 3 */}
            <div className="w-100 mt-4" style={{ maxWidth: '350px' }}>
              <div className="position-relative">
                <a 
                  href="https://www.youtube.com/watch?v=qYQllsg8ka8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/qYQllsg8ka8/hqdefault.jpg" 
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

            {/* Vídeo 4 */}
            <div className="w-100 mt-4" style={{ maxWidth: '350px' }}>
              <div className="position-relative">
                <a 
                  href="https://www.youtube.com/playlist?list=PLFmAdtvd3O_zf4DxyqzUOGAiXYRk2okBI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/LsX-0I5w9UE/hqdefault.jpg" 
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