import Layout from '../../../components/Layout'
import AppScripts from '../../../components/AppScripts'

export default function TeoremaTales() {
  return (
    <Layout title="Teorema de Tales - EducaMat">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Teorema de Tales</h1>
        <div className="row justify-content-center mb-5">
          
          {/* Coluna da Esquerda: Materiais */}
          <div className="col-md-6">
            <h3 className="text-center mb-4">Materiais de Consulta</h3>
            <div className="row row-cols-1 g-4">
              
              {/* Card 1 */}
              <div className="col">
                <a 
                  href="https://cursinhoparamedicina.com.br/blog/matematica/saiba-o-que-e-o-teorema-de-tales/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Conceitos e exemplos:</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              <h3 className="text-center">Geogebra - Atividades e exemplos visuais</h3>
              
              {/* Card 2 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/vbu4c7kz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Segmentos Proporcionais</h5>
                      <p className="card-text">Clique para acessar o material</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 3 */}
              <div className="col">
                <a 
                  href="https://www.geogebra.org/m/grzqr7nk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 card-hover">
                    <div className="card-body text-center">
                      <h5 className="card-title">Segmentos Proporcionais</h5>
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
                  href="https://www.youtube.com/watch?v=MQw2524ZZcU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="d-block"
                >
                  <img 
                    src="https://img.youtube.com/vi/MQw2524ZZcU/hqdefault.jpg" 
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