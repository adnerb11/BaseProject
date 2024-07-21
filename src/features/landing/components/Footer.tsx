export function Footer() {
  const contactInfo = [
    {
      type: 'Direccion',
      value: ' 123 Calle Principal, Ciudad, País',
    },
    {
      type: 'Correo electronico',
      value: 'contacto@tuempresa.com',
    },
    {
      type: 'Número de Telefono',
      value: '+123045607890',
    },
  ]
  const usefullLinks = [
    {
      description: 'Politica de Privacidad',
      link: '',
    },
    {
      description: 'Terminos y Condiciones',
      link: '',
    },
    {
      description: 'Soporte',
      link: '',
    },
  ]
  const socialNetworks = [
    {
      description: 'Facebook',
      icon: '',
      url: '',
    },
    {
      description: 'Instagram',
      icon: '',
      url: '',
    },
    {
      description: 'Twitter',
      icon: '',
      url: '',
    },
  ]
  return (
    <div className="bg-[#413F3F] text-white p-10 h-[549px] ">
      <div className="flex justify-between mb-32">
        <div>
          <img src="" alt="Telemed image" />
        </div>
        <div>
          <p>Informacion de Contacto</p>
          {contactInfo.map((info) => (
            <div key={info.value}>
              <p>{info.type}</p>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
        <div>
          <p>Enlaces utiles</p>
          {usefullLinks.map((link) => (
            <div key={link.description}>
              <a href={link.link}>{link.description}</a>
            </div>
          ))}
        </div>
        <div className="flex">
          {socialNetworks.map((social) => (
            <div key={social.description}>
              <a href={social.url}>
                <img src={social.icon} alt={social.description} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="text-white" />
      </div>
    </div>
  )
}
