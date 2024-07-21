import { StepsToRegister } from '../../interfaces/stepsToRegister'

export function Card({ image, title, description }: StepsToRegister) {
  return (
    <div className="w-40">
      <img src={image} />
      <h4 className="text-center">{title}</h4>
      <p>{description}</p>
    </div>
  )
}
