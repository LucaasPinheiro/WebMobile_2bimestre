import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-light border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo */}
          <Link className="navbar-brand me-3" href="/inicio" style={{ fontSize: '24px', fontWeight: 'bold' }}>
            <img id="logo" src="/images/logo3.png" alt="Logo EducaMat" style={{ height: '50px' }} />
          </Link>

          {/* Botão hamburguer */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Botão Dark Mode */}
          <button id="darkModeToggle" className="btn btn-outline-secondary ms-3">🌓</button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center flex-wrap">
              <li className="nav-item"><Link className="nav-link px-3" href="/">Início</Link></li>
              <li className="nav-item"><Link className="nav-link px-3" href="/sobre">Sobre</Link></li>

              {/* Dropdown Conteúdos */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-3" href="#" id="dropdownMaterias" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Conteúdos
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMaterias">
                  <li><Link className="dropdown-item" href="/materias/operacoes">Operações</Link></li>
                  <li><Link className="dropdown-item" href="/materias/notacao">Notação Científica</Link></li>
                  <li><Link className="dropdown-item" href="/materias/algebra">Técnicas Algébricas</Link></li>
                  <li><Link className="dropdown-item" href="/materias/equacoes">Equações e Inequações</Link></li>

                  {/* Submenu Funções */}
                  <li className="dropdown-submenu position-relative">
                    <a className="dropdown-item dropdown-toggle" href="#">Funções</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/materias/func/ConceitosFundamentais">Conceitos Fundamentais</Link></li>
                      <li><Link className="dropdown-item" href="/materias/func/Equacoesexponenciais">Equações Exponenciais</Link></li>
                      <li><Link className="dropdown-item" href="/materias/func/Funcao1grau">Função do 1º Grau</Link></li>
                      <li><Link className="dropdown-item" href="/materias/func/Funcao2grau">Função do 2º Grau</Link></li>
                      <li><Link className="dropdown-item" href="/materias/func/Funcaoexponencial">Função Exponencial</Link></li>
                      <li><Link className="dropdown-item" href="/materias/func/Logaritmos">Função Logarítmica</Link></li>
                    </ul>
                  </li>

                  {/* Submenu Geometria */}
                  <li className="dropdown-submenu position-relative">
                    <a className="dropdown-item dropdown-toggle" href="#">Geometria</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/materias/geo/areapoligonos">Área de Polígonos</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/arearazao">Área e razão entre figuras planas</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/circunferencia">Circunferência e círculo</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/poligonosregulares">Polígonos regulares</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/relacoes">Relações trigonométricas em polígonos</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/retangulos">Triângulos retângulos</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/retasparalelas">Retas paralelas cortadas por uma transversal</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/semelhanca">Semelhança de triângulos</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/simetria">Simetrias e congruências</Link></li>
                      <li><Link className="dropdown-item" href="/materias/geo/teorematales">Teorema de Tales</Link></li>
                    </ul>
                  </li>

                  <li><Link className="dropdown-item" href="/materias/estatistica">Estatística</Link></li>
                  <li><Link className="dropdown-item" href="/materias/porcentagem">Porcentagem</Link></li>
                  <li><Link className="dropdown-item" href="/materias/sequencias">Sequências</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link px-3" href="/multimidia">Multimídia</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}