import Layout from '../components/Layout'
import AppScripts from '../components/AppScripts'

export default function Sobre() {
  return (
    <Layout title="Sobre - EducaMat">
      
      {/* Texto central */}
      <main className="container py-5 mt-5 fw-bold">
        <h1 className="text-center mb-4">Como surgiu o EducaMat</h1>
        <p className="text-center fs-5">
          O EducaMat é um projeto criado para apoiar professores de Matemática do 1º ano do Ensino Médio, oferecendo um repositório digital com conteúdos organizados, acessíveis e alinhados à Base Nacional Comum Curricular (BNCC).
        </p>
        <p className="text-center fs-5">
          A ideia do projeto surgiu quando percebemos a queda no desempenho dos alunos nas avaliações, especialmente em conteúdos fundamentais de Matemática. Diante disso, enxergamos a necessidade urgente de inovar na forma de ensinar, buscando alternativas que tornassem o aprendizado mais dinâmico, envolvente e compatível com a realidade dos estudantes.
        </p>
        <p className="text-center fs-5">
          Com isso em mente, decidimos criar uma plataforma que unisse tecnologia, interatividade e praticidade, facilitando o acesso a materiais de qualidade tanto para professores quanto para alunos. Nosso objetivo é tornar o ensino da Matemática mais atrativo e eficiente, contribuindo diretamente para a melhoria dos resultados em sala de aula.
        </p>
        <p className="text-center fs-5">
          Acreditamos que a educação pode ser transformadora quando aliada à inovação. Por isso, esperamos que o EducaMat se torne um parceiro no dia a dia docente e um estímulo ao aprendizado dos estudantes.
        </p>
      </main>

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