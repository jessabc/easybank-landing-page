import ArticleCard from './ArticleCard'

const articleData = [
    {
        image: 'image-currency.jpg',
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...'
    },
    {
        image: 'image-restaurant.jpg',
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        text: ' Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
        image: 'image-plane.jpg',
        author: 'Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        image: 'image-confetti.jpg',
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    },
]


export default function ArticlesSection() {

    const articleElements = articleData.map(article => <ArticleCard article={article}/>)

  return (
    <div className='sm:px-8'>
        <h2 className='text-slate-700 font-semibold text-3xl text-center mb-4 sm:text-left'>Latest Articles</h2>
        <div className='flex flex-col gap-3 sm:flex-row '>
            {articleElements}
        </div>
    </div>
  )
}
