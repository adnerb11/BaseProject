export function AboutUs() {
  const features = [
    {
      icon: '',
      description: 'Acceso rápido y fácil a profecionales médicos.',
    },
    {
      icon: '',
      description: 'Consultas desde cualquier lugar y cualquier momento.',
    },
    {
      icon: '',
      description: 'Ahorra tiempo y dinero en desplazamientos.',
    },
    {
      icon: '',
      description: 'Privacidad y seguridad garantizadas.',
    },
  ]
  return (
    <div className="flex-col w-full bg-purple-400 justify-center items-center">
      <h3 className="text-center  text-2xl  ">¿Por qué elegirnos?</h3>
      <div className="flex w-full items-center justify-around">
        {features.map((feature) => (
          <div key={feature.description} className="w-40">
            <img src={feature.icon} alt={feature.description} />
            <p className="text-xs"> {feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
