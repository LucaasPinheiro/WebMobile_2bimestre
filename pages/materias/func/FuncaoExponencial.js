import Layout from '../../../components/Layout'
import AppScripts from '../../../components/AppScripts'

export default function FuncaoExponencial() {
  return (
    <Layout title="Funcao Exponencial - EducaMat">
      
      {/* Conteúdo da Matéria */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Função Exponencial</h1>
        <div className="row justify-content-center mb-5">
          
          {/* Coluna da Esquerda: Materiais de Consulta */}
          <div className="col-md-6">
            <h3 className="text-center mb-4">Materiais de Consulta</h3>
            <div className="row row-cols-1 g-4">
              
              {/* Card 1 */}
              <div className="col">
                <a 
                  href="https://matematiques.com.br/ensino-medio/funcoes/funcao-exponencial-conceito-exemplos-e-grafico/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Conceitos</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              <h3 className="text-center mt-4">Geogebra - Atividades e exemplos visuais</h3>
              
              {/* Card 2 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/uuwgpdgh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Função Exponencial</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Coluna da Direita: Vídeo Aulas */}
          <div className="col-md-6 d-flex flex-column align-items-center">
            <h3 className="text-center mb-4">Vídeo aula (Professor Paulo Pereira)</h3>
            
            {/* Vídeo 1 */}
            <div className="mb-4 w-100" style={{ maxWidth: '350px' }}>
              <div className="position-relative">
                <a 
                  href="https://www.youtube.com/watch?v=3lR3guqfbUg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/3lR3guqfbUg/hqdefault.jpg" 
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