import Layout from '../components/Layout'
import MateriaCard from '../components/MateriaCard'
import AppScripts from '../components/AppScripts'

export default function Inicio() {
  return (
    <Layout title="Repositório de Estudos">
      
      {/* Hero Section */}
      <div className="px-4 py-5 text-center">
        <h2 id="saudacao" className="fw-bold mb-3"></h2>
        <h1 className="display-5 fw-bold">Repositório de Materiais</h1>
      </div>

      {/* Categorias */}
      <div className="container-fluid px-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          
          <MateriaCard 
            titulo="Operações"
            descricao="Potenciação e Radiciação."
            link="/materias/operacoes"
          />

          <MateriaCard 
            titulo="Notação Científica"
            descricao="Conceitos e aplicações."
            link="/materias/notacao"
          />

          <MateriaCard 
            titulo="Técnicas Algébricas"
            descricao="Produtos Notáveis e Fatoração."
            link="/materias/algebra"
          />

          {/* Continue com os outros cards... */}
          <MateriaCard 
            titulo="Equações e Inequações"
            descricao="Equações e Inequações do 1º e 2º grau."
            link="/materias/equacoes"
          />

          <MateriaCard 
            titulo="Estatística"
            descricao="Análise de dados e representações."
            link="/materias/estatistica"
          />

          <MateriaCard 
            titulo="Razão e Proporção"
            descricao="Grandezas diretamente e inversamente proporcionais."
            link="/materias/razao"
          />

          <MateriaCard 
            titulo="Porcentagem"
            descricao="Cálculo e aplicações."
            link="/materias/porcentagem"
          />

          <MateriaCard 
            titulo="Geometria"
            descricao="Triângulos, circunferências e áreas."
            link="/materias/geometria"
          />

          <MateriaCard 
            titulo="Funções"
            descricao="Função do 1º e 2º grau, exponencial e logarítmica."
            link="/materias/funcoes"
          />

          <MateriaCard 
            titulo="Sequências"
            descricao="PA & PG."
            link="/materias/sequencias"
          />

          <MateriaCard 
            titulo="Multimidia"
            descricao="Filmes, Documentarios, Jogos"
            link="/multimidia"
          />

        </div>
      </div>

      <footer className="bg-light text-center text-muted py-4 border-top mt-5">
        <div className="container-fluid px-5">
          <p className="mb-0 px-3" style={{ fontSize: '14px' }}>
            Este repositório foi criado a partir da curadoria de materiais disponíveis gratuitamente na internet, sendo que os direitos autorais pertencem a cada um dos materiais encontrados. <br />
          </p>
        </div>
        <AppScripts />
      </footer>
    </Layout>
  )
}