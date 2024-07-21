import { Card } from './atoms/Card'
export function ProcessInformation() {
  const steps = [
    {
      image: '',
      title: '  Registrate en Nuestra Plataforma',
      description:
        'Completa tu perfil con información básica para acceder a todas nuestras funcionalidades.',
    },
    {
      image: '',
      title: '',
      description: '',
    },
    {
      image: '',
      title: '',
      description: '',
    },
    {
      image: '',
      title: '',
      description: '',
    },
  ]
  return (
    <div>
      <h3 className="text-center text-2xl ">¿Como Funciona?</h3>
      {steps.map((step) => (
        <div key={step.title}>
          <Card {...step} />
        </div>
      ))}
    </div>
  )
}
