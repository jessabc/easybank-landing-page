interface Props {
  card: {
    icon: string,
    title: string,
    text: string
  }
}

export default function Card({card}: Props) {
  return (
    <div className='flex flex-col items-center gap-4 mb-8 sm:items-start'>
      <img src={`../images/${card.icon}`} alt="icon" />
      <h3 className='text-slate-600 font-semibold text-xl'>{card.title}</h3>
      <p className='text-slate-500 text-sm text-center sm:text-left'>{card.text}</p>
    </div>
  )
}
