import { ReviewData } from '../../interfaces/reviewData'

export function ReviewCard({ avatar, calification, comments, name }: ReviewData) {
  return (
    <div>
      <div>
        <div>
          <img src={avatar} />
          <label>{name}</label>
        </div>
        <div>
          <span>{calification}</span>
        </div>
      </div>
      <div>
        <p>{comments}</p>
      </div>
    </div>
  )
}
