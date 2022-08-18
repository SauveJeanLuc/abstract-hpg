export default function Service({imageUrl,title,description, serviceStyle}) {
  return (
    <main className={`flex flex-row ${serviceStyle}`}>
        <div>
            <img src={`${imageUrl}`} alt="Logo" className="w-20"/>
        </div>
        <div>
            <h1 className="text-lg">{title}</h1>
            <p className='max-w-screen-sm text-md py-1.5'>{description}</p>
            <div>
                <a href="#" className='to-blue-600 text-md text-indigo-500'>Learn More</a>
                {/* Logo Here */}

            </div>
        </div>
    </main>
  )
}