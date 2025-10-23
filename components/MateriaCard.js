import Link from 'next/link'

export default function MateriaCard({ titulo, descricao, link }) {
  return (
    <div className="col">
      <Link href={link} className="text-decoration-none text-dark">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descricao}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}