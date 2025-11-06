import Layout from '../../../components/Layout'
import Link from 'next/link'
import AppScripts from '../../../components/AppScripts'

export default function FuncoesIndex() {
  return (
    <Layout title="Funções - EducaMat">
      
      {/* Hero Section */}
      <div className="px-4 py-5 text-center">
        <h1 className="display-5 fw-bold">Funções</h1>
      </div>

      {/* Categorias */}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          
          {/* Card 1: Conceitos Fundamentais */}
          <div className="col">
            <Link href="/materias/func/ConceitosFundamentais" className="text-decoration-none text-dark">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">Conceitos Fundamentais</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2: Função de 1º grau */}
          <div className="col">
            <Link href="/materias/func/Funcao1grau" className="text-decoration-none text-dark">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">Função de 1º grau</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3: Função de 2º grau */}
          <div className="col">
            <Link href="/materias/func/Funcao2grau" className="text-decoration-none text-dark">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">Função de 2º grau</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 4: Função Exponencial */}
          <div className="col">
            <Link href="/materias/func/FuncaoExponencial" className="text-decoration-none text-dark">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">Função Exponencial</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 5: Equações exponenciais */}
          <div className="col">
            <Link href="/materias/func/EquacoesExponenciais" className="text-decoration-none text-dark">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">Equações exponenciais</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 6: Logarítmos */}
          <div className="col">
            <Link href="/materias/func/Logaritmos" className="text-decoration-none text-dark">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">Logarítmos</h5>
                </div>
              </div>
            </Link>
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