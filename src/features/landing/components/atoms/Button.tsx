export function Button({
  color,
  text,
  width,
  icon,
}: {
  color: string
  text: string
  width: number
  icon: string
}) {
  return (
    <button style={{ width: width, backgroundColor: color }}>
      <span>{icon}</span>
      {text}
    </button>
  )
}
