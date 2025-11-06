import Layout from '../../components/Layout'
import AppScripts from '../../components/AppScripts'

// Dados das categorias de Multimídia
const multimidiaItems = [
  { href: "/midia/filmes", label: "Filmes e Documentarios" },
  { href: "/midia/plataformas", label: "Plataformas" }
  // Jogos está comentado no HTML original
  // { href: "/midia/jogos", label: "Jogos" }
]

export default function Multimidia() {
  return (
    <Layout title="Multimidia - EducaMat">
      
      {/* Hero Section */}
      <div className="px-4 py-5 text-center">
        <h1 className="display-5 fw-bold">Multimidia</h1>
      </div>

      {/* Categorias */}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          
          {/* Cards de Matérias */}
          {multimidiaItems.map((item, index) => (
            <div key={index} className="col">
              <a href={item.href} className="text-decoration-none text-dark">
                <div className="card h-100 card-hover">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.label}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}

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