import React from 'react'
import { Plan } from '../../interfaces/plan'

function PlanCard({ title, shortDescription, price, features }: Plan) {
  return (
    <div className="w-56 bg-[#DCDAE1]">
      <h4>{title}</h4>
      <span>{price}</span>
      <div>
        <p>Nombre del plan: {title}</p>
        <p>Precio: {price}</p>
        <p>Descripcion corta: {shortDescription}</p>
        <p>Caracteristicas</p>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlanCard
