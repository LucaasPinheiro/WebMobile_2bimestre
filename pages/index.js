import Layout from '../components/Layout'
import Link from 'next/link'
import AppScripts from '../components/AppScripts'

export default function Home() {
  return (
    <Layout title="Repositório de Estudos">
      
      {/* Texto central */}
      <main className="container py-5 mt-5 fw-bold">
        <h1 className="text-center mb-4">Bem-vindo ao EducaMat!</h1>
        <p className="text-center fs-5">
          Este repositório foi desenvolvido para apoiar professores de Matemática do 1º ano do Ensino Médio no planejamento de aulas e na seleção de recursos didáticos.
          A organização dos conteúdos teve como base a Base Nacional Comum Curricular (BNCC) e uma curadoria de materiais didáticos amplamente utilizados na Grande São Paulo,
          o que resultou na estrutura temática que você encontra neste site.
        </p>
        <p className="text-center fs-5">
          Os materiais estão divididos em seções como <strong>Conteúdos</strong> e <strong>Multimídia</strong>, facilitando a localização de recursos teóricos, práticos e interativos.
          A navegação pode ser feita pelo menu superior, permitindo que o professor encontre com agilidade os materiais mais adequados para suas aulas.
        </p>
        <p className="text-center fs-5">
          Esperamos que este espaço contribua para enriquecer sua prática docente. Boas aulas!
        </p>
      </main>

      {/* Categorias */}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          {/* Cards de Matérias */}
          <div className="col">
            <Link href="/inicio" className="text-decoration-none text-dark">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="text-center card-title">Conteúdos</h5>
                  <p className="text-center card-text">Clique aqui para acessar os conteúdos!</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-light text-center text-muted py-4 border-top mt-5">
        <div className="container">
          <p className="mb-0 px-3" style={{ fontSize: '14px' }}>
            Este repositório foi criado a partir da curadoria de materiais disponíveis gratuitamente na internet, sendo que os direitos autorais pertencem a cada um dos materiais encontrados. <br />
          </p>
        </div>
        <AppScripts />
      </footer>
    </Layout>
  )
}