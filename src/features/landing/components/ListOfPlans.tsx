import { Plan } from '../interfaces/plan'
import PlanCard from './atoms/PlanCard'

export function ListOfPlans({ plans }: { plans: Plan[] }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl ">Nuestros planes de pago</h3>
      <p>
        Elige el plan que mejor se adapte a tus necesidades y accede a una atención médica de
        calidad.
      </p>
      <div>
        {plans.map((plan: Plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  )
}
