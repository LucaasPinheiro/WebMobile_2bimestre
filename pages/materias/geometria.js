import Layout from '../../components/Layout'
import AppScripts from '../../components/AppScripts'

// Dados das categorias de Geometria
const geometriaItems = [
  { href: "/materias/geo/poligonosregulares", label: "Polígonos regulares" },
  { href: "/materias/geo/retasparalelas", label: "Retas paralelas cortadas por uma transversal" },
  { href: "/materias/geo/simetria", label: "Simetrias e congruências" },
  { href: "/materias/geo/teorematales", label: "Teorema de Tales" },
  { href: "/materias/geo/semelhanca", label: "Semelhança de triângulos" },
  { href: "/materias/geo/retangulos", label: "Triângulos retângulos" },
  { href: "/materias/geo/relacoes", label: "Relações trigonométricas em polígonos" },
  { href: "/materias/geo/circunferencia", label: "Circunferência e círculo" },
  { href: "/materias/geo/areapoligonos", label: "Área de polígonos" },
  { href: "/materias/geo/arearazao", label: "Área e razão entre figuras planas" }
]

export default function Geometria() {
  return (
    <Layout title="Geometria - EducaMat">
      
      {/* Hero Section */}
      <div className="px-4 py-5 text-center">
        <h1 className="display-5 fw-bold">Geometria</h1>
      </div>

      {/* Categorias */}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          
          {/* Cards de Matérias */}
          {geometriaItems.map((item, index) => (
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