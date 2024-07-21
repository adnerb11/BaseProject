import { DoctorInfo } from '../interfaces/doctor'
import { DoctorCard } from './atoms/DoctorCard'

export function TopDoctors({ doctors }: { doctors: DoctorInfo[] }) {
  return (
    <div>
      {doctors.map((doctor: DoctorInfo) => (
        <div key={doctor.id}>
          <DoctorCard {...doctor} />
        </div>
      ))}
    </div>
  )
}
