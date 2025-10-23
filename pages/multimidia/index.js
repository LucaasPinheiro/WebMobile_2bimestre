import Layout from '../../components/Layout'
import Link from 'next/link'
import AppScripts from '../../components/AppScripts'

export default function Multimidia() {
  return (
    <Layout title="Multimídia - EducaMat">
      
      {/* Conteúdo principal */}
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center mb-4">Multimídia</h1>
            
            <div className="mb-5">
              <h2 className="mb-3">Filmes e Documentários</h2>
              <p className="mb-3">
                Explore nossa coleção de filmes e documentários relacionados à matemática. 
                Histórias inspiradoras, biografias de grandes matemáticos e documentários educativos.
              </p>
              <Link href="/multimidia/filmes" className="btn btn-primary">
                Ver Filmes e Documentários
              </Link>
            </div>

            <div className="mb-5">
              <h2 className="mb-3">Plataformas</h2>
              <p className="mb-3">
                Descubra diversas plataformas educacionais, calculadoras online, 
                simuladores interativos e outros recursos digitais para o ensino da matemática.
              </p>
              <Link href="/multimidia/plataformas" className="btn btn-primary">
                Ver Plataformas e Recursos
              </Link>
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