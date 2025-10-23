O EducaMat é um projeto criado para apoiar professores de Matemática do 1º ano do Ensino Médio, oferecendo um repositório digital com conteúdos organizados, acessíveis e alinhados à Base Nacional Comum Curricular (BNCC).

A ideia do projeto surgiu quando percebemos a queda no desempenho dos alunos nas avaliações, especialmente em conteúdos fundamentais de Matemática. Diante disso, enxergamos a necessidade urgente de inovar na forma de ensinar, buscando alternativas que tornassem o aprendizado mais dinâmico, envolvente e compatível com a realidade dos estudantes.

Com isso em mente, decidimos criar uma plataforma que unisse tecnologia, interatividade e praticidade, facilitando o acesso a materiais de qualidade tanto para professores quanto para alunos. Nosso objetivo é tornar o ensino da Matemática mais atrativo e eficiente, contribuindo diretamente para a melhoria dos resultados em sala de aula.

Acreditamos que a educação pode ser transformadora quando aliada à inovação. Por isso, esperamos que o EducaMat se torne um parceiro no dia a dia docente e um estímulo ao aprendizado dos estudantes.

como rodar:

no VS Code, acesse o terminal integrado navegue até a pasta do projeto usando o comando cd seguido do caminho específico do diretório. O comando utilizado foi cd meu-projeto. Dentro da pasta correta, execute o comando npm run dev para iniciar o servidor de desenvolvimento do Next.js. Este comando aciona o script "dev" definido no arquivo package.json, que por sua vez executa o comando next dev.

<img width="837" height="347" alt="image" src="https://github.com/user-attachments/assets/afbb83fd-2ec1-4a97-b5dc-54eb30cd8cb2" />

<img width="2430" height="935" alt="image" src="https://github.com/user-attachments/assets/ab5dcb93-3edb-4136-afa8-22d858e1541d" />



Migração para o ReactJs(estrutura inicial):

Com React foi possivel melhorar a dinamicidade, legibilidade e possibilidade de manutenção do código através dos componentes reutizaváveis, além do aumento da performance com o Single Page Application.

Exemplos:

Componentes: 

<img width="242" height="117" alt="image" src="https://github.com/user-attachments/assets/c4ad8baa-21a6-411b-bc13-2aecb7495c45" />


SPA: ### HTML Tradicional:
```html
<a href="sobre.html">Sobre</a>
```

### React/NextJS:
```jsx
<li className="nav-item">
  <Link className="nav-link px-3" href="/sobre">
    Sobre
  </Link>
</li>
```
