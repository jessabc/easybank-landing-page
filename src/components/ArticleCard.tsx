interface Props {
  article: {
    image: string,
    author: string,
    title: string,
    text: string
  }
}

export default function ArticleCard({article}: Props) {
  return (
    <div className=' mb-6 sm:flex sm:flex-col'>
      <img src={`../images/${article.image}`} alt="article image" className='mb-4 sm:object-cover sm:h-32'/>
      <div className='flex flex-col gap-1 mx-8'>
        <p className='text-slate-500 text-xs'>{article.author}</p>
        <p className='text-slate-600 font-semibold text-xl sm:text-base'>{article.title}</p>
        <p className='text-slate-500 text-sm'>{article.text}</p>
      </div>
    </div>
  )
}
