import { Button } from './atoms/Button'

export function Hero() {
  return (
    <div>
      <div>
        <img />
        <p>Bienvenido a la consulta médica</p>
        <Button text={'Conocenos mas'} width={100} color={'#543D87'} icon={''} key={1}></Button>
      </div>
      <div className="flex">
        <div>
          <span>Registrate ahora y pide una cita</span>
        </div>
        <div>
          <p>Crea una cuenta</p>
          <p>
            ¿Ya tienes una cuenta?
            <span> Iniciar sesión</span>
          </p>
          <div className=" flex flex-col">
            <Button
              text={'Iniciar sesion con Google'}
              width={100}
              color={'white'}
              icon={''}
              key={1}
            ></Button>
            <Button
              text={'Iniciar sesion con Apple'}
              width={100}
              color={'white'}
              icon={''}
              key={1}
            ></Button>
            <Button
              text={'Iniciar sesión con correo'}
              width={100}
              color={'#6B4CAA'}
              icon={''}
              key={1}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
