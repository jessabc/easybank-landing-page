import Card from './Card'

const cardData = [
    {
        icon: 'icon-online.svg',
        title: 'Online Banking',
        text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        icon: 'icon-budgeting.svg',
        title: 'Simple Budgeting',
        text: 'See exactly where your money goes each month. Receive notifications when you\’re close to hitting your limits.'
    },
    {
        icon: 'icon-onboarding.svg',
        title: 'Fast Onboarding',
        text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
        icon: 'icon-api.svg',
        title: 'Open API',
        text: ' Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    },
]


export default function MiddleSection() {

    const cardElements = cardData.map(card => <Card card={card}/>)

  return (
    <div className='my-16 px-8 bg-slate-100 py-10'>
        <div className='flex flex-col gap-2 mb-12 text-center sm:text-left sm:w-2/3'>
            <h2 className='text-slate-700 font-semibold text-3xl'>Why choose Easybank?</h2>
            <p className='text-slate-500 text-sm'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>

        <div className='flex flex-col gap-3 sm:flex-row'>
            {cardElements}
        </div>    
    </div>
  )
}
