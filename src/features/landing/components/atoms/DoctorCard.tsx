import { DoctorInfo } from '../../interfaces/doctor'

export function DoctorCard({ image, name, experience, specialty }: DoctorInfo) {
  return (
    <div>
      <img src={image} />
      <div className="text-center">
        <span>{name}</span>
        <p>{specialty}</p>
        <p>{experience}</p>
      </div>
    </div>
  )
}
