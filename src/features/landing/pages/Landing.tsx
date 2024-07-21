import { Plan } from '../interfaces/plan'
import {
  Footer,
  Hero,
  ListOfPlans,
  Navbar,
  TopDoctors,
  Reviews,
  AboutUs,
  ProcessInformation,
} from '../components'
import { ReviewData } from '../interfaces/reviewData'
import { DoctorInfo } from '../interfaces/doctor'

export default function Landing() {
  const plans: Plan[] = [
    {
      title: 'Plan Basico',
      features: ['Hasta 3 consultas'],
      price: 30,
      shortDescription: 'Ideal para consultas',
    },
  ]
  const reviews: ReviewData[] = [
    {
      avatar: '',
      calification: 0,
      comments: '',
      name: '',
      id: 0,
    },
  ]
  const doctors: DoctorInfo[] = [
    {
      experience: 0,
      id: 1,
      image: '',
      name: 'Brenda',
      specialty: 'Cardiologia',
    },
  ]
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ProcessInformation />
        <div className="text-center">
          <h3 className=" text-2xl ">Opiniones de los usuarios</h3>
          <p>Mire lo que nuestros clientes estan diciendo </p>
          <Reviews reviews={reviews} />
        </div>
        <div className="text-center">
          <h3 className=" text-2xl ">Medicos Destacados</h3>
          <p>Nuestra organizacion esta compuesta por un equipo multidisciplinario</p>
          <TopDoctors doctors={doctors} />
        </div>
        <ListOfPlans plans={plans} />
      </main>
      <Footer />
    </>
  )
}
